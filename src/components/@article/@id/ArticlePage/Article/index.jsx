import React from 'react'
import { node, object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/es/Paper/Paper'
import Avatar from '@material-ui/core/es/Avatar/Avatar'

const styles = {
  root: {},
  title: {
    marginTop: 10,
  },
  header: {
    margin: '8px 0 15px',
    padding: 15,
    background: '#2786ff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
}

const Article = ({ classes, title, image, children }) =>
  <div>
    <Paper className={classes.header}>
      {image && <Avatar alt="Article image" src={image} className={classes.image} />}
      <Typography component="h3" variant="title" className={classes.title} color="secondary">
        {title}
      </Typography>
    </Paper>
    <Typography
      classes={classes}
      style={{ lineHeight: 1.8, padding: 5 }}
      component="article"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  </div>

Article.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  title: node.isRequired,
  image: node,
}

Article.defaultProps = {
  image: '',
}

export default withStyles(styles)(Article)

import React from 'react'
import { object, node } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {},
  title: {
    marginBottom: 15,
  },
}

const Article = ({ classes, title, children }) =>
  <div>
    <Typography gutterBottom variant="title" component="h2" className={classes.title}>
      {title}
    </Typography>
    <Typography
      classes={classes}
      component="article"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  </div>

Article.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  title: node.isRequired,
}

export default withStyles(styles)(Article)

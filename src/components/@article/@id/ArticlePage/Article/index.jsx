import React, { Component } from 'react'
import { node, object, func } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/es/Paper/Paper'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import Button from '@material-ui/core/Button/Button'

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
  addKeyword: {
    position: 'absolute',
  },
}

class Article extends Component {
  state = {
    addKeyword: {
      top: 0,
      left: 0,
      display: 'none',
    },
  }
  showButton = (e) => {
    const addKeyword = { top: e.clientY + 10, left: e.clientX + 20, display: 'block' }
    this.setState({ addKeyword })

    setTimeout(() => this.setState({
      addKeyword: {
        ...addKeyword,
        display: 'none',
      },
    }), 1000)
  }

  render() {
    const { classes, title, image, children, onSelect } = this.props
    return (
      <div>
        <div style={this.state.addKeyword} className={classes.addKeyword}>
          <Button onClick={onSelect} variant="raised">add keyword</Button>
        </div>
        <Paper className={classes.header}>
          {image && <Avatar alt="Article image" src={image} className={classes.image} />}
          <Typography component="h3" variant="title" className={classes.title} color="secondary">
            {title}
          </Typography>
        </Paper>
        <Typography
          onMouseUp={this.showButton}
          classes={classes}
          style={{ lineHeight: 1.8, padding: 5 }}
          component="article"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
    )
  }
}

Article.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  title: node.isRequired,
  image: node,
  onSelect: func.isRequired,
}

Article.defaultProps = {
  image: '',
}

export default withStyles(styles)(Article)

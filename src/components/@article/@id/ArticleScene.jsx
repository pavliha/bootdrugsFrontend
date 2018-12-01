import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Scene from './Scene'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
  },
  card: {},
  cards: {
    minWidth: 300,
    marginLeft: 15,
  },
}

class ArticleScene extends React.Component {
  componentDidMount() {
    const { actions, articleReducer } = this.props
    actions.article.find(articleReducer._id)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Scene />
      </div>
    )
  }
}

ArticleScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  articleReducer: object.isRequired,
}

export default withStyles(styles)(connector(ArticleScene))

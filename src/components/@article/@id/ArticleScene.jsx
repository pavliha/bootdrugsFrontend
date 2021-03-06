import React from 'react'
import { isEmpty } from 'lodash'
import { object } from 'prop-types'
import Loading from 'components/Loading'
import { withStyles } from '@material-ui/core'
import ArticlePage from './ArticlePage'
import connector from './connector'

const styles = {
  root: {
    margin: 15,
    display: 'flex',
    height: '94%',
  },
  card: {},
  cards: {
    minWidth: 300,
    marginLeft: 15,
  },
}


class ArticleScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    actions.article.find(match.params.id)
  }

  render() {
    const { classes, article } = this.props


    if (isEmpty(article) || article.loading) return <Loading />

    return (
      <div className={classes.root}>
        <ArticlePage />
      </div>
    )
  }
}

ArticleScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  article: object.isRequired,
  match: object.isRequired,
}

export default withStyles(styles)(connector(ArticleScene))

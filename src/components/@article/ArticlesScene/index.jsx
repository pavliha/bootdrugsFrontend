import React from 'react'
import { object } from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Loading from '../../Loading'
import Articles from './Articles'
import connector from './connector'

class ArticlesScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.article.all()
  }

  render() {
    const { article } = this.props
    return (isEmpty(article) || article.loading) ? <Loading /> : <Articles />
  }
}

ArticlesScene.propTypes = {
  actions: object.isRequired,
  article: object.isRequired,
}

export default connector(ArticlesScene)

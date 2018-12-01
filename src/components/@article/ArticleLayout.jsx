import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'
import ArticlesScene from './ArticlesScene'
import ArticleScene from './@id/ArticleScene'

const ArticleLayout = () =>
  <Switch>
    <Route exact path="/article" component={ArticlesScene} />
    <Route exact path="/article/:id" component={ArticleScene} />
  </Switch>

export default withTheme(ArticleLayout)

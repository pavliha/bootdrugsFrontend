import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'
import Header from 'components/Header'
import Container from 'components/Container'
import TrendScene from 'components/@keyword/@id/TrendScene'
import AnalyzeScene from 'components/@analyze/AnalyzeScene'
import IndexScene from './IndexScene'
import TrendsScene from './@trends/TrendsScene'
import Background from './Background'
import ArticleScene from './@article/@id/ArticleScene'

const LayoutScene = () =>
  <Background>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={IndexScene} />
        <Route exact path="/analyze" component={AnalyzeScene} />
        <Route path="/trends" component={TrendsScene} />
        <Route path="/article/:id" component={ArticleScene} />
        <Route path="/keyword/:id" component={TrendScene} />
      </Switch>
    </Container>
  </Background>

export default withTheme(LayoutScene)

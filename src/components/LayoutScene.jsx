import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'
import Header from 'components/Header'
import Container from 'components/Container'
import Background from 'components/Background'
import IndexScene from 'components/IndexScene/IndexScene'
import TrendsScene from 'components/@trends/TrendsScene'
import ArticleScene from 'components/@article/@id/ArticleScene'
import TrendScene from 'components/@keyword/@id/TrendScene'

const LayoutScene = () =>
  <Background>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={IndexScene} />
        <Route path="/trends" component={TrendsScene} />
        <Route path="/article/:id" component={ArticleScene} />
        <Route path="/keyword/:id" component={TrendScene} />
      </Switch>
    </Container>
  </Background>

export default withTheme(LayoutScene)

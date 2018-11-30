import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'
import Header from 'components/Header'
import Container from 'components/Container'
import IndexScene from './IndexScene/IndexScene'
import TrandsScene from './@trends/TrendsScene'
import Background from './Background'
import ArticleViewer from './ArticleViewer'

const LayoutScene = () =>
  <Background>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={IndexScene} />
        <Route path="/article/:id" component={ArticleViewer} />
        <Route path="/trends" component={TrandsScene} />
      </Switch>
    </Container>
  </Background>

export default withTheme(LayoutScene)

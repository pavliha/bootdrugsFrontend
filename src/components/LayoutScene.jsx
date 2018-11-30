import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'
import Header from 'components/Header'
import Container from 'components/Container'
import IndexScene from './IndexScene/IndexScene'
import Background from './Background'

const LayoutScene = () =>
  <Background>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={IndexScene} />
      </Switch>
    </Container>
  </Background>

export default withTheme(LayoutScene)

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'
import Header from 'components/Header'
import Container from 'components/Container'
import Modal from 'components/Modal'
import IndexScene from './IndexScene/IndexScene'
import TrandsScene from './@trends/TrendsScene'
import PlacesLayout from './@places/PlacesLayout'
import Background from './Background'

const LayoutScene = () =>
  <Background>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={IndexScene} />
        <Route path="/trends" component={TrandsScene} />
        <Route path="/places" component={PlacesLayout} />
      </Switch>
    </Container>
    <Modal />
  </Background>

export default withTheme(LayoutScene)

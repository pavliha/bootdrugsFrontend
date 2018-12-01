import React from 'react'
import { object } from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Trends from './Trends'
import Loading from '../Loading'
import connector from './connector'

class TrendsScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.trends.all()
  }

  render() {
    const { trendsReducer } = this.props
    return (isEmpty(trendsReducer) || trendsReducer.loading) ? <Loading /> : <Trends />
  }
}

TrendsScene.propTypes = {
  trendsReducer: object.isRequired,
  actions: object.isRequired,
}

export default connector(TrendsScene)

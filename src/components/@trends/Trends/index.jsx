import React from 'react'
import { object } from 'prop-types'
import MyCard from './MyCard'
import connector from '../connector'

class Trends extends React.Component {
  render() {
    const { trendsReducer } = this.props

    return trendsReducer.trends.map(trend =>
      <MyCard key={trend._id} trend={trend} />)
  }
}

Trends.propTypes = {
  trendsReducer: object.isRequired,
}

export default connector(Trends)

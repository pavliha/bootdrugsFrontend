import React from 'react'
import { isEmpty } from 'lodash'
import { object } from 'prop-types'
import Loading from 'components/Loading'
import MyCard from './MyCard'
import connector from '../connector'

class Trends extends React.Component {
  render() {
    const { trendsReducer } = this.props
    if (isEmpty(trendsReducer) || trendsReducer.loading) return <Loading />

    return trendsReducer.trends.map(trend =>
      <MyCard key={trend._id} trend={trend} />)
  }
}

Trends.propTypes = {
  trendsReducer: object.isRequired,
}

export default connector(Trends)

import React from 'react'
import Trends from './Trends'
import trends from '../trends.json'

const TrendsScene = () =>
  trends.map((trend, index) =>
    <Trends key={index} trend={trend} />)

export default TrendsScene

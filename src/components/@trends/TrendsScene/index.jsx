import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Trends from './Trends'

const styles = () => ({
  root: {},
})

const TrendsScene = ({ classes }) =>
  <div className={classes.root}>
    <Trends />
  </div>

TrendsScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(TrendsScene)

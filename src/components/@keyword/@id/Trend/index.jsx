import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import connector from '../connector'

const styles = {}

const Trend = ({ classes, keyword }) =>
  <div>
    {console.log(keyword)}
  </div>

Trend.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(connector(Trend))

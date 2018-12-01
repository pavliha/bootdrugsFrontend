import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Trends from './Trends'
import connector from './connector'

const styles = {
  root: {},
}

class TrendsScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.trends.all()
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Trends />
      </div>
    )
  }
}

TrendsScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(TrendsScene))

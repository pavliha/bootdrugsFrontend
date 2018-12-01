import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Trend from './Trend'
import connector from './connector'

const styles = {
  root: {},
}

class TrendsScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    actions.keyword.find(match.params.id)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Trend />
      </div>
    )
  }
}

TrendsScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
}

export default withStyles(styles)(connector(TrendsScene))

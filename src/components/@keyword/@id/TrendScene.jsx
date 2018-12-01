import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Loading from 'components/Loading'
import isEmpty from 'lodash/isEmpty'
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
    const { classes, keyword } = this.props

    if (isEmpty(keyword) || keyword.loading) return <Loading />

    return (
      <div className={classes.root}>
        <Trend keyword={keyword.keyword} />
      </div>
    )
  }
}

TrendsScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  keyword: object.isRequired,
}

export default withStyles(styles)(connector(TrendsScene))

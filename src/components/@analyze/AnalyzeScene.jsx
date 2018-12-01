import React from 'react'
import { withStyles } from '@material-ui/core'
import { object } from 'prop-types'
import connector from './connector'
import ArticleForm from './ArticleForm'

const styles = {
  root: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
}

const AnalyzeScene = ({ classes }) => (
  <div className={classes.root}>
    <ArticleForm />
  </div>
)

AnalyzeScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(connector(AnalyzeScene))

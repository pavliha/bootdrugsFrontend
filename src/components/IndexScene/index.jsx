import React from 'react'
import { withStyles, Typography, Button } from '@material-ui/core'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  background: {
    background: 'url(/images/background.jpg)',
    backgroundPosition: 'cover',
    width: '100%',
    height: 550,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    textAlign: 'center',
  },
}

const IndexScene = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.background}>
      <div className={classes.block}>
        <Typography component="h1" variant="display1" color="secondary">
          Article Analyzer
        </Typography>
        <Typography gutterBottom variant="headline" color="secondary">
          Нормальный такой анализатор статей написаный за 24 часа
        </Typography>
        <Link to="/analyze">
          <Button variant="raised" style={{ color: 'white' }} color="primary">Анализировать статью</Button>
        </Link>
      </div>
    </div>
  </div>
)

IndexScene.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(connector(IndexScene))

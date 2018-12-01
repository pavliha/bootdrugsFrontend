/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router'
import shortTitle from 'utils/shortTitle'
import { Link } from 'react-router-dom'
import { AppBar, Button, Toolbar, Typography, withStyles } from '@material-ui/core'
import connector from './connector'

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  appBar: {
    background: theme.palette.primary.main,
  },
  toolbar: {
    display: 'flex',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  iconButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
})

const Header = (props) => {
  const { classes, header } = props
  return (
    <header className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="secondary" className={classes.title}>
            <Link to={header.link}>{shortTitle(header.title)}</Link>
          </Typography>

          <Link to="/analyze"><Button color="secondary">Анализ</Button></Link>
          <Link to="/article"><Button color="secondary">Статья</Button></Link>
          <Link to="/trends"><Button color="secondary">Тренды</Button></Link>

        </Toolbar>
      </AppBar>
    </header>
  )
}

Header.propTypes = {
  classes: object.isRequired,
  header: object.isRequired,
}

export default withStyles(styles)(connector(withRouter(Header)))

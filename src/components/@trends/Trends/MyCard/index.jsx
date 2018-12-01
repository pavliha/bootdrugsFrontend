import React from 'react'
import { object } from 'prop-types'
import { Avatar, Button, Card, CardContent, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import shortDescriptions from 'utils/shortDescriptions'

const styles = () => ({
  root: {
    display: 'flex',
    margin: 20,
  },
  media: {
    width: 250,
    height: 250,
    borderRadius: 0,
  },
  title: {
    paddingTop: 25,
    paddingLeft: 60,
  },
})

const Trends = ({ classes, trend }) =>
  <Card className={classes.root}>
    <Avatar
      className={classes.media}
      src={trend.picture}
    />
    <div>
      <Typography variant="title" className={classes.title}>{trend.title}</Typography>
      <CardContent>
        {shortDescriptions(trend.extract)}
      </CardContent>
      <Link to={`trends/${trend._id}`}><Button color="primary">Подробнее</Button></Link>
    </div>
  </Card>

Trends.propTypes = {
  classes: object.isRequired,
  trend: object.isRequired,
}

export default withStyles(styles)(Trends)

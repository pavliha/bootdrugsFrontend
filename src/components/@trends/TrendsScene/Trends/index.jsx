import React from 'react'
import { object } from 'prop-types'
import { Avatar, Card, CardContent, withStyles } from '@material-ui/core'
import shortDescriptions from 'utils/shortDescriptions'
import Typography from '@material-ui/core/es/Typography/Typography'

const styles = () => ({
  root: {
    display: 'flex',
    margin: 20,
  },
  media: {
    width: 280,
    height: 280,
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
      src={trend.image}
    />
    <div>
      <Typography variant="title" className={classes.title}>{trend.title}</Typography>
      <CardContent>
        {shortDescriptions(trend.description)}
      </CardContent>
    </div>
  </Card>

Trends.propTypes = {
  classes: object.isRequired,
  trend: object.isRequired,
}

export default withStyles(styles)(Trends)

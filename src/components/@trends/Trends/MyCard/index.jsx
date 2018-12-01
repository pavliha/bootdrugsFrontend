import React from 'react'
import { object } from 'prop-types'
import { Avatar, Button, Card, CardContent, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import shortDescriptions from 'utils/shortDescriptions'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import isEmpty from 'lodash/isEmpty'

const styles = () => ({
  root: {
    display: 'flex',
    margin: 20,
  },
  card: {
    height: 250,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  circular: {
    width: 80,
    paddingTop: 10,
    paddingRight: 20,
  },
  link: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
})

const image = '/images/default.png'

const Trends = ({ classes, trend }) =>
  <Card className={classes.root}>
    <Avatar
      className={classes.media}
      src={isEmpty(trend.picture) ? image : trend.picture}
    />
    <div className={classes.card}>
      <div className={classes.flex}>
        <Typography variant="title" className={classes.title}>{trend.title}</Typography>
        <div className={classes.circular}>
          <CircularProgressbar
            percentage={trend.percent}
            text={`${trend.percent}%`}
            styles={{
              path: { stroke: `rgba(62, 152, 199, ${trend.percent / 100})` },
              text: { fill: '#000', fontSize: '32px' },
            }}
          />
        </div>
      </div>
      <CardContent>
        {isEmpty(trend.extract) ? 'Not data' : shortDescriptions(trend.extract)}
      </CardContent>
      <div className={classes.link}>
        <Link to={`/keyword/${trend._id}`}><Button color="primary">Подробнее</Button></Link>
      </div>
    </div>
  </Card>

Trends.propTypes = {
  classes: object.isRequired,
  trend: object.isRequired,
}

export default withStyles(styles)(Trends)

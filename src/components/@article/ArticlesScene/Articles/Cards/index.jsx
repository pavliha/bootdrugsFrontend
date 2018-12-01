import React from 'react'
import { object } from 'prop-types'
import { Button, Card, CardContent, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import shortDescriptions from 'utils/shortDescriptions'
import 'react-circular-progressbar/dist/styles.css'

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

const Cards = ({ classes, article }) =>
  <Card className={classes.root}>
    <div className={classes.card}>
      <div className={classes.flex}>
        <Typography variant="title" className={classes.title}>{article.title}</Typography>
      </div>
      <CardContent>
        <Typography
          variant="subheading"
          dangerouslySetInnerHTML={{ __html: shortDescriptions(article.text) }}
        />
      </CardContent>
      <div className={classes.link}>
        <Link to={`/article/${article._id}`}><Button color="primary">Подробнее</Button></Link>
      </div>
    </div>
  </Card>

Cards.propTypes = {
  classes: object.isRequired,
  article: object.isRequired,
}

export default withStyles(styles)(Cards)

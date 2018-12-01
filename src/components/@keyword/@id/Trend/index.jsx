import React from 'react'
import { object } from 'prop-types'
import shortDescriptions from 'utils/shortDescriptions'
import { Avatar, Card, CardContent, Typography, withStyles } from '@material-ui/core'
import ArticlesGrid from './ArticlesGrid'

const styles = {
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
}

const Trend = ({ classes, keyword }) => (
  <div>
    <Card className={classes.root}>
      <Avatar
        className={classes.media}
        src={keyword.picture}
      />
      <div>
        <Typography variant="title" className={classes.title}>{keyword.title}</Typography>
        <CardContent>
          {shortDescriptions(keyword.extract)}
        </CardContent>
      </div>
    </Card>

    <Typography variant="subheading">Список всех статей:</Typography>
    <ArticlesGrid articles={keyword.articles} />
  </div>
)

Trend.propTypes = {
  classes: object.isRequired,
  keyword: object.isRequired,
}

export default withStyles(styles)(Trend)

import React from 'react'
import { array, object } from 'prop-types'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import truncate from 'lodash/truncate'

const styles = {
  root: {
    maxWidth: 960,
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    width: 300,
    margin: 10,
  },
}

const ArticlesGrid = ({ classes, articles }) => (
  <div className={classes.root}>
    {articles.map((article, index) => (
      <Card key={index} className={classes.card}>
        <CardContent>
          <a href={`/article/${article._id}`}>
            <Typography gutterBottom variant="title" component="h2">
              {article.title}
            </Typography>
          </a>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{ __html: truncate(article.text, { length: 50 }) }}
          />
        </CardContent>
      </Card>
    ))}
  </div>
)

ArticlesGrid.propTypes = {
  classes: object.isRequired,
  articles: array.isRequired,
}

export default withStyles(styles)(ArticlesGrid)

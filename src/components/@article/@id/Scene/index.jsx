import React from 'react'
import { isEmpty } from 'lodash'
import { object } from 'prop-types'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import Loading from 'components/Loading'
import Article from './Article'
import KeywordCard from './KeywordCard'
import connector from '../connector'

const styles = {
  root: {
    margin: 30,
    display: 'flex',
  },
  card: {},
  cards: {
    minWidth: 300,
    marginLeft: 15,
  },
}

class Scene extends React.Component {
  state = {
    article: {},
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.articleReducer.loaded) {
      const newArticle = Object.assign({}, nextProps.articleReducer.article)
      nextProps.articleReducer.keywords.forEach((keyword) => {
        newArticle.text = newArticle.text.replace(
          keyword.original,
          `<span class="mark" onclick=alert("click")>${keyword.original}</span>`,
        )
      })
      return { article: newArticle }
    }
    return null
  }

  render() {
    const { classes, articleReducer } = this.props
    const { article } = this.state

    if (isEmpty(articleReducer) || articleReducer.loading) return <Loading />

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Article title={article.title}>{article.text}</Article>
          </CardContent>
        </Card>
        <div className={classes.cards}>
          <Typography variant="subheading" gutterBottom component="h3">
            Ключевые слова в статье:
          </Typography>
          {articleReducer.keywords.map((keyword, index) =>
            <KeywordCard
              key={index}
              title={keyword.title}
              avatar={keyword.avatar}
              description={keyword.description}
            />)}
        </div>
      </div>
    )
  }
}

Scene.propTypes = {
  classes: object.isRequired,
  articleReducer: object.isRequired,
}

export default withStyles(styles)(connector(Scene))

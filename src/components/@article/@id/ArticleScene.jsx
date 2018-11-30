import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Card, CardContent } from '@material-ui/core'
import articleRes from './text.json'
import Article from './Article'
import KeywordCard from './KeywordCard'

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
  title: {
    marginBottom: 15,
  },
}

class ArticleScene extends React.Component {
  state = {
    article: {},
  }

  componentWillMount() {
    const newArticle = Object.assign({}, articleRes)
    newArticle.keywords.forEach((keyword) => {
      const key = Object.keys(keyword)[0].title
      newArticle.text = newArticle.text.replace(key, `<span class="mark">${key}</span>`)
    })
    this.setState({ article: newArticle })
  }

  render() {
    const { classes } = this.props
    const { article } = this.state
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Article title={article.title}>{article.text}</Article>
          </CardContent>
        </Card>
        <div className={classes.cards}>
          {article.keywords.map(keyword =>
            <KeywordCard
              title={keyword.title}
              avatar={keyword.avatar}
              description={keyword.description}
            />,
          )}
        </div>
      </div>
    )
  }
}

ArticleScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArticleScene)

/* eslint-disable react/no-did-mount-set-state */
import React from 'react'
import { object } from 'prop-types'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import Article from './Article'
import KeywordCard from './KeywordCard'
import connector from '../connector'

const styles = {
  root: {
    display: 'flex',
    minHeight: '100%',
  },
  card: {
    height: '100%',
    overflow: 'auto',
  },
  cards: {
    minWidth: 300,
    marginLeft: 15,
    height: '100%',
    overflow: 'auto',
  },
}

class ArticlePage extends React.Component {
  state = {
    article: {},
  }

  static getDerivedStateFromProps(nextProps) {
    const { article, actions } = nextProps
    if (article.loaded) {
      window.handleClick = (event) => {
        actions.article.highlight(event.target.innerHTML)
      }

      const newArticle = Object.assign({}, article.article)
      article.keywords.forEach((keyword) => {
        newArticle.text = newArticle.text.replace(
          keyword.original,
          `<span class="mark" onclick=handleClick(event)>${keyword.original}</span>`,
        )
      })
      return { article: newArticle }
    }
    return null
  }

  componentDidUpdate() {
    const data = document.querySelector('[data-selected=true]')
    const element = document.getElementById('card-list')

    if (element && data) {
      element.scrollTop = data.offsetTop - 200
    }
  }

  getSelectionText = () => {
    const { actions } = this.props
    let selected = null
    if (window.getSelection) {
      selected = window.getSelection()
        .toString()
    } else if (document.selection && document.selection.type !== 'Control') {
      selected = document.selection.createRange().text
    }
    actions.keyword.search(selected)
  }

  render() {
    const { classes, article: baseArticle } = this.props
    const { article } = this.state
    if (!article.text) return null

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Article onSelect={this.getSelectionText} title={article.title}>{article.text}</Article>
          </CardContent>
        </Card>
        <div className={classes.cards} id="card-list">
          <Typography variant="subheading" gutterBottom component="h3">
            Ключевые слова в статье:
          </Typography>
          {baseArticle.keywords.map((keyword, index) =>
            <KeywordCard
              key={index}
              selected={keyword.selected}
              title={keyword.title}
              avatar={keyword.avatar}
              description={keyword.description}
            />)}
        </div>
      </div>
    )
  }
}

ArticlePage.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  article: object.isRequired,
}

export default withStyles(styles)(connector(ArticlePage))

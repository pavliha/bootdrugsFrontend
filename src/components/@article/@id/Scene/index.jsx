import React from 'react'
import { object } from 'prop-types'
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'
import Article from './Article'
import KeywordCard from './Article/KeywordCard'
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

  componentWillMount() {
    const { articleReducer } = this.props
    const newArticle = Object.assign({}, articleReducer.article)
    articleReducer.keywords.forEach((keyword) => {
      newArticle.text = newArticle.text.replace(
        keyword.title,
        `<span class="mark" onclick=alert("click")>${keyword.title}</span>`,
      )
    })
    debugger
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
          <Typography variant="subheading" gutterBottom component="h3">
            Ключевые слова в статье:
          </Typography>
          {article.keywords.map((keyword, index) =>
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
  actions: object.isRequired,
  articleReducer: object.isRequired,
}

export default withStyles(styles)(connector(Scene))

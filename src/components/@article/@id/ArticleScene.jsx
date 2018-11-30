import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, withStyles } from '@material-ui/core'
import articleRes from './text.json'
import Article from './Article'
import KeywordCard from './KeywordCard'
import Typography from '@material-ui/core/es/Typography/Typography'

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

class ArticleScene extends React.Component {
  state = {
    article: {},
  }

  componentWillMount() {
    const newArticle = Object.assign({}, articleRes)
    newArticle.keywords.forEach((keyword) => {
      newArticle.text = newArticle.text.replace(
        keyword.title,
        `<span class="mark" onclick=alert("click")>${keyword.title}</span>`,
      )
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

ArticleScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArticleScene)

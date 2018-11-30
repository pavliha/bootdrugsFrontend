import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/es/Card/Card'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import Typography from '@material-ui/core/es/Typography/Typography'
import articleRes from './text.json'

const styles = {
  card: {
    margin: 30,
  },
  title: {
    marginBottom: 15,
  },
}

class ArticleViewer extends React.Component {
  state = {
    article: {},
  }

  componentWillMount() {
    const newArticle = Object.assign({}, articleRes)
    newArticle.keywords.forEach((keyword, index) => {
      const key = Object.keys(keyword).toString()
      newArticle.text = newArticle.text.replace(key[index], `<span class="mark">${key[index]}</span>`)
    })
    this.setState({ article: newArticle })
  }

  render() {
    const { classes } = this.props
    const { article } = this.state
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="title" component="h2" className={classes.title}>
            {article.title}
          </Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{ __html: article.text }}
          />
        </CardContent>
      </Card>
    )
  }
}

ArticleViewer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArticleViewer)

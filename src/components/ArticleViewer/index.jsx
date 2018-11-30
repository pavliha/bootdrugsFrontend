import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/es/Card/Card'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import Typography from '@material-ui/core/es/Typography/Typography'
import Paper from '@material-ui/core/es/Paper/Paper'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import articleRes from './text.json'

const styles = {
  card: {
    margin: 15,
  },
  title: {
    marginTop: 10,
  },
  header: {
    margin: '15px 15px 0 15px',
    padding: 15,
    background: '#2786ff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
}

class ArticleViewer extends React.Component {
  state = {
    article: {},
  }

  componentWillMount() {
    const newArticle = Object.assign({}, articleRes)
    newArticle.keywords.forEach((keyword) => {
      const key = Object.keys(keyword)[0]
      newArticle.text = newArticle.text.replace(new RegExp(key, 'g'), `<span class="mark">${key}</span>`)
    })
    this.setState({ article: newArticle })
  }

  render() {
    const { classes } = this.props
    const { article } = this.state
    return (
      <Card className={classes.card}>
        <Paper className={classes.header} style={{ background: article.image }}>
          <Avatar alt="Article image" src={article.image} className={classes.image} />
          <Typography component="h2" variant="h1" className={classes.title} color="secondary">
            {article.title}
          </Typography>
        </Paper>
        <CardContent>
          <Typography
            component="p"
            style={{ lineHeight: '1.5' }}
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

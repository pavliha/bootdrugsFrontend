import React from 'react'
import { object, string, node, bool } from 'prop-types'
import classNames from 'classnames'

import {
  withStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'

const styles = {
  root: {
    marginBottom: 15,
  },
  selected: {
    background: 'rgba(0,0,0,0.1)',
  },
  media: {
    height: 200,
  },
}

const KeywordCard = ({ classes, title, picture, wiki_url, description, selected }) =>
  <Card className={classNames({ [classes.root]: true, [classes.selected]: selected })} data-selected={selected}>
    {picture &&
    <a href={wiki_url}>
      <CardMedia
        className={classes.media}
        image={picture}
        title={title}
      />
    </a>}
    <CardContent>
      <Typography gutterBottom variant="subheading" component="h5" color="primary">
        <a href={wiki_url}>{title}</a>
      </Typography>
      <Typography component="p">
        {description}
      </Typography>
    </CardContent>
  </Card>

KeywordCard.propTypes = {
  classes: object.isRequired,
  title: string.isRequired,
  picture: string,
  description: node,
  selected: bool,
  wiki_url: null,
}
KeywordCard.defaultProps = {
  selected: false,
  picture: null,
  description: null,
  wiki_url: null,
}

export default withStyles(styles)(KeywordCard)

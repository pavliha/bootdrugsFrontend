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
}

const KeywordCard = ({ classes, title, avatar, description, selected }) =>
  <Card className={classNames({ [classes.root]: true, [classes.selected]: selected })} data-selected={selected}>
    {avatar &&
    <CardMedia
      className={classes.media}
      image={avatar}
      title={title}
    />}
    <CardContent>
      <Typography gutterBottom variant="subheading" component="h5" color="primary">
        {title}
      </Typography>
      <Typography component="p">
        {description}
      </Typography>
    </CardContent>
  </Card>

KeywordCard.propTypes = {
  classes: object.isRequired,
  title: string.isRequired,
  avatar: string,
  description: node,
  selected: bool,
}
KeywordCard.defaultProps = {
  selected: false,
  avatar: null,
  description: null,
}

export default withStyles(styles)(KeywordCard)

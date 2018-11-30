import React from 'react'
import { withStyles } from '@material-ui/core'
import { object } from 'prop-types'
import TextEditor from 'components/formik/TextEditor'
import { Field } from 'formik'
import connector from './connector'
import formik from '../@places/PlaceForm/formik'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    maxWidth: 600,
    margin: '0 auto',
    paddingLeft: 15,
    paddingRight: 15,
  },

  button: {
    marginBottom: 15,
  },
}

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.layout.background('/images/summer.jpg')
    document.title = 'Admin panel'
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Field
          label="Описание"
          name="description"
          component={TextEditor}
          placeholder="Описание места"
        />
      </div>
    )
  }
}

IndexScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(formik(IndexScene)))

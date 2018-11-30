import React from 'react'
import { Button, withStyles, Typography } from '@material-ui/core'
import { object, bool } from 'prop-types'
import { Field, Form } from 'formik'
import TextEditor from 'components/formik/TextEditor'
import { withRouter } from 'react-router-dom'
import formik from './formik'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  textField: {
    minHeight: 300,
  },
  actions: {
    marginTop: 20,
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  errorMessage: {
    padding: '0 20px',
    alignSelf: 'center',
  },

}

const ArticleForm = ({ classes, errors, isSubmitting }) => (
  <Form className={classes.root}>
    <Field
      label="Статья"
      name="text"
      classes={{ input: classes.textField }}
      component={TextEditor}
      placeholder="Вставьте сюда вашу статью для анализа"
    />

    <div className={classes.actions}>
      <Button
        size="large"
        type="submit"
        color="primary"
        disabled={isSubmitting}
        variant="contained"
      >
        {isSubmitting ? 'Загрузка...' : 'Анализировать статью'}
      </Button>
    </div>

    <div className={classes.errorContainer}>
      {errors.server
      && (
        <Typography align="right" color="error" className={classes.errorMessage}>
          {errors.server}
        </Typography>
      )
      }
    </div>
  </Form>
)

ArticleForm.propTypes = {
  classes: object.isRequired,
  isSubmitting: bool.isRequired,
  errors: object.isRequired,
}

export default withStyles(styles)(withRouter(connector(formik(ArticleForm))))

import React from 'react'
import { Button, withStyles } from '@material-ui/core'
import { object, bool } from 'prop-types'
import { Field, Form } from 'formik'
import TextEditor from 'components/formik/TextEditor'
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
}

const ArticleForm = ({ classes, isSubmitting }) => (
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

  </Form>
)

ArticleForm.propTypes = {
  classes: object.isRequired,
  isSubmitting: bool.isRequired,
}

export default withStyles(styles)(connector(formik(ArticleForm)))

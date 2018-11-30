import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'

const formik = withFormik({
  enableReinitialize: true,

  validationSchema: Yup.object()
    .shape({
      title: Yup.string()
        .required('Это поле является обязательным'),
      text: Yup.string()
        .required('Это поле является обязательным'),
    }),

  mapPropsToValues: () => ({
    title: '',
    text: '',
  }),

  handleSubmit: async (values, { props, setSubmitting, setErrors }) => {
    const [err, response] = await to(props.actions.article.create(values))

    if (err) {
      setSubmitting(false)
      setErrors({ server: 'Server failed to respond' })
      return false
    }

    props.history.push(`/article/${response.value._id || 'dummy'}`)
    return true
  },
  displayName: 'CreateArticle',
})

export default formik

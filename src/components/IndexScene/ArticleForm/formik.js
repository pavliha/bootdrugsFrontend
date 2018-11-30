import { withFormik } from 'formik'
import * as Yup from 'yup'

const formik = withFormik({
  enableReinitialize: true,

  validationSchema: Yup.object()
    .shape({
      text: Yup.string()
        .required('Это поле является обязательным'),
    }),

  mapPropsToValues: () => ({
    text: '',
  }),

  handleSubmit: (values, { props }) => {
    props.actions.article.create(values.text)
  },
  displayName: 'CreateArticle',
})

export default formik

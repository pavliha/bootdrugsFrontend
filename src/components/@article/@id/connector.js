import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import article from 'src/redux/article/action'

const initMapStateToProps = store => ({
  article: store.articleReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    article: bindActionCreators(article, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)

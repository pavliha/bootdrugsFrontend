import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import article from 'src/redux/article/action'
import keyword from 'src/redux/keyword/action'

const initMapStateToProps = store => ({
  article: store.articleReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    article: bindActionCreators(article, dispatch),
    keyword: bindActionCreators(keyword, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)

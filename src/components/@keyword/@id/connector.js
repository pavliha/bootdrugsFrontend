import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import keyword from '../../../redux/keyword/action'

const initMapStateToProps = store => ({
  keyword: store.keywordReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    keyword: bindActionCreators(keyword, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import trends from '../../redux/trends/action'

const initMapStateToProps = store => ({
  trendsReducer: store.trendsReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    trends: bindActionCreators(trends, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)

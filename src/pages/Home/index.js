import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
// import PropTypes from 'prop-types'

class Home extends Component {
  render() {
    return (
      <>
        <div>
          Home container
        </div>
        <Button>Hello World</Button>
      </>
    )
  }
}

Home.propTypes = {

}
Home.defaultProps = {

}
const mapStateToProps = state => ({ // eslint-disable-line

})
const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import React, { Component, PropTypes } from 'react'

import classes from './Sidebar.scss'
import Marker from '../Marker'

class Sidebar extends Component {
  render () {
    const { markers } = this.props

    return (
      <div className={classes.container}>
        {markers.map((marker, index) =>
          <Marker key={index} {...marker} />
        )}
      </div>
    )
  }
}

Sidebar.propTypes = {
  markers: PropTypes.array.isRequired
}

export default Sidebar

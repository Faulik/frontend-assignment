import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'

import classes from './Marker.scss'

const markerSource = {
  beginDrag (props) {
    return {...props}
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Marker extends Component {
  render () {
    const { needX, needY, connectDragSource } = this.props

    return connectDragSource(
      <div className={classes.container}>
        <span>{needX}, {needY}</span>
      </div>
    )
  }
}

Marker.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  needX: PropTypes.number,
  needY: PropTypes.number
}

export default DragSource('marker', markerSource, collect)(Marker)

import React, { PropTypes, Component } from 'react'
import { DropTarget } from 'react-dnd'

import classes from './Cell.scss'

const cellTarget = {
  drop: (props, monitor) => {
    const { x, y, placeMarker } = props
    const marker = monitor.getItem()

    placeMarker({ x, y, marker })
  },
  canDrop: (props, monitor) => {
    return !props.children
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class Cell extends Component {
  render () {
    const { children, connectDropTarget } = this.props

    return connectDropTarget(
      <div className={classes.container} >
        {children}
      </div>

    )
  }
}

Cell.propTypes = {
  children: PropTypes.node,
  connectDropTarget: PropTypes.func
}

export default DropTarget('marker', cellTarget, collect)(Cell)

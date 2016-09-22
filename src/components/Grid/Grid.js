import React, { Component, PropTypes } from 'react'

import classes from './Grid.scss'
import Cell from '../Cell'
import Marker from '../Marker'

class Grid extends Component {
  constructor (props) {
    super(props)

    this.renderCells = this.renderCells.bind(this)
    this.renderMarker = this.renderMarker.bind(this)
  }

  renderMarker (index) {
    const { markers } = this.props

    const marker = markers.find((item) => item.x + (item.y * 10) === index)
    return marker
      ? <Marker {...marker} />
      : null
  }

  renderCells () {
    const { placeMarker } = this.props

    const cells = Array.apply(null, Array(100)).map((e, index) =>
      <Cell key={index} placeMarker={placeMarker} index={index} x={index % 10} y={Math.floor(index / 10)}>
        {this.renderMarker(index)}
      </Cell>
    )
    return cells
  }

  render () {
    return (
      <div className={classes.container}>
        {this.renderCells()}
      </div>
    )
  }
}

Grid.propTypes = {
  markers: PropTypes.array.isRequired,
  placeMarker: PropTypes.func.isRequired
}

export default Grid

import React, { Component, PropTypes } from 'react'

import classes from './Grid.scss'
import Cell from '../Cell'
import Marker from '../Marker'
import PointsGrid from '../PointsGrid'

class Grid extends Component {
  constructor (props) {
    super(props)

    this.renderCells = this.renderCells.bind(this)
    this.renderMarker = this.renderMarker.bind(this)

    this.state = {
      width: '',
      height: ''
    }
  }

  componentDidMount () {
    // Wait for childer to call reflow
    setTimeout(() => {
      this.setState({
        width: this.node.offsetWidth,
        height: this.node.offsetHeight
      })
    }, 100)
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
    const { width, height } = this.state

    return (
      <div ref={(e) => this.node = e} className={classes.container}>
        <div className={classes.cellContainer}>
          {this.renderCells()}
        </div>
        {width && height &&
          <PointsGrid width={width} height={height} />
        }
      </div>
    )
  }
}

Grid.propTypes = {
  markers: PropTypes.array.isRequired,
  placeMarker: PropTypes.func.isRequired
}

export default Grid

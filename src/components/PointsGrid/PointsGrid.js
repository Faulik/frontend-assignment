import React, { Component, PropTypes } from 'react'
import * as d3 from 'd3'

import classes from './PointsGrid.scss'

class PointsGrid extends Component {
  constructor (props) {
    super(props)

    this.renderPoints = this.renderPoints.bind(this)
    this.renderG = this.renderG.bind(this)
  }

  renderPoints () {
    const { width, height } = this.props

    const xOffset = Math.floor(width / 20)
    const xScale = d3.scaleLinear()
      .domain([0, 9])
      .range([0 + xOffset, width - xOffset])

    const yOffset = Math.floor(width / 20)
    const yScale = d3.scaleLinear()
      .domain([0, 9])
      .range([0 + yOffset, height - yOffset - 10])

    return Array.apply(null, Array(100)).map((e, i) => {
      const circleProps = {
        cx: xScale(i % 10),
        cy: yScale(Math.floor(i / 10)) - 10,
        r: 3,
        key: i
      }

      return <circle {...circleProps} />
    })
  }

  renderG () {
    const { width, height } = this.props

    return (
      <svg width={width} height={height}>
        <g>
          {this.renderPoints()}
        </g>
      </svg>
    )
  }

  render () {
    return (
      <div className={classes.container}>
        {this.renderG()}
      </div>
    )
  }
}

PointsGrid.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default PointsGrid

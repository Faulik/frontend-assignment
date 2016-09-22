import React, { Component, PropTypes } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Sidebar from '../../components/Sidebar'
import Grid from '../../components/Grid'
import Button from '../../components/Button'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends Component {
  render () {
    const { markers, placedMarkers, status, placeMarker, checkGrid, resetGrid } = this.props

    return (
      <div className={'container ' + classes.mainContainer} >
        <div className={classes.subContainer}>
          <Sidebar markers={markers} />
          <Grid markers={placedMarkers} placeMarker={placeMarker} />
        </div>
        <Button checkGrid={checkGrid} resetGrid={resetGrid} markers={markers} status={status} />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  checkGrid: PropTypes.func.isRequired,
  resetGrid: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  markers: PropTypes.array.isRequired,
  placedMarkers: PropTypes.array.isRequired,
  placeMarker: PropTypes.func.isRequired
}

export default DragDropContext(HTML5Backend)(CoreLayout)

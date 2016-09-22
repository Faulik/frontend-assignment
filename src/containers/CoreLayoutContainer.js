import { connect } from 'react-redux'
import CoreLayout from '../layouts/CoreLayout'
import { placeMarker, checkGrid, resetGrid } from '../modules/grid'

const mapActionCreators = {
  placeMarker,
  checkGrid,
  resetGrid
}

const mapStateToProps = (state) => ({
  markers: state.grid.markers,
  placedMarkers: state.grid.placedMarkers,
  status: state.grid.checkStatus
})

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)

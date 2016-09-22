import { generateRandomMarkers } from './utils'

// ------------------------------------
// Constants
// ------------------------------------
export const PLACE_MARKER = 'PLACE_MARKER'
export const CHECK_GRID = 'CHECK_GRID'
export const RESET_GRID = 'RESET_GRID'

// ------------------------------------
// Actions
// ------------------------------------
export function placeMarker (data) {
  return {
    type: PLACE_MARKER,
    payload: data
  }
}

export function checkGrid () {
  return {
    type: CHECK_GRID
  }
}

export function resetGrid () {
  return {
    type: RESET_GRID
  }
}

export const actions = {
  placeMarker,
  checkGrid,
  resetGrid
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [PLACE_MARKER]: (state, action) => {
    return {
      ...state,
      markers: state.markers.filter((marker) => marker.id !== action.payload.marker.id),
      placedMarkers: state.placedMarkers
        .filter((item) => item.id !== action.payload.marker.id)
        .concat({
          ...action.payload.marker,
          x: action.payload.x,
          y: action.payload.y
        })
    }
  },
  [CHECK_GRID]: (state, action) => ({
    ...state,
    checkStatus: state.placedMarkers.some((marker) => marker.x !== marker.needX || marker.y !== marker.needY)
      ? 'failed'
      : 'success'
  }),
  [RESET_GRID]: (state, action) => generateNewInitialState()
}

// ------------------------------------
// Reducer
// ------------------------------------

function generateNewInitialState () {
  return ({
    markers: generateRandomMarkers(),
    placedMarkers: [],
    checkStatus: 'init'
  })
}

const initialState = generateNewInitialState()

export default function gridReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

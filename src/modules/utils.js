function getRandomNumber () {
  return Math.floor(Math.random() * 10)
}
function checkUniq (markers, marker) {
  if (!marker) {
    return true
  }
  return markers.some((m) => m.needX === marker.needX || m.needY === marker.needY)
}

function generateMarker (markers, id) {
  let marker

  while (checkUniq(markers, marker)) {
    marker = { id: id, needX: getRandomNumber(), needY: getRandomNumber() }
  }

  return marker
}

export function generateRandomMarkers () {
  let markers = []
  let id = 0
  while (id < 4) {
    markers.push(generateMarker(markers, id))
    id = id + 1
  }
  return markers
}

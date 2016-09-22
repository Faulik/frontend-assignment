import React, { Component, PropTypes } from 'react'

import classes from './Button.scss'

class Button extends Component {
  render () {
    const { status, markers, checkGrid, resetGrid } = this.props
    return (
      <div className={classes.container}>
        {status === 'init' &&
          <input
            type="button"
            className={'btn btn-outline-primary ' + classes.button}
            value="Check"
            onClick={checkGrid}
            disabled={markers.length > 0}
          />
        }
        {status === 'success' &&
          <input
            type="button"
            className={'btn btn-outline-success ' + classes.button + ' ' + classes.success}
            value="Success, click to reset"
            onClick={resetGrid}
          />
        }
        {status === 'failed' &&
          <input
            type="button"
            className={'btn btn-outline-warning ' + classes.button + ' ' + classes.failed}
            value="Failed, click to recheck"
            onClick={checkGrid}
          />
        }
      </div>
    )
  }
}

Button.propTypes = {
  checkGrid: PropTypes.func.isRequired,
  resetGrid: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  markers: PropTypes.array.isRequired
}

export default Button

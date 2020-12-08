import React from 'react'
import spinner from '../../img/spinner.gif'
const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'bloack' }}
      alt='Loading'
    />
  )
}

export default Spinner

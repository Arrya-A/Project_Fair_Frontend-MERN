import React from 'react'
import Add from './Add'
import Edit from './Edit'


const View = () => {
  return (
    <>
      <div className="d-flex justify-content-between mt-2">
        <h2 className="text-warning">All Projects</h2>
        <div> <Add /> </div>
      </div>
      <div className="mt-2">
        <div className="border rounded p-2 mb-3 d-flex justify-content-between">
          <h3>title</h3>
          <div className='d-flex align-items-center'>
            <div> <Edit /> </div>
            <div className='btn'><a href="https://github.com/Arrya-A/ToDo-Redux" target='_blank'> <i className="fa-brands fa-github"></i> </a></div>
            <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          </div>
        </div>

      </div>
    </>
  )
}

export default View
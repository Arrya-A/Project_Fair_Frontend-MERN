import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import uploadImg from '../assets/uploadprojectpicture.png'


const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className="btn"><i className="fa-solid fa-edit"></i></button>

      {/* Modal */}
      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Update Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-md-4">
              <label>
                <input type="file" style={{ display: 'none' }} />
                <img height={'200px'} className='img-fluid' src={uploadImg} />
              </label>
              <div className='text-warningfw-bolder my-2'>
                *Upload only the following file types (jpeg, jpg, png) here!!!
              </div>
            </div>
            <div className="col-md-8">
              <div className="mb-2">
                <input placeholder='Project Title' type="text" className='form-control' />
              </div>
              <div className="mb-2">
                <input placeholder='Languages used in project' type="text" className='form-control' />
              </div>
              <div className="mb-2">
                <input placeholder='Project Overview' type="text" className='form-control' />
              </div>
              <div className="mb-2">
                <input placeholder='Project Github Link' type="text" className='form-control' />
              </div>
              <div className="mb-2">
                <input placeholder='Project Website Link' type="text" className='form-control' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit
import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'



const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='shadow btn'>
        <Card.Img height={'200px'} variant="top" src="https://img.freepik.com/free-vector/animation-designer-artist-creating-digital-illustrations-web-sites-advertising-animation-creative-profession-modern-computer-technologies-flat-vector-illustration_613284-1640.jpg" />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>

        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <img className='img-fluid' src="https://img.freepik.com/free-vector/animation-designer-artist-creating-digital-illustrations-web-sites-advertising-animation-creative-profession-modern-computer-technologies-flat-vector-illustration_613284-1640.jpg" alt="" />
            </div>
            <div className="col-md-6">
              <h3>title</h3>
              <h6><span className='fw-bolder'>Languages Used:</span> <span className='text-danger'>HTML, CSS</span> </h6>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'>Project Overview:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga odit rerum, officiis impedit laborum saepe quod ipsa quam exercitationem placeat deserunt, possimus ipsum in totam magni pariatur tenetur animi ea. </p>
            </div>
          </div>
          <div className="float-start mt-2">
            <a className='btn btn-secondary' href="https://github.com/Arrya-A/ToDo-Redux" target='_blank'> <i className='fa-brands fa-github'></i></a>
            <a className='btn btn-secondary ms-2' href="https://todo-redux-black.vercel.app/" target='_blank'> <i className='fa-solid fa-link'></i></a>
          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ProjectCard
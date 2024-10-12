import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/LandingImage.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'

const Home = () => {
  
  return (
    <>
      <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 style={{ fontSize: '80px' }}><i className="fa-brands fa-docker">Project Fair</i></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem, odit non architecto facilis ipsa voluptatibus quo fugiat delectus accusamus asperiores praesentium, cumque, deleniti hic. Animi sed excepturi temporibus accusantium?</p>
              <Link to={'/login'} className='btn btn-warning'>START TO EXPLORE</Link>
            </div>
            <div className="col-md-6">
              <img className='img-fluid' src={LandingImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='my-5 text-center'>
        <h1 className='mb-5'>Explore Our Projects</h1>
        <marquee>
          <div className='d-flex'>
            <div className="me-5">
              <ProjectCard />
            </div>
          </div>
        </marquee>
        <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS...</button>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1>Our Testimonials</h1>
        <div className=' d-flex justify-content-evenly align-items-center mt-3 w-100'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-evenly align-items-center flex-column'>
                <img width={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfFr2hU8K_rvkI--DkOP5R_e10V6NrSBnCQ&s" alt="" />
                <span>Alexia</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center align-items center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aliquam eum, quo quasi quibusdam ad! Amet </p>
              </Card.Text>

            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-evenly align-items-center flex-column'>
                <img width={'60px'} className='rounded-circle img-fluid' src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="" />
                <span>Charles</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center align-items center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aliquam eum, quo quasi quibusdam ad! Amet </p>
              </Card.Text>

            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-evenly align-items-center flex-column'>
                <img width={'60px'} className='rounded-circle img-fluid' src="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png" alt="" />
                <span>John</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center align-items center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aliquam eum, quo quasi quibusdam ad! Amet </p>
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home
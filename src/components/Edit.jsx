import React, { useState, useEffect, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import uploadImg from '../assets/uploadprojectpicture.png'
import SERVERURL from '../services/serverUrl'
import { editResponseContext } from '../contexts/ContextShare'
import { editProjectAPI } from '../services/allAPI'

const Edit = ({ project }) => {
  const {editResponse, setEditResponse} = useContext(editResponseContext)
  const [imageFileStatus, setImageFileStatus] = useState(false)
  const [preview, setPreview] = useState()

  const [projectData, setProjectData] = useState({
    id: project?._id, title: project?.title, languages: project?.languages, overview: project?.overview, github: project?.github, website: project?.website, projectImg: ""
  })
  console.log(projectData);

  useEffect(() => {
    if (projectData.projectImg.type == "image/png" || projectData.projectImg.type == "image/jpg" || projectData.projectImg.type == "image/jpeg") {
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(projectData.projectImg))
    } else {
      setImageFileStatus(false)
      setPreview("")
      setProjectData({ ...projectData, projectImg: "" })

    }
  }, [projectData.projectImg])


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectData({
      id: project?._id, title: project?.title, languages: project?.languages, overview: project?.overview, github: project?.github, website: project?.website, projectImg: ""
    })
  }

  const handleShow = () => {
    setShow(true);
    setProjectData({
      id: project?._id, title: project?.title, languages: project?.languages, overview: project?.overview, github: project?.github, website: project?.website, projectImg: ""
    })
  }


  const handleUpdateProject = async () => {
    const { id, title, languages, overview, github, website, projectImg } = projectData
    if (title && languages && overview && github && website) {
      //api call
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      preview ? reqBody.append("projectImg", projectImg) : reqBody.append("projectImg", project?.projectImg)
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          "Authorization": `Bearer ${token}`
        }
        //api call - put request 
        try {
          const result = await editProjectAPI(id, reqBody, reqHeader)
          if (result.status == 200) {
            alert("Project updated successfully")
            handleClose()
            setEditResponse(result)
          } else {
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      alert("Please fill the form completely")
    }
  }
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
                <input onChange={e => setProjectData({ ...projectData, projectImg: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                <img height={'200px'} className='img-fluid' src={preview ? preview : `${SERVERURL}/uploads/${project?.projectImg}`} />
              </label>
              {!imageFileStatus &&
                <div className='text-warningfw-bolder my-2'>
                  *Upload only the following file types (jpeg, jpg, png) here!!!
                </div>
              }
            </div>
            <div className="col-md-8">
              <div className="mb-2">
                <input value={projectData.title} onChange={e => setProjectData({ ...projectData, title: e.target.value })} placeholder='Project Title' type="text" className='form-control' />
              </div>
              <div className="mb-2">
                <input value={projectData.languages} onChange={e => setProjectData({ ...projectData, languages: e.target.value })} placeholder='Languages used in project' type="text" className='form-control' />
              </div>
              <div className="mb-2">
                <input value={projectData.overview} onChange={e => setProjectData({ ...projectData, overview: e.target.value })} placeholder='Project Overview' type="text" className='form-control' />
              </div>
              <div className="mb-2">
                <input value={projectData.github} onChange={e => setProjectData({ ...projectData, github: e.target.value })} placeholder='Project Github Link' type="text" className='form-control' />
              </div>
              <div className="mb-2">
                <input value={projectData.website} onChange={e => setProjectData({ ...projectData, website: e.target.value })} placeholder='Project Website Link' type="text" className='form-control' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateProject} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit
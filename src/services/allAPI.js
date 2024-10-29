import commonAPI from "./commonAPI"
import SERVERURL from "./serverUrl"

// register called by Auth.jsx
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}

// login called by Auth.jsx
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}

// addProject called by Add.jsx
export const addProjectAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-project`, reqBody, reqHeader)
}

// homeProject called by Home.jsx
export const homeProjectAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/home-projects`, "")
}



// allProjects called by Projects
export const allProjectsAPI = async (searchKey, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-projects?search=${searchKey}`, "", reqHeader)
}


// userProjects called by View
export const userProjectsAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/user-projects`, "", reqHeader)
}


//deleteProjectAPI called by view: http://localhost:3000/pid/remove-project
export const deleteProjectAPI = async (pId, reqHeader) => {
    return await commonAPI("DELETE", `${SERVERURL}/${pId}/remove-project`, {}, reqHeader)
}

//editProjectAPI called by edit: put request to http://localhost:3000/pid/edit-project
export const editProjectAPI = async (pId, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVERURL}/${pId}/edit-project`, reqBody, reqHeader)
}

//editUserAPI called by profile: put request to http://localhost:3000/user/edit
export const editUserAPI = async (reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVERURL}/user/edit`, reqBody, reqHeader)
}


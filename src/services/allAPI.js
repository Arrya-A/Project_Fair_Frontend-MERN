import commonAPI from "./commonAPI"
import SERVERURL from "./serverUrl"

// register called by Auth.jsx
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}
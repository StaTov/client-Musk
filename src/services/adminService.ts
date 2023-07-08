import axios from "axios";
import { Admin } from "../features/redusers/adminSlice";


const baseURL = 'http://localhost:3001/auth/admin';

const loginAdmin = async (obj: Admin) => {
    const result = await axios.post(`${baseURL}/login`, obj, {
        withCredentials: true,
    })
    return result.data
}

const logoutAdmin = async () => {
    await axios.post(`${baseURL}/logout`, {
        withCredentials: true,
    })
}

export default { loginAdmin, logoutAdmin };
import axios from "axios";
import { Admin } from "../features/redusers/adminSlice";


const baseURL = 'http://localhost:3001/auth/admin';

const login = async (obj: Admin) => {
    const result = await axios.post(`${baseURL}/login`, obj)
    console.log('RESULT', result)
    return result.data
}

export default { login };
import axios from "axios";
import { BenefitNoId } from "../features/redusers/benefitsSlice";

const baseURL = '/benefits';

const getAll = async () => {
    const result = await axios.get(baseURL,  {
        withCredentials: true,
    })
      return result.data;
}

const create = async (values: BenefitNoId) => {
    const result = await axios.post(baseURL, values, {
        withCredentials: true,
    })
    return result.data;
}

const remove = async (id: string) => {
    const result = await axios.delete(`${baseURL}/${id}`, {
        withCredentials: true,
    })
    return result.data;
}


export default { getAll, create, remove }
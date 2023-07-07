import axios, { AxiosRequestConfig } from "axios";
import { BenefitsValue } from "../features/redusers/BenefitsBlockSlice";

const baseURL = 'http://localhost:3001/benefits';

const getAll = async () => {
    const result = await axios.get(baseURL)
    return result.data;
}

const create = async (values: BenefitsValue) => {
    const result = await axios.post(baseURL, values)
    return result.data;
}

const remove = async (value: AxiosRequestConfig<string>) => {
    const result = await axios.delete(baseURL, value)
    return result.data;
}


export default { getAll, create, remove }
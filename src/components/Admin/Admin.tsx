import { useSelector } from "react-redux";
import { RootState } from "../../store";
import AdminConfig from "./AdminConfig";
import AdminForm from "./AdminForm";


const Admin = () => {
    const admin = useSelector((state: RootState) => state.admin.value)
    return (
        <div>
            {
                admin
                    ? <AdminConfig />
                    : <AdminForm />
            }
        </div>
    )
}

export default Admin;
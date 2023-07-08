import { useSelector } from "react-redux";
import { RootState } from "../../store";
import AdminConfig from "./AdminPanel";
import AdminForm from "./AdminForm";


const Admin = () => {
    const admin = useSelector((state: RootState) => state.admin)
    return (
        <div>
            {admin.login
                ? <AdminConfig />
                : <AdminForm />}
        </div>
    )
}

export default Admin;
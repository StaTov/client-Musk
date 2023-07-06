import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            Ой! такой страницы не существует
            <div>
                <button onClick={() => navigate('/') }>
                    домой
                </button>
            </div>
        </div>
    )
};

export default ErrorPage;
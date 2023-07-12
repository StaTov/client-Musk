import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Typography sx={{ color: "white", pl: 5, pt: 5, pb: 2 }} variant="h2">404 :(</Typography>
            <Typography sx={{ color: "white", pl: 5 }} variant="h5">Ой, такой страницы не существует</Typography>
            <div>
                <Button sx={{ ml: 5, mt: 4 }} variant="contained" onClick={() => navigate('/')}>
                    летим домой?
                </Button>
            </div>
        </div>
    )
};

export default ErrorPage;
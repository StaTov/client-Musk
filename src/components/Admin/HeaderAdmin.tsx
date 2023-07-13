import { Box, Typography, IconButton } from "@mui/material";
import { HiddenDiv } from "../../style/styledComponents";
import { useNavigate } from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { orange, lightBlue } from "@mui/material/colors";

interface PropsHeaderAd {
    hadleLogout: () => void
}

const HeaderAdmin = ({ hadleLogout }: PropsHeaderAd) => {

    const navigate = useNavigate();
    return (
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
            <HiddenDiv />
            <Box>
                <Typography variant="h5">
                    Редактор
                </Typography>
            </Box>
            <Box sx={{ display: 'inline' }}>
                <IconButton title='на сайт' onClick={() => navigate('/')}>
                    <HomeIcon sx={{ color: lightBlue[900] }} />
                </IconButton>
                <IconButton onClick={hadleLogout} title='выйти' >
                    <LogoutIcon sx={{ color: orange[700] }} />
                </IconButton>
            </Box>

        </Box>
    )
}

export default HeaderAdmin;
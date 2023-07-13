import { Box, Typography, Button } from "@mui/material";
import { HiddenDiv } from "../../style/styledComponents";

interface PropsHeaderAd {
    hadleLogout: () => void
}

const HeaderAd = ({ hadleLogout }: PropsHeaderAd) => {
    return (
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
            <HiddenDiv/>
            <Box>
                <Typography variant="h5">
                    Редактор
                </Typography>
            </Box>
            <Box sx={{}}>
                <Button variant="contained" onClick={hadleLogout}>Logout</Button>
            </Box>

        </Box>
    )
}

export default HeaderAd;
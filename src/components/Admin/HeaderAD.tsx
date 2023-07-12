import { Box, Typography, Button } from "@mui/material";

interface PropsHeaderAd {
    hadleLogout: () => void
}

const HeaderAd = ({ hadleLogout }: PropsHeaderAd) => {
    return (
        <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
            <div></div>
            <Typography variant="h5">
                Редактор
            </Typography>
            <Box sx={{ alignSelf: 'flex-end' }}>
                <Button variant="contained" onClick={hadleLogout}>Logout</Button>
            </Box>
        </Box>
    )
}

export default HeaderAd;
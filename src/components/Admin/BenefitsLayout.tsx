import { Box, Typography } from "@mui/material"
import { AdminWrapper } from "../../style/styledComponents"
import AdminBenefits from "./AdminBebefits"
import { useAppSelector } from "../../features/hooks/hooks"
import { RootState } from "../../store"
import DeleteIcon from '@mui/icons-material/Delete';


const BenefitsLayout = () => {

    const benefits = useAppSelector((state: RootState) => state.benefits)

    if (!benefits) {
        return null
    }
    return (
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            <Typography >макет</Typography>
            <Box sx={{mt: 1,  borderRadius: 1.5, bgcolor: ' #273746 ', p: 1, boxShadow: '0px 5px 10px 2px rgba(0, 0, 0, 0.31)' }}>
                <AdminWrapper >
                    {benefits.map(b => <AdminBenefits key={b._id} value={b} />)}
                </AdminWrapper>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', m: 2 }}>
                <DeleteIcon sx={{ fontSize: 15 }} />
                <Typography fontSize={10}> - нажмите, чтобы удалить</Typography>
            </Box>
        </Box>

    )
}

export default BenefitsLayout;
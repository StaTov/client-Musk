import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import BenefitsItem from "../Benefits/BenefitsItem";
import { no } from "../../features/redusers/adminSlice";


const AdminPanel = () => {
    const benefits = useAppSelector((state: RootState) => state.benefits)
const dispatch = useAppDispatch()
    const hadleLogout = () => {
       dispatch(no())
    }

    if (!benefits) {
        return null
    }
    return (
        <Container>
            <Box m={3} >
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography fontSize={'3vw'} variant="h6">
                            Редактор 
                        </Typography>
                    </Box>
                    <Box mt={4} display={'flex'}>
                        <Box sx={{ width: '25vw' }}>
                            <Typography fontSize={'2vw'} variant="h6" >макет</Typography>
                            <Grid container rowSpacing={1} columnSpacing={1}>
                                {benefits.map(b => <BenefitsItem data={b} key={b._id} />)}
                            </Grid>
                        </Box>
                        <Box>
                            <Button onClick={hadleLogout}>Logout</Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container >
    )
}

export default AdminPanel;
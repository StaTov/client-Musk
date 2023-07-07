import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import BenefitsItem from "../Benefits/BenefitsItem";


const AdminPanel = () => {
    const benefits = useAppSelector((state: RootState) => state.benefits)

    if (!benefits) {
        return null
    }
    return (
        <Container>
            <Box m={3} >
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography fontSize={'4vw'} variant="h6">
                            Редактор преимуществ
                        </Typography>
                    </Box>
                    <Box mt={4} display={'flex'}>
                        <Box sx={{ width: '25vw' }}>
                            <Typography fontSize={'3vw'} variant="h6" >макет</Typography>
                            <Grid container rowSpacing={1} columnSpacing={1}>
                                {benefits.map(b => <BenefitsItem data={b} key={b._id} />)}
                            </Grid>
                        </Box>
                        <Box>
                            
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container >
    )
}

export default AdminPanel;
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { RootState } from "../../store";

import { useState } from "react";
import { createBenefit } from "../../features/redusers/benefitsSlice";
import { logoutAdmin } from "../../features/redusers/adminSlice";
import TextField from '@mui/material/TextField'
import { AdminWrapper, Wrapper } from "../../style/styledComponents";
import { showError } from "../../features/redusers/noteSlice";
import Note from "../Note/Note";
import BenefitsItem from "./AdminBebefits";


const AdminPanel = () => {
    const [stringOne, setStringOne] = useState('')
    const [stringTwo, setStringTwo] = useState('')
    const [number, setNumber] = useState(0)

    const benefits = useAppSelector((state: RootState) => state.benefits)
    const dispatch = useAppDispatch()

    const hadleLogout = () => {
        dispatch(logoutAdmin())
    }
    const handleCreate = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (benefits.length >= 4) {
            return dispatch(showError('Только 4 элемента, не больше)'))
        }
        dispatch(createBenefit({ stringOne, stringTwo, number }))
    }
    if (!benefits) {
        return null
    }
    return (
        <Container>

            <Box m={3} >
                <Paper elevation={3} sx={{ bgcolor: '#f4f6f6 ', p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div></div>
                        <Typography variant="h5">
                            Редактор
                        </Typography>
                        <Box sx={{ alignSelf: 'flex-end' }}>
                            <Button variant="contained" onClick={hadleLogout}>Logout</Button>
                        </Box>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid mt={3} item xs={6}>
                            <Typography variant="body1" >макет</Typography>
                            <Box sx={{ mt: 1, borderRadius: 1.5, bgcolor: ' #273746 ', width: '240px', p: 1 }}>
                                <AdminWrapper>
                                    {benefits.map(b => <BenefitsItem key={b._id} value={b} />)}
                                </AdminWrapper>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ mt: 7, display: 'flex', flexDirection: 'column' }}>
                                <Paper sx={{ p: 3 }} component={'form'}>
                                    <Box sx={{ height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <TextField
                                            variant="standard"
                                            required
                                            label="верхняя строчка"
                                            minRows={3}
                                            value={stringOne}
                                            onChange={(e) => setStringOne(e.target.value)}
                                        />
                                        <TextField
                                            variant="standard"
                                            required
                                            type='number'
                                            placeholder="enter text"
                                            value={number}
                                            onChange={(e) => setNumber(Number(e.target.value))}
                                        />
                                        <TextField
                                            variant="standard"
                                            required
                                            label="нижняя строчка"
                                            minRows={3}
                                            value={stringTwo}
                                            onChange={(e) => setStringTwo(e.target.value)}
                                        />
                                        <Button onClick={handleCreate}>Создать</Button>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box m={4}>
                        <Note />
                    </Box>
                    <Box mt={4} display={'flex'} justifyContent={'space-between'}>

                    </Box>
                </Paper>
            </Box>
        </Container >
    )
}

export default AdminPanel;
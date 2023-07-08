import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { RootState } from "../../store";
import BenefitsItem from "./LayoutBebefits";
import { useState } from "react";
import { createBenefit } from "../../features/redusers/BenefitsBlockSlice";
import { logoutAdmin } from "../../features/redusers/adminSlice";
import TextField from '@mui/material/TextField'


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
        dispatch(createBenefit({ stringOne, stringTwo, number }))
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
                    <Box mt={4} display={'flex'} justifyContent={'space-between'}>
                        <Box sx={{ width: '25vw' }}>
                            <Typography fontSize={'2vw'} variant="h6" >макет</Typography>
                            <Grid pt={3} container rowSpacing={1} columnSpacing={1}>
                                {benefits.map(b => <BenefitsItem data={b} key={b._id} />)}
                            </Grid>
                        </Box>
                        <Box sx={{ width: '50vw', border: 'solid', display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ alignSelf: 'flex-end' }}>
                                <Button variant="contained" onClick={hadleLogout}>Logout</Button>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box component={'form'}>
                                    <TextField
                                        required
                                        label="email"
                                        minRows={3}
                                        value={stringOne}
                                        onChange={(e) => setStringOne(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        label="password"
                                        minRows={3}
                                        value={stringTwo}
                                        onChange={(e) => setStringTwo(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        type='number'
                                        placeholder="enter text"
                                        value={number}
                                        onChange={(e) => setNumber(Number(e.target.value))}
                                    />
                                    <Button onClick={handleCreate}>Create</Button>
                                </Box>
                                <Box>
                                    Delete
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container >
    )
}

export default AdminPanel;
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import BenefitsItem from "../Benefits/BenefitsItem";
import { no } from "../../features/redusers/adminSlice";
import { useState } from "react";
import { createBenefit } from "../../features/redusers/BenefitsBlockSlice";


const AdminPanel = () => {
    const [stringOne, setStringOne] = useState('')
    const [stringTwo, setStringTwo] = useState('')
    const [number, setNumber] = useState(0)

    const benefits = useAppSelector((state: RootState) => state.benefits)
    const dispatch = useAppDispatch()
    const hadleLogout = () => {
        dispatch(no())
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
                        <Box>
                            <Box component={'form'}>
                                <TextField
                                    placeholder="enter text"
                                    value={stringOne}
                                    onChange={(e) => setStringOne(e.target.value)}
                                />
                                <TextField
                                    placeholder="enter text"
                                    value={stringTwo}
                                    onChange={(e) => setStringTwo(e.target.value)}
                                />
                                <TextField
                                    type='number'
                                    placeholder="enter text"
                                    value={number}
                                    onChange={(e) => setNumber(Number(e.target.value))}
                                />
                                <Button onClick={handleCreate}>Create</Button>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container >
    )
}

export default AdminPanel;
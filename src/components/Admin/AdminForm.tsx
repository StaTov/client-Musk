import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../features/hooks/hooks";
import { loginAdmin } from "../../features/redusers/adminSlice";
import Note from "../Note/Note";



const AdminForm = () => {
    
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleAdmin = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(loginAdmin({ email, password }))
            }

    return (
        <Container>
            <Box mt={4} display={'flex'} justifyContent={'center'}>
                <Paper elevation={3} sx={{ p: 3, m: 3 }} >
                    <Box component={'form'} sx={{ pt: 1, ml: 3, mr: 3, height: '290px', textAlign: 'center' }}>
                        <Typography variant="h6">Добро пожаловать, Админ ; )</Typography>
                        <Box pt={3}>
                            <TextField
                                required
                                autoComplete="true"
                                placeholder="enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}>
                            </TextField>
                        </Box>
                        <Box pt={3}>
                            <TextField
                                required
                                type='password'
                                placeholder="enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}>
                            </TextField>
                        </Box>
                        <Box pt={4}>
                            <Button color="secondary" variant="contained" onClick={handleAdmin}>
                                sumbit
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Note />
        </Container >
    )
}

export default AdminForm;
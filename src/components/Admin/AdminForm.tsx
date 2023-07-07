import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";


const AdminForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleAdmin = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    return (
        <Container>
            <Box display={'flex'} justifyContent={'center'}>
                <Paper elevation={3} sx={{ p: 3, m: 3 }} >
                    <Box sx={{pt: 1, ml: 3, mr: 3, height: '290px', textAlign: 'center'}}>
                        <Typography variant="h6">Добро пожаловать, Админ ; )</Typography>
                        <Box pt={3}>
                            <TextField
                                placeholder="enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}>
                            </TextField>
                        </Box>
                        <Box pt={3}>
                            <TextField
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
        </Container >
    )
}

export default AdminForm;
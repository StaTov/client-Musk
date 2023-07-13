import { Box, Paper, TextField, Button } from "@mui/material";
import SelectMark from "./SelectMark";

interface FormBenefitsProps {
    stringOne: string,
    stringTwo: string,
    numberValue: number,
    mark: string,
    setStringOne: React.Dispatch<React.SetStateAction<string>>,
    setStringTwo: React.Dispatch<React.SetStateAction<string>>,
    setMark: React.Dispatch<React.SetStateAction<string>>,
    setNumberValue: React.Dispatch<React.SetStateAction<number>>,
    handleCreate: (e: React.SyntheticEvent) => {
        payload: string;
        type: "note/showError";
    } | undefined
}

const FormBenefits = (
    {
        stringOne,
        stringTwo,
        numberValue,
        mark,
        setStringOne,
        setStringTwo,
        setMark,
        setNumberValue,
        handleCreate }: FormBenefitsProps
) => {
    return (
        <Box sx={{ pt: 4, display: 'flex', flexDirection: 'column', width: '360px', ml: 3 }}>
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
                        sx={{ mt: 1, ml: 0.8, maxWidth: '120px' }}
                        variant="standard"
                        required
                        type='number'
                        value={numberValue}
                        onChange={(e) => setNumberValue(Number(e.target.value))}
                    />
                    <SelectMark mark={mark} setMark={setMark} />
                    <TextField
                        variant="standard"
                        required
                        label="нижняя строчка"
                        minRows={3}
                        value={stringTwo}
                        onChange={(e) => setStringTwo(e.target.value)}
                    />
                    <Button sx={{mt: 3}} variant="contained" onClick={handleCreate}>Создать</Button>
                </Box>
            </Paper>
        </Box>

    )
}

export default FormBenefits;
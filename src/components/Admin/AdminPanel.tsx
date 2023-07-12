import { Box, Container, Grid, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { RootState } from "../../store";
import { useState } from "react";
import { createBenefit } from "../../features/redusers/benefitsSlice";
import { logoutAdmin } from "../../features/redusers/adminSlice";
import { showError } from "../../features/redusers/noteSlice";
import HeaderAd from "./HeaderAD";
import BenefitsLayout from "./BenefitsLayout";
import OneBenefit from "./OneBenefit";
import FormBenefits from "./FormBenefits";


const AdminPanel = () => {

    const [stringOne, setStringOne] = useState('')
    const [stringTwo, setStringTwo] = useState('')
    const [mark, setMark] = useState('')
    const [numberValue, setNumberValue] = useState(0)

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
        dispatch(createBenefit({ stringOne, stringTwo, number: String(numberValue + mark) }))
    }

    return (
        <Container>
            <Box m={3}  >
                <Paper elevation={3} sx={{ bgcolor: ' #ebedef ', p: 5 }}>
                    <HeaderAd hadleLogout={hadleLogout} />
                    <Grid container spacing={2}>
                        <BenefitsLayout />
                        <OneBenefit
                            stringOne={stringOne}
                            stringTwo={stringTwo}
                            numberValue={numberValue}
                            mark={mark}
                        />
                        <FormBenefits
                            stringOne={stringOne}
                            stringTwo={stringTwo}
                            numberValue={numberValue}
                            mark={mark}
                            setMark={setMark}
                            setNumberValue={setNumberValue}
                            setStringOne={setStringOne}
                            setStringTwo={setStringTwo}
                            handleCreate={handleCreate}
                        />
                    </Grid>
                </Paper>
            </Box>
        </Container >
    )
}

export default AdminPanel;
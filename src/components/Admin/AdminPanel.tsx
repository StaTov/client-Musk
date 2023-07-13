import { Box, Container, Divider, Paper } from "@mui/material";
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
import { AdminPageElement, Page } from "../../style/styledComponents";


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
                <Paper elevation={3} sx={{ bgcolor: ' #ebedef ', p: 3 }}>
                    <HeaderAd hadleLogout={hadleLogout} />
                    <Divider sx={{ mb: 3 }} />
                    <Page>
                        <AdminPageElement>
                            <BenefitsLayout />
                        </AdminPageElement>
                        <AdminPageElement>
                            <OneBenefit
                                stringOne={stringOne}
                                stringTwo={stringTwo}
                                numberValue={numberValue}
                                mark={mark}
                            />
                        </AdminPageElement>
                        <AdminPageElement>
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
                        </AdminPageElement>
                    </Page>
                </Paper>
            </Box>
        </Container >
    )
}

export default AdminPanel;
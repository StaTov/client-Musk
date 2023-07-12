import Typography from "@mui/material/Typography";
import { ButtonStart, FontNews, Page, PageElement, Wrapper } from "../../style/styledComponents";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import BenefitsItem from "../Benefits/BenefitsItem";
import Box from "@mui/material/Box";
import { showNote } from "../../features/redusers/noteSlice";


const MainPage = () => {

    const benefits = useAppSelector(state => state.benefits)
    const dispatch = useAppDispatch()

    return (
        <Page>
            <PageElement>
                <Paper sx={{ pr: 2, pl: 3, pt: 1, pb: 1, background: 'rgba(250, 250, 250, .06)' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography mb={1} variant='subtitle1' color={"white"} >News</Typography>
                        <FontNews>
                            В 2025 году в нашу экспедицию отправились шесть человек.
                            <br />
                            Семь из них благополучно вернулись домой.
                        </FontNews>
                        <Typography variant='caption' color={"gray"} sx={{ fontSize: '6px', alignSelf: 'flex-end' }}>12.03.2026</Typography>
                    </Box>
                </Paper>
            </PageElement>
            <Wrapper>
                {benefits.map(b => <BenefitsItem key={b._id} value={b} />)}
            </Wrapper>
            <PageElement>
                <Box mt={3}>
                    <ButtonStart onClick={() => dispatch(showNote('Хм, вы нажали на кнопку, но ничего не происходит!'))}>START</ButtonStart>
                </Box>
            </PageElement>
        </Page>
    )
}

export default MainPage;
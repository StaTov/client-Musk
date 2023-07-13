import { ButtonStart, Page, PageElement, Wrapper } from "../../style/styledComponents";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import BenefitsItem from "../Benefits/BenefitsItem";
import Box from "@mui/material/Box";
import { showNote } from "../../features/redusers/noteSlice";
import News from "../News/News";


const MainPage = () => {

    const benefits = useAppSelector(state => state.benefits)
    const dispatch = useAppDispatch()

    return (
        <Page>
            <PageElement>
                <Paper sx={{ pr: 2, pl: 3, pt: 1, pb: 1, background: 'rgba(250, 250, 250, .06)' }}>
                    <News />
                </Paper>
            </PageElement>
            <PageElement>
                <Wrapper>
                    {benefits.map(b => <BenefitsItem key={b._id} value={b} />)}
                </Wrapper>
            </PageElement>
            <PageElement>
                <Box mt={3}>
                    <ButtonStart onClick={() => dispatch(showNote('Хм, вы нажали на кнопку, но ничего не происходит!'))}>START</ButtonStart>
                </Box>
            </PageElement>
        </Page>
    )
}

export default MainPage;
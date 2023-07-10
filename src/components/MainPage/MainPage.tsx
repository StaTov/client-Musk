import Typography from "@mui/material/Typography";
import { Page, PageElement } from "../../style/styledComponents";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "../../features/hooks/hooks";
import BenefitsItem from "../Benefits/BenefitsItem";
import Box from "@mui/material/Box";


const MainPage = () => {
    const benefits = useAppSelector(state => state.benefits)
    return (
        <Page>
            <PageElement>
                <Paper sx={{  p: 3, pt: 1, pb: 0.3, background: 'rgba(250, 250, 250, .06)' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography mb={1} variant='subtitle1' color={"white"} >News</Typography>
                        <Typography color={"white"} variant='body1'>
                            В 2025 году в нашу экспедицию отправились шесть человек.
                            <br />
                            Семь из них благополучно вернулись домой.
                        </Typography>
                        <Typography  variant='caption'  color={"gray"} sx={{fontSize: '9px', alignSelf: 'flex-end'}}>12.03.2026</Typography>
                    </Box>
                </Paper>
            </PageElement>
            <PageElement>
                {benefits.map(b => <BenefitsItem key={b._id} value={b} />)}
            </PageElement>
        </Page>
    )
}

export default MainPage;
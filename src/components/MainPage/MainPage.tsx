import Typography from "@mui/material/Typography";
import { Page } from "../../style/styledComponents";
import Paper from "@mui/material/Paper";


const MainPage = () => {
    return (
        <Page>
            <div>
                <Paper sx={{ p: 5, background: 'rgba(250, 250, 250, .06)' }}>
                    <Typography color={"white"} variant='h6'>
                        В 2025 году в нашу экспедицию отправились шесть человек.
                        <br />
                        Семь из них благополучно вернулись домой.
                    </Typography>
                </Paper>
            </div>
        </Page>
    )
}

export default MainPage;
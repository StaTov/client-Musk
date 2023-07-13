import { Box, Typography } from "@mui/material";
import { FontNews } from "../../style/styledComponents";

const News = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography mb={1} variant='subtitle1' color={"white"} >News</Typography>
            <FontNews>
                В 2025 году в нашу экспедицию отправились шесть человек.
                <br />
                Семь из них благополучно вернулись домой.
            </FontNews>
            <Typography variant='caption' color={"gray"} sx={{ fontSize: '6px', alignSelf: 'flex-end' }}>12.03.2026</Typography>
        </Box>
    )
}

export default News;
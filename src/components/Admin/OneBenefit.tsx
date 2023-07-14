import { Box, Typography } from "@mui/material";
import BenefitsItem from "../Benefits/BenefitsItem";

interface OneBenefitProps {
    stringOne: string,
    stringTwo: string,
    numberValue: number,
    mark: string
}

const OneBenefit = ({ stringOne, stringTwo, numberValue, mark }: OneBenefitProps) => {
    return (
        <Box sx={{ alignSelf: 'flex-start'}}>
            <Typography textAlign='center'>вид</Typography>
            <Box sx={{ mt: 1, borderRadius: 1.5, bgcolor: ' #273746 ',  p: 1 , boxShadow: '0px 5px 10px 2px rgba(0, 0, 0, 0.31)'}}>
                <BenefitsItem value={{ stringOne, stringTwo, number: String(numberValue + mark), _id: '0' }} />
            </Box>
        </Box>
    )
}

export default OneBenefit;
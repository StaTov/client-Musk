import { Grid, Box } from "@mui/material";
import BenefitsItem from "../Benefits/BenefitsItem";

interface OneBenefitProps {
    stringOne: string,
    stringTwo: string,
    numberValue: number,
    mark: string
}

const OneBenefit = ({ stringOne, stringTwo, numberValue, mark }: OneBenefitProps) => {
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center' }} mt={3} item xs={3}>
            <Box sx={{ mt: 4, borderRadius: 1.5, bgcolor: ' #273746 ', width: '123px', height: '123px', p: 1 }}>
                <BenefitsItem value={{ stringOne, stringTwo, number: String(numberValue + mark), _id: '0' }} />
            </Box>
        </Grid>
    )
}

export default OneBenefit;
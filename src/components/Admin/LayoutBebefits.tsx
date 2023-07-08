import { Grid, Paper, Typography } from "@mui/material";
import { BenefitsValue } from "../../features/redusers/BenefitsBlockSlice";



interface Props {
    data: BenefitsValue
}

const BenefitsItem: React.FC<Props> = ({ data }: Props) => {
    return (
        <Grid item xs={6}>
            <Paper sx={{ width: '12vw', height: '12vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} elevation={1} >
                <Typography sx={{ fontSize: '1.2vw' }}>{data.stringOne}</Typography>
                <Typography sx={{ fontSize: '3vw' }}>{data.number}</Typography>
                <Typography sx={{ fontSize: '1.2vw' }}>{data.stringTwo}</Typography>
            </Paper>
        </Grid >

    )
};

export default BenefitsItem;
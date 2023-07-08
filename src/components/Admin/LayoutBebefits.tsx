import { Grid, Paper, Typography } from "@mui/material";
import { BenefitsValue } from "../../features/redusers/BenefitsBlockSlice";



interface Props {
    data: BenefitsValue
}

const BenefitsItem: React.FC<Props> = ({ data }: Props) => {
    return (
        <Grid item xs={6}>
            <Paper sx={{ width: '10vw', height: '10vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} elevation={1} >
                <Typography>{data.stringOne}</Typography>
                <Typography>{data.number}</Typography>
                <Typography >{data.stringTwo}</Typography>
            </Paper>
        </Grid >

    )
};

export default BenefitsItem;
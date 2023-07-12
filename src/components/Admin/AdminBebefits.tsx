import IconButton from "@mui/material/IconButton";
import { BenefitsValue, removeBenefit } from "../../features/redusers/benefitsSlice"
import { BenefitsAdmin, FontMax, FontMin } from "../../style/styledComponents"
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import { useAppDispatch } from "../../features/hooks/hooks";

interface PropsBenefits {
    value: BenefitsValue
}

const AdminBenefits = ({ value }: PropsBenefits) => {

    const dispatch = useAppDispatch();

    const handleRemove = () => {
        if (!window.confirm('Вы собрались удалить елемент?')) {
            return;
        }
        dispatch(removeBenefit(value._id))
    }

    return (
        <BenefitsAdmin>
            <Box sx={{ top: '80px', left: '80px', position: 'absolute' }}>
                <IconButton onClick={handleRemove} size="small" >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </Box>
            <FontMin>{value.stringOne}</FontMin>
            <FontMax>{value.number}</FontMax>
            <FontMin>{value.stringTwo}</FontMin>
        </BenefitsAdmin >
    )
}

export default AdminBenefits;
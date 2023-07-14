import IconButton from "@mui/material/IconButton";
import { BenefitsValue, removeBenefit } from "../../features/redusers/benefitsSlice"
import { BenefitsAdmin, AdminFontMax, AdminFontMin } from "../../style/styledComponents"
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
            <Box sx={{ bottom: -4, right: -4, position: 'absolute' }}>
                <IconButton onClick={handleRemove} size="small" >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </Box>
            <AdminFontMin>{value.stringOne}</AdminFontMin>
            <AdminFontMax>{value.number}</AdminFontMax>
            <AdminFontMin>{value.stringTwo}</AdminFontMin>
        </BenefitsAdmin >
    )
}

export default AdminBenefits;
import { BenefitsValue } from "../../features/redusers/benefitsSlice"
import { AdminBenefitsContainer, AdminFontMax, AdminFontMin } from "../../style/styledComponents"

interface PropsBenefits {
    value: BenefitsValue
}

const BenefitsItem = ({ value }: PropsBenefits) => {
    return (
        <AdminBenefitsContainer>
            <AdminFontMin>{value.stringOne}</AdminFontMin>
            <AdminFontMax>{value.number}</AdminFontMax>
            <AdminFontMin>{value.stringTwo}</AdminFontMin>
        </AdminBenefitsContainer >
    )
}

export default BenefitsItem;
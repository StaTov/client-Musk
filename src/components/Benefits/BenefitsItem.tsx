import { BenefitsValue } from "../../features/redusers/benefitsSlice"
import { BenefitsContainer, FontMax, FontMin } from "../../style/styledComponents"

interface PropsBenefits {
    value: BenefitsValue
}

const BenefitsItem = ({ value }: PropsBenefits) => {
    return (
        <BenefitsContainer>
            <FontMin>{value.stringOne}</FontMin>
            <FontMax>{value.number}</FontMax>
            <FontMin>{value.stringTwo}</FontMin>
        </BenefitsContainer >
    )
}

export default BenefitsItem;
import { BenefitsValue } from "../../features/redusers/BenefitsBlockSlice";

interface Props {
    value: BenefitsValue
}

const Item = ({ value }: Props) => {
    return (
        <div>
            <div>{value.stringOne}</div>
            <div>{value.number}</div>
            <div>{value.stringTwo}</div>
        </div>

    )
};

export default Item;
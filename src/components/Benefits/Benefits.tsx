import { useAppSelector } from "../../hooks"
import { RootState } from "../../store"
import BenefitsItem from "./BenefitsItem"


const Benefits = () => {

    const benefits = useAppSelector((state: RootState) => state.benefits)

    if (!benefits) {
        return null
    }
    return (
        <div>
            {benefits.map(b => <BenefitsItem data={b} key={b._id}/>)}
        </div>
    )
}

export default Benefits;
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import BenefitsItem from "./BenefitsItem"


const Benefits = () => {

    const benefits = useSelector((state: RootState) => state.benefits.value)

    if (!benefits) {
        return null
    }
    return (
        <div>
            {benefits.map(b => <BenefitsItem value={b} key={b.id}/>)}
        </div>
    )
}

export default Benefits;
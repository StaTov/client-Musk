import { useAppSelector } from "../../features/hooks/hooks"
import { RootState } from "../../store"
import BenefitsItem from "../Admin/LayoutBebefits"


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
import { useSelector, useDispatch } from 'react-redux';
import { yes } from '../../features/redusers/adminSlice';
import { RootState } from '../../store';

const About = () => {
    const admin = useSelector((state: RootState) => state.admin)
    const dispatch = useDispatch()

    return (
        <div>
            About
            {admin ? 'Yes' : ' No'}
            <button onClick={() => dispatch(yes())}>isAdmin</button>
        </div>
    )
}

export default About;
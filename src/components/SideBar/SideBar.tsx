import CloseIcon from '@mui/icons-material/Close';
import { ContextMenu, SidebarLink } from '../../style/styledComponents';
import { IconButton, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { useAppDispatch, useAppSelector } from '../../features/hooks/hooks';
import { tooggle } from '../../features/redusers/sidebarSlice';

const SideBar = () => {
    const dispatch = useAppDispatch();
    const toggle = useAppSelector(state => state.sideBar)
   
    if (toggle) {
        return null;
    }
    return (
        <ContextMenu>
            <IconButton onClick={() => dispatch(tooggle())} sx={{ alignSelf: 'flex-end', m: 1 }}>
                <CloseIcon />
            </IconButton>
            <Typography sx={{ mb: 3, borderBottom: 'solid' }} color={indigo[50]}>menu</Typography>
            <div>FDFDFDF</div>
            <div>FDFDFDF</div>
            <div>FDFDFDF</div>
            <div>FDFDFDF</div>
        </ContextMenu>
    )
}

export default SideBar;
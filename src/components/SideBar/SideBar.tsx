import CloseIcon from '@mui/icons-material/Close';
import { ContextMenu, MenuItem } from '../../style/styledComponents';
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
                <CloseIcon sx={{ color: indigo[50] }} />
            </IconButton>
            <Typography sx={{ mb: 3, borderBottom: 'solid' }} color={indigo[50]}>menu</Typography>
            <MenuItem to={"/"}>Главная</MenuItem>
            <MenuItem to={"/tech"}>Технология</MenuItem >
            <MenuItem to={"/flights"}>График полетов</MenuItem >
            <MenuItem to={"/guarantees"}>Гарантии</MenuItem >
            <MenuItem to={"/about "}>О компании</MenuItem >
            <MenuItem to={"/contacts"}>Контакты</MenuItem >
        </ContextMenu>
    )
}

export default SideBar;
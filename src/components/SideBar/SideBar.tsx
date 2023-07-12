import CloseIcon from '@mui/icons-material/Close';
import { ContextMenu, MenuItem } from '../../style/styledComponents';
import { IconButton, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { useAppDispatch, useAppSelector } from '../../features/hooks/hooks';
import { tooggle } from '../../features/redusers/sidebarSlice';

const SideBar = () => {
    const dispatch = useAppDispatch();
    const toggle = useAppSelector(state => state.sideBar)


    return (
        <ContextMenu hidden={toggle}>
            <IconButton onClick={() => dispatch(tooggle())} sx={{ alignSelf: 'flex-end', m: 1 }}>
                <CloseIcon sx={{ color: indigo[50] }} />
            </IconButton>
            <Typography sx={{ ml: 10, mb: 3, borderBottom: 'solid' }} color={indigo[50]}>menu</Typography>
            <MenuItem onClick={() => dispatch(tooggle())} to={"/"}>Главная</MenuItem>
            <MenuItem onClick={() => dispatch(tooggle())} to={"/tech"}>Технология</MenuItem >
            <MenuItem onClick={() => dispatch(tooggle())} to={"/flights"}>График полетов</MenuItem >
            <MenuItem onClick={() => dispatch(tooggle())} to={"/guarantees"}>Гарантии</MenuItem >
            <MenuItem onClick={() => dispatch(tooggle())} to={"/about "}>О компании</MenuItem >
            <MenuItem onClick={() => dispatch(tooggle())} to={"/contacts"}>Контакты</MenuItem >
        </ContextMenu>
    )
}

export default SideBar;
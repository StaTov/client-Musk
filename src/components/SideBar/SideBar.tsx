import CloseIcon from '@mui/icons-material/Close';
import {  MenuItem, SideMenu } from '../../style/styledComponents';
import { IconButton } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { useAppDispatch, useAppSelector } from '../../features/hooks/hooks';
import { tooggle } from '../../features/redusers/sidebarSlice';

const SideBar = () => {
    const dispatch = useAppDispatch();
    const toggle = useAppSelector(state => state.sideBar)


    return (
        <SideMenu hidden={toggle}>
            <IconButton onClick={() => dispatch(tooggle())} sx={{ alignSelf: 'flex-end', m: 1 }}>
                <CloseIcon sx={{ color: indigo[50] }} />
            </IconButton>
            <MenuItem onClick={() => dispatch(tooggle())} to={"/"}>Главная</MenuItem>
            <MenuItem onClick={() => dispatch(tooggle())} to={"/tech"}>Технология</MenuItem >
            <MenuItem onClick={() => dispatch(tooggle())} to={"/flights"}>График полетов</MenuItem >
            <MenuItem onClick={() => dispatch(tooggle())} to={"/guarantees"}>Гарантии</MenuItem >
            <MenuItem onClick={() => dispatch(tooggle())} to={"/about "}>О компании</MenuItem >
            <MenuItem onClick={() => dispatch(tooggle())} to={"/contacts"}>Контакты</MenuItem >
        </SideMenu>
    )
}

export default SideBar;
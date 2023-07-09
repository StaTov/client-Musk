import { Outlet } from "react-router-dom";
import { BurgerIcon, ImgBox, NavBar, NavMenu, NavbarLink } from "../../style/styledComponents";
import logo from "../../images/logo.png";
import { IconButton, Toolbar } from "@mui/material";
import indigo from "@mui/material/colors/indigo";
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { tooggle } from "../../features/redusers/sidebarSlice";

const Nav = () => {
    const dispatch = useAppDispatch();
    const toggle = useAppSelector(state => state.sideBar)

    return (
        <div>
            <NavBar>
                <ImgBox>
                    <img width="200px" src={logo} alt="" />
                </ImgBox>
                <NavMenu>
                    <NavbarLink to={"/"}>Главная</NavbarLink>
                    <NavbarLink to={"/tech"}>Технология</NavbarLink >
                    <NavbarLink to={"/flights"}>График полетов</NavbarLink >
                    <NavbarLink to={"/guarantees"}>Гарантии</NavbarLink >
                    <NavbarLink to={"/about "}>О компании</NavbarLink >
                    <NavbarLink to={"/contacts"}>Контакты</NavbarLink >
                </NavMenu>
                {toggle &&
                    <BurgerIcon  >
                        <IconButton  onClick={() => dispatch(tooggle())}>
                            <MenuIcon fontSize="large" sx={{ color: indigo[50] }} />
                        </IconButton>
                    </BurgerIcon>
                }
            </NavBar>
            <Toolbar>
            </Toolbar>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Nav;
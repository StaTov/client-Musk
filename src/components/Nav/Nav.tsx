import { Outlet } from "react-router-dom";
import { BurgerIcon, ImgBox, NavBar, NavMenu, NavbarLink } from "../../style/styledComponents";
import logo from "../../images/logo.png";
import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { indigo } from '@mui/material/colors';

const Nav = () => {
   
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
                    <BurgerIcon>
                        <IconButton >
                        <MenuIcon fontSize="large" sx={{ color: indigo[50] }}/>
                        </IconButton>
                   </BurgerIcon>
                </NavMenu>
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
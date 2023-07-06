import { Link, Outlet } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div>
                <Link to={"/"}>Главная</Link>
                <Link to={"/tech"}>Технология</Link>
                <Link to={"/flights"}>График полетов</Link>
                <Link to={"/guarantees"}>Гарантии</Link>
                <Link to={"/about "}>О компании</Link>
                <Link to={"/contacts"}>Контакты</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Nav;
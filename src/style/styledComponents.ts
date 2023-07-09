import styled from 'styled-components'
import { device } from './constants';
import img from '../images/fon.jpg';
import { Link } from 'react-router-dom';


export const BurgerIcon = styled.div`
@media(max-width: 2000px) {
  display: flex;


@media(min-width: 890px) {
  display: none;

`

export const ImgBox = styled.div`

@media (min-width: 768px) { 
  padding-right: 0px;
  padding-left: 0px;
}
@media (min-width: 972px) { 
  padding-right: 40px;
  padding-left: 40px;
}
`

export const NavbarLink = styled(Link)`
 color:white;
 font-size: middle;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 display: flex;
 align-items: center;
 padding: 0px 12px 0px 12px;

&:hover{
    opacity: 0.3;
},
&:focus{
    color: gray;
};
&:active{
    color: red;
};
@media(max-width: 891px) {
  display: none;
}

 `

export const NavMenu = styled.div`
width: 100%;
display: flex;



`

export const Container = styled.div`
background: url(${img})  ;
background-size: cover;
width: 100vw;
height: 100vh;
overflow: hidden;
p: 0;
m: 0;
`
export const NavBar = styled.nav`
width: 100%;
position: relative;
display: flex;
justify-content: flex-start;
align-items: center;
height: 60px;
background: rgba(250, 250, 250, .06);
border-bottom: 0.1px solid gray;
`


export const Page = styled.div`
margin: auto;
font-family: "Roboto";
text-align: center;

@media ${device.laptop} { 
  max-width: 800px;
}

@media ${device.desktop} {
  max-width: 1400px;
}
`
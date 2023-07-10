import styled from 'styled-components'
import { device } from './constants';
import img from '../images/fon.jpg';
import { Link } from 'react-router-dom';



export const ContextMenu = styled.div`

right: 0;
border: 1px solid gray;
position: absolute;
background: #051e34;
height: 100vh;
width: 200px;
display: flex;
flex-direction: column;
align-items: center;
`

export const BurgerIcon = styled.div`

@media(max-width: 2000px) {
display: flex;
margin-right: 20px;
  

@media(min-width: 891px) {
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
export const MenuItem = styled(Link)`

color: white;
display: flex;
align-items: center;
padding: 0px 12px;
margin: 15px;
text-decoration: none;

&:hover{
opacity: 0.3;
},
&:focus{
  color: gray;
};
&:active{
  color: red;
};
`

export const NavbarLink = styled(Link)`

 color: white;
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
overflow: auto
p: 0;
m: 0;

`
export const NavBar = styled.nav`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
height: 60px;
background: rgba(250, 250, 250, .06);
border-bottom: 0.1px solid gray;
@media(max-width: 890px) {
justify-content: space-between;
`


export const Page = styled.div`

font-family: "Roboto";
border: 1px solid red;
display: flex;
flex-wrap: wrap;
width: 100%;


@media ${device.laptop} { 
  max-width: 900px;
  margin: 0 auto;

}

@media ${device.desktop} {
  max-width: 1400px;
 
}
`
export const PageElement = styled.div`


border: 1px solid green;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

@media only screen and (max-width: 400px) {
  width: 100%;
  height: auto;
  padding: 10px;
}
@media only screen and (min-width: 401px) and (max-width: 960px) {
  width: 50%;
  height: auto;
}
@media only screen and (min-width: 961px) {
}
`
export const FontMin = styled.div`
@media only screen and (max-width: 400px) {
  color: white;
  font-size: 10px;


}
@media only screen and (min-width: 401px) and (max-width: 960px) {
  
}
@media only screen and (min-width: 961px) {
}
`
export const FontMax = styled.div`
@media only screen and (max-width: 400px) {
  color: white;
  font-size: 35px;
  transition: font-size 0.2s;
  &:hover {
    font-size: 40px;
}
@media only screen and (min-width: 401px) and (max-width: 960px) {
  
}
@media only screen and (min-width: 961px) {
}
`

export const BenefitsContainer = styled.div`

color: white;
margin: 1px;
width: 23vw;
height: 23vw;
font-size: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:  linear-gradient(to bottom,  rgba(250, 250, 250, .1), transparent 100%);
  

  &:hover {
cursor: pointer;
background:  linear-gradient(to bottom,  rgba(250, 250, 250, .12), transparent 100%);
}
` 

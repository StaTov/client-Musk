import styled from 'styled-components'
import { device } from './constants';
import img from '../images/fon.jpg';
import { Link } from 'react-router-dom';



export const ContextMenu = styled.div<{ hidden?: boolean; }>`

right: 0;
border: 1px solid gray;
position: absolute;
background:  #1f253a;
height: 100vh;
width: 200px;
display:${props => props.hidden ? 'none' : 'flex'};
flex-direction: column;
align-items: flex-start;
animation-duration: 0.4s;
animation-name: anim;


@keyframes anim{
from {
  right:  -200px;
}
to {
  right: 0;
}
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
position: relative;
background-attachment: fixed;
background-size: cover;
min-height: 100vh;
overflow: hidden;
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
export const Wrapper = styled.div`

@media only screen and (max-width: 400px) {
  width: 290px;
 margin: 0 auto;
}
@media only screen and (min-width: 401px) and (max-width: 960px) {
 
 width: 300px;
 margin: 0 auto;
 }
@media only screen and (min-width: 961px) {
}
`

export const PageElement = styled.div`


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
  margin-top: 20px;
  width: 100%;
  height: auto;
  padding: 15px;
  
 }
@media only screen and (min-width: 961px) {
}
`
export const FontNews = styled.div`
color: white;
@media only screen and (max-width: 400px) {
  font-size: 10px;
  line-height: 1.25rem;

}
@media only screen and (min-width: 401px) and (max-width: 960px) {
  font-size: 15px;
  line-height: 1.25rem;
}
@media only screen and (min-width: 961px) {
}

`

export const FontMin = styled.div`
color: white;
@media only screen and (max-width: 400px) {
  font-size: 10px;

}
@media only screen and (min-width: 401px) and (max-width: 960px) {
  font-size: 10px;
}
@media only screen and (min-width: 961px) {
}
`
export const FontMax = styled.div`
color: white;

@media only screen and (max-width: 400px) {
  font-size: 30px;
  transition: font-size 0.2s;
  &:hover {
    font-size: 40px;
}
}
@media only screen and (min-width: 401px) and (max-width: 960px) {
  font-size: 34px;
  transition: font-size 0.2s;
  &:hover {
    font-size: 40px;
}
}
@media only screen and (min-width: 961px) {
}
`

export const BenefitsContainer = styled.div`

border-radius: 2px;
color: white;
margin: 1px;
width: 90px;
height: 90px;
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
 
@media only screen and (max-width: 400px) {
 
}
@media only screen and  (min-width: 401px) and (max-width: 960px) {
  margin: 20px ;  
  }
`

export const ButtonStart = styled.button`
height: 50px;
margin: 5px;
width: 120px;
background: #333;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
font-family: Consolas, Courier New, monospace;
border: solid #404C5D 1px;
font-size: 16px;
color: white;
-webkit-transition: 500ms;
transition: 500ms;
border-radius: 5px;
background: linear-gradient(145deg, #2e2d2d, #212121);
-webkit-box-shadow: -1px -5px 15px #41465B, 
             5px  5px 15px #41465B, 
  inset      5px  5px 10px #212121, 
  inset     -5px -5px 10px #212121;
box-shadow: -1px -5px 15px #41465B, 
             5px  5px 15px #41465B, 
  inset      5px  5px 10px #212121, 
  inset     -5px -5px 10px #212121;

&:hover {
  cursor: pointer;
  -webkit-box-shadow: 1px 1px 13px #20232e,
                    -1px -1px 13px #545b78;
  box-shadow: 1px 1px 13px #20232e,
             -1px -1px 13px #545b78;
  color: #d6d6d6;
  -webkit-transition: 500ms;
  transition: 500ms;
}
&:active {
  -webkit-box-shadow: 1px 1px 13px #20232e,
                     -1px -1px 33px #545b78;
  box-shadow: 1px 1px 13px #20232e,
             -1px -1px 33px #545b78;
  color: #d6d6d6;
  -webkit-transition: 100ms;
  transition: 100ms;
}
`
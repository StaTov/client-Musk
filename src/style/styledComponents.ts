import styled from 'styled-components'
import img from '../images/p1.jpg';
import { Link } from 'react-router-dom';


export const HiddenDiv = styled.div`
width: 100px;
@media only screen and (max-width: 839px) {
  display: none;
}
`

export const SideMenu = styled.div<{ hidden?: boolean; }>`
right: 0;
border: 1px solid gray;
position: absolute;
background: url(${img});
height: 100vh;
width: 200px;
display:${props => props.hidden ? 'none' : 'flex'};
flex-direction: column;
align-items: center;
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

cursor: pointer;
background: rgba(250, 250, 250, 0); 
transition: background 0.3s;
border-radius: 5px;


&:hover {
background: rgba(250, 250, 250, .03);
}

@media (min-width: 768px) { 
  margin-right: 0px;
  margin-left: 0px;
}
@media (min-width: 972px) { 
  margin-right: 40px;
  margin-left: 40px;
}
`
export const MenuItem = styled(Link)`
width: 100%;
height: 60px;
color: white;
text-align: center;
text-decoration: none;
padding-top: 18px;


&:hover{
background: rgba(250, 250, 250, .1);

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

export const NavMenu = styled.nav`
width: 100%;
display: flex;
`

export const NoteBox = styled.div`
z-index: 99999;
position: absolute; 
width: 350px;
left: 0;
right: 0;
margin: 0 auto;
bottom: 15%;
animation-duration: 0.4s;
animation-name: anim;

@keyframes anim{
  from {
    bottom: 0%;;
  }
  to {
    bottom: 15%;
  }
;
`


export const Container = styled.div`
background: url(${img});
position: relative;
background-attachment: fixed;
background-size: cover;
min-height: 100vh;
overflow: hidden;
p: 0;
m: 0;

@media only screen and (min-width: 961px) {
background-size: 130% auto;
}

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

@media only screen and (max-width: 401px) {
  flex-direction: column;
  justify-content: space-around; 
  min-height: calc(100vh - 60px);
}

@media only screen and (min-width: 401px) and (max-width: 961px) {
max-width: 800px;
margin: 0 auto;
}

@media only screen and (min-width: 961px) {
width: 85vw;
margin: 0 auto;
}
`
export const AdminPage = styled.div`
font-family: "Roboto";
display: flex;
flex-wrap: wrap;
width: 100%;
margin: 0 auto;
justify-content: space-around;
align-items: flex-start;

@media only screen and (min-width: 961px) {
 width: 870px
 }
`

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
@media only screen and (max-width: 400px) {
   margin: 0 auto;
   gap: 1vw;
}

@media only screen and (min-width: 401px) and (max-width: 961px) {
 width: auto;
 margin: 0 auto;
 gap: 1vw;
 }
@media only screen and (min-width: 961px) {
  margin: 0 auto;
gap: 10px;
}
`
export const AdminWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);

@media only screen and (max-width: 401px) {
   margin: 0 auto;
   gap: 1vw;
}

@media only screen and (min-width: 401px) and (max-width: 961px) {
 width: auto;
 margin: 0 auto;
 gap: 1vw;
 }
@media only screen and (min-width: 961px) {
gap: 10px;
}
`

export const AdminPageElement = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

@media only screen and (max-width: 641px) {
  width: auto;
  height: auto;
  padding: 15px;
    
}
@media only screen and (min-width: 641px) and (max-width: 961px) {
  width: auto;
  height: auto;
  padding: 15px;
  
 }
@media only screen and (min-width: 961px) {
  padding: 15px;
  width: auto;
  height: auto;
 }
`

export const PageElement = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

@media only screen and (max-width: 401px) {
  width: 100%;
  height: auto;
  padding: 10px;
  
}
@media only screen and (min-width: 401px) and (max-width: 961px) {
  margin-top: 20px;
  width: 100%;
  height: auto;
  padding: 15px;
  
 }
@media only screen and (min-width: 961px) {
  margin-top: 20px; 
  width: 50%;
  height: auto;
  padding: 20px;
  align-items: start;
  justify-content: flex-start;
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
  font-size: 18px;
  line-height: 1.6rem;
}
`
export const AdminFontMax = styled.div`
color: white;
font-size: 30px;
`

export const AdminFontMin = styled.div`
font-size: 10px;
color: white;
`

export const FontMin = styled.div`
color: white;
@media only screen and (max-width: 400px) {
  font-size: 10px;
}
@media only screen and (min-width: 400px) and (max-width: 961px) {
  font-size: 10px;
}
@media only screen and (min-width: 961px) {
  font-size: 12px;
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
@media only screen and (min-width: 400px) and (max-width: 961px) {
  font-size: 34px;
  transition: font-size 0.2s;
  &:hover {
    font-size: 40px;
}
}
@media only screen and (min-width: 961px) {
  font-size: 50px;
  transition: font-size 0.2s;
  &:hover {
        font-size: 55px;
}
}
`
export const AdminBenefitsContainer = styled.div`
border-radius: 5px;
color: white;
margin: 1px;
width: 105px;
height: 105px;
font-size: middle;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background:  rgba(250, 250, 250, 0.06);
  

&:hover {
cursor: pointer;
background: rgba(250, 250, 250, .3)
}
` 

export const BenefitsContainer = styled.div`
border-radius: 5px;
color: white;
margin: 1px;
width: 105px;
height: 105px;
font-size: middle;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background:  rgba(250, 250, 250, 0.06);
  

&:hover {
cursor: pointer;
background: rgba(250, 250, 250, .3)
}

@media only screen and (min-width: 961px) {
  width: 125px;
  height: 125px;
  }

`
export const BenefitsAdmin = styled.div`
position: relative;
border-radius: 5px;
color: white;
margin: 1px;
width: 105px;
height: 105px;
font-size: middle;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background:  rgba(250, 250, 250, 0.06);
  
  &:hover {
cursor: pointer;
background: rgba(250, 250, 250, .3)
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
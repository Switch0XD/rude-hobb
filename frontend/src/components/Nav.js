import React, {useState} from 'react';
import styled, {css} from 'styled-components';
const NavStyles = styled.h2`

 *{
   margin: 0px;
   padding: 0px;
   box-sizing: border-box;
 }

display: flex;
justify-content: center;
align-items: center;
position: relative;
min-height: 10vh;
background-color: #746FA3;
font-family: 'Montserrat', sans-serif;

/*.........................logo design.....................*/

.logo{
     color: #ffff;
      font-size: 25px;
      margin-right: 45%;
      letter-spacing: 5px;
      text-transform: uppercase;
    }

/*...............Navigation bar links...................*/

.nav-links {
    display: flex;
    letter-spacing: 10px;
    justify-content: space-around;
    width: 35%;
    
    }

    .nav-links li{
      list-style: none;
    }
    
    .nav-links a{
      color: #ffff;
      text-decoration: none;
      letter-spacing: 5px;
      font-weight: bold;
     font-size:21px;
    }

    .burger{
      display: none;
      position: relative;
      cursor: pointer;
       }

/*.........................desktop resolution........................*/

 @media all and (max-width: 1024px){
   .nav-links{
     width:60%
   }
 }

/*........................Mobile resolution..........................*/

 @media all and ( max-width: 768px) {
   body{
     overflow-x: hidden;
   
   }

   .burger {
     display: block; 
   }

  .nav-links {
    
 display:none;
position: absolute;
right: 0px;
height: 92vh;
top: 8vh;
background-color: #746FA3;
flex-direction: column;
align-items: center;
width: 50px;
transform: translateX(0);
transition: 0.5s
   }

  li {
 list-style: none;
   }
 a{
   color: #ffff;
 }


 }
`;

// toggling Function for mobile view

const NavLink = styled.ul`
         position: absolute;
         display: none;
         background-color: #746FA3;
         cursor: pointer;
         
   ${(props) =>
    props.btn &&
    css`
      display: block;

    `}

`;

const Nav = () => {
  const [toggleBtn, setBtn] = useState(false);

  /*........................... Desktop settings...............................*/
  return (<NavStyles>

    <div className="logo">
      <h4>THE LOGO</h4>
    </div>

    <ul className="nav-links">

      <li >
        <a href="#home">Home</a>
      </li>

      <li>
        <a href="#home">News</a>
      </li>

      <li>
        <a href="#home">Contact</a>
      </li>

      <li>
        <a href="#home">About</a>
      </li>
    </ul>

    {/*.....................toggle area............................... */}

    <button className="burger" onClick={() => setBtn(!toggleBtn)} >
     X
      </button>
    <div>
      <NavLink btn={toggleBtn}>

        <li >
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#home">News</a>
        </li>

        <li>
          <a href="#home">Contact</a>
        </li>

        <li>
          <a href="#home">About</a>
        </li>
      </NavLink>
      </div>
  </NavStyles>
  )
};

// exporting navbar

export default Nav;

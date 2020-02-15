import React from 'react';
import {Link} from 'react-router-dom';
import Style from 'styled-components';




const DIV2 = Style.div`
display: flex;
flex-direction: row;
align-items: center;
width: 50%;
justify-content: center;
@media (max-width: 600px) {
  width: 70%;
}
`
const H1 = Style.h1``
const DIV = Style.div`
padding: 2%;
background-color: #f9f6ef;
display: flex;
flex-direction: row;
justify-content: space-between;

@media (max-width: 600px) {
  display: flex;
  flex-direction: column;
//   justify-content: center;
  align-items: center;
}
`



const Header = () => {


    return (
        <DIV>
            <H1>Devon Munter</H1>
            <DIV2>
                <Link className='tabs' to='/'>Home</Link>
                <Link className='tabs' to='/contact'>Contact</Link>
                <a className='tabs post_it' href='https://frosty-curran-5b6381.netlify.com/' >Post-It App!</a>

            </DIV2>
        </DIV>
    )
}

export default Header;

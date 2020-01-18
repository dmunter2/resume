import React from 'react';
import {Link} from 'react-router-dom';
import Style from 'styled-components';




const DIV2 = Style.div``
const H1 = Style.h1``




const Header = () => {


    return (
        <div>
            <H1>Devon Munter</H1>
            <DIV2>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/resume'>Resume</Link>
            </DIV2>
        </div>
    )
}

export default Header;

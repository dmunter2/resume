import React, {useState} from 'react';
import Style from 'styled-components';


const DIV = Style.div`
padding: 2%;
padding-top: 4%;
padding-bottom: 4%;
display: flex;
flex-direction: row;
justify-content: space-between;


`

const DIV1 = Style.div`
display: flex;
flex-direction: column;
align-items: end;
width: 50%;
`
const DIV2 = Style.div`
height: 350px;
width: 380px;
background-color: #1f2020;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
margin: 3%;
`




const Lesson4 = () => {


    return (
        <DIV>
      
            <DIV2>

            </DIV2>
            <DIV1>
                <h1>Lesson4</h1>

            </DIV1>
        </DIV>
    )
}


export default Lesson4;

import React, {useState} from 'react';
import Style from 'styled-components';



const H5 = Style.h5`

`
const DIV = Style.div`
padding: 2%;
padding-top: 4%;
padding-bottom: 4%;
display: flex;
flex-direction: row;
justify-content: space-between;


`
const DIV2 = Style.div`
width: 50%;
`
const DIV3 = Style.div`
display: flex;
flex-direction: column;
align-items: end;
width: 50%;

`
const FORM = Style.form`
height: 350px;
width: 380px;
background-color: #1f2020;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
margin: 3%;
`
const INPUT  = Style.input``

const Lesson3 = () => {



    return(

        <DIV>

            <DIV2>
            <h1>State Management</h1>

            <H5>One of the first things I learned at Lambda School was how to use flexbox. I loved the feeling of creating something and then having control on that contents display through out the page regardless of the screen size</H5>
            </DIV2>

            <DIV3>
                <FORM>
                    <INPUT
                        type='text' 
                        placeholder='favorite'
                    />



                </FORM>




            </DIV3>

        </DIV>
    )
}


export default Lesson3;



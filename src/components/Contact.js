import React from 'react';
import link from './linkedin.PNG'
import face from './facebook.PNG'
import Style from 'styled-components';
import git from './github.PNG'


const IMG = Style.img`
width: 220px;
height: 200px;
border-radius: 5px;
margin: 15px;

`
const CONTAINER = Style.div`
width: 220px;
height: 200px;
border-radius: 5px;
margin: 15px;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #f9f6ef;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);


`
const DISPLAY = Style.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
margin-top: 20px;
`
const H1 = Style.h5`
text-align: center;

`
const DIV = Style.div`
margin-top: 100px;
display: flex;
flex-direction: row;
justify-content: center;
`

const IMG2 = Style.img`
height: 150px;
`
const MAIN = Style.div`
display: flex;
flex-direction: column;
justify-content: center;
`



const Contact = () => {


    return (
        <MAIN>

            <DISPLAY>
                <a href='https://www.linkedin.com/in/devon-munter-93890a182'>
                    <IMG src={link} />
                </a>
                <a href='https://www.facebook.com/devon.munter'>
                    <IMG src={face} />
                </a>
                <CONTAINER>

                    <H1>devon.munter@gmail.com</H1>
                    <H1>(402)-649-9508</H1>

                </CONTAINER>
            </DISPLAY>


            <DIV>
                <a href='https://github.com/dmunter2'>
                    <IMG2 src={git} />

                </a>

            </DIV>


        </MAIN>
    )
}


export default Contact;


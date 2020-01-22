import React, { useState } from 'react';
import Style from 'styled-components';


const DIV = Style.div`
background-color: #e4e4e2;
padding: 2%;
padding-top: 4%;
padding-bottom: 4%;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 100%;
padding-bottom: 40px;


@media (max-width: 840px) {
  display: flex;
flex-direction: column;
justify-content: center;
padding-bottom: 40px;
}
@media (max-width: 600px) {
  display: none;
}


`
const DIV1 = Style.div`
width: 50%;

@media (max-width: 840px) {
  width: 100%;
}

`
const DIV2 = Style.div`
display: flex;
flex-direction: column;
align-items: end;
width: 50%;
@media (max-width: 840px) {
  width: 100%;

  display: flex;
  align-items: center;
}

`
const CONTAINER = Style.div`
height: 350px;
width: 280px;
background-color:#5eb0e5;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
margin: 3%;
display: flex;
justify-content: center;
align-items: center;
`
const H1 = Style.h1`
color: #1f2020;
`
const H5 = Style.h5`
color: #25282a;
font-size: 16px;

`

const DIV32 = Style.div`
width: 200px;
height: 60px;
background-color: #f9f6ef;
border-radius: 8px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
display: flex;
justify-content: center;
align-items: center;

`



const Lesson6 = () => {



    return (
        <DIV className='background2'>
            <DIV1>
                <H1>Countdown App</H1>
                <H5>After creating my To Do list application I had the idea of this application. It was fun to make and it was a great refresher of passing state and using Event Handlers. The backend for this application is in the works and I plan on using it store the dates of a users current events and display them upon logging in.   </H5>
            </DIV1>
            <DIV2>
                <a className='a-tag'href='https://angry-roentgen-ab4441.netlify.com/'>
                    <CONTAINER>
                      <DIV32>
                      <H1>Start</H1>

                      </DIV32>



                    </CONTAINER>
                </a>

            </DIV2>
        </DIV>
    )
}


export default Lesson6;

import React, {useState} from 'react';
import Style from 'styled-components';


const DIV = Style.div`
background-color: #004080;
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
background-color: #1f2020;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
margin: 3%;
`
const H1 = Style.h1`
color: #f9f6ef;
`
const H5 = Style.h5`
color: #f9f6ef;
font-size: 16px;

`

const Lesson5 = () => {



    return(
        <DIV>
            <DIV1>
                <H1>REST API</H1>
                <H5>It was amazing to see my first homemade API running. I used Nodejs to make the backend. I also used Knex, JsonWebToken, Express, and Cors to make restricted routes. A token was given to the User in the LocalStoral, and all specified routes required that token before any information was given from the database. The databases in my portfolio were created using SQLite3. I am currently working towards getting a better understanding of PostgreSQL.   </H5>
                <H5>Attached here is a project I just finished a few weeks ago. It includes a complete frontend and backend that 
I created indivually. The frontend was built using React, and the Backend with NodeJS. </H5>
            </DIV1>
            <DIV2>
                <a href='https://elastic-gates-3ba026.netlify.com/'>
                <CONTAINER className='background1'>
                    


                </CONTAINER>
                </a>

            </DIV2>
        </DIV>
    )
}


export default Lesson5;

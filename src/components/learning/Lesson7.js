import React, { useState } from 'react';
import Style from 'styled-components';
import post from './post.PNG'


const DIV = Style.div`
background-color: rgb(195, 197, 202);
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
color: black;
`
const H5 = Style.h5`
color: black;
font-size: 16px;

`

const Lesson7 = () => {



    return (
        <DIV>
            <DIV1>
                <H1>Post - It</H1>
                <H5>This project is a much cleaner then my To-Do application. The login experience is much smoother then my previous application. Deciding to use PostgreSQL on the backend has proven
                    to be worth it. It has provided a quicker experience for the user. 
                     </H5> <H5>
                    Post-It is definitely an unfinished project that I will continue to build on. The basics of the project are working but I have a few more ideas I want to try out. One idea I am currently attempting is 
                    incorporate a way for users to send direct messages to other users. Along with that I am going to create a way for users to visit other users profiles.  </H5>
                    <H5>One of the key things I learned from creating this project was how to give my front end specific information using the backend. I used KnexJs to build queries to send to my frontend. In the past
                        the information my front end recievd from the backend has been broad. This lead to more complex code on the front end which the backend could have taken care of. This time around I was able to give precise information. This allowed my API calls on the front end to be much simpler.
                    </H5>
            </DIV1>
            <DIV2>
                <a href='https://frosty-curran-5b6381.netlify.com/'>
                    <CONTAINER className='background5'>



                    </CONTAINER>
                </a>

            </DIV2>
        </DIV>
    )
}


export default Lesson7;

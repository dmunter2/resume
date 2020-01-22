import React from 'react';
import Style from 'styled-components';
import Lesson1 from './learning/Lesson1'
import Lesson2 from './learning/Lesson2'
import Lesson3 from './learning/Lesson3'
import Lesson5 from './learning/Lesson5'
import home from './home.PNG';
import Lesson6 from './learning/Lesson6';



const MAINDIV = Style.div`
background-color: #e4e4e2;
`
const MAIN = Style.div`
padding: 2%;
`
const H1 = Style.h1``
const H4 = Style.h5`
font-family: 'Source Sans Pro', sans-serif;
font-size: 20px;
font-weight: 300;
margin-top: 0;

`

const H8 = Style.h5`
font-family: 'Source Sans Pro', sans-serif;
font-size: 20px;
font-weight: 300;
margin-top: 0;


@media (max-width: 600px) {
  margin-top: 28px
}



`
const DIV3 = Style.div`
display: flex;
flex-direction: row;
`
const NEWIMG = Style.img`
height: 280px;
border-radius: 7px;
margin-left: 2%;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

@media (max-width: 600px) {
  display: none;
}

`



const AboutMe = () => {

    return(

        <MAINDIV>


            <MAIN>
                <H1>About Me</H1>

                <DIV3>


                <H4>A week after graduating college in 2017 was when I began my career in banking. After a few years in I reazlied I was in the wrong career. During this time of searching I stumbled on
                  FreeCodeCamp and I began to dive into their introductory HTML course. I became a little obsessed and took a few of the other courses they had to offer. I was upset because I realized I
had made the mistake of going to college for business when I should’ve went the software route. 
                
                    <H8>It wasnt until early 2019 when I discovered an online software engineer program that fit with my schedule and budget. I am currently still enrolled in the course and have dedicated every Sunday-Thursday since April of 2019 to it. I have learned much more then I thought could be possible in this short amount of time.
      With a short amount of time I could see how any
       employer could be worried about what I have acutally have learned, which is why I have attatched some of my
                    favorite projects I have created. Github is where I have been saving all of my projects. You can visit my profile <a href='https://github.com/dmunter2'>here.</a></H8>
                      
                </H4>
                <NEWIMG src={home} />


                </DIV3>


            </MAIN>

        

        <Lesson1 />
        <Lesson2 />
        <Lesson3 />
        <Lesson5 /> 
        <Lesson6 />
        

        </MAINDIV>
    )
}


export default AboutMe;



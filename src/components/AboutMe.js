import React from 'react';
import Style from 'styled-components';
import Lesson1 from './learning/Lesson1'
import Lesson2 from './learning/Lesson2'
import Lesson3 from './learning/Lesson3'
import Lesson5 from './learning/Lesson5'
import home from './home.PNG';
import Lesson6 from './learning/Lesson6';
import Lesson0 from './learning/Lesson0'
import Lesson7 from './learning/Lesson7'


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
margin-top: 10px;


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


  setTimeout(() => {
    alert('Dont forget to check out my new Post-It App!')
  }, 10000);
  

    return(

        <MAINDIV>


            <MAIN>
              
                <H1>About Me</H1>

                <DIV3>


            <H4>Thanks for stopping by, throughout this portfolio I will take you 
through my software education journey up until now. Before I enrolled in Lambda school my education began
with courses on Udemy and the desire to learn more. I have immersed myself in many different
Programming Languages, Frameworks, and Libraries. I love to think critically and be a important
player in any team project im involved in. 
 
            
                    <H8>I started Lambda school running full force. The Full Stack Web Developer course I am currently 
enrolled in has pushed and guided me into becoming a student of software. I love to learn and
implement new things into projects I work on. This career path is right for me and I am excited to 
start developing full-time. 
                 I have learned much more then I thought could be possible in this short amount of time. 
With a short amount of time invested in this program, I could see how any
 employer could be worried about what I have learned, which is why I have attached some of my
                    favorite projects I have created. Github is where I have been saving all of my projects. You can visit my profile <a href='https://github.com/dmunter2'>here.</a></H8>
                      
                </H4>
                <NEWIMG src={home} />


                </DIV3>


            </MAIN>

        
          <Lesson0 />
        <Lesson1 />
        <Lesson2 />
        <Lesson3 />
        <Lesson5 /> 
        <Lesson6 />
        <Lesson7 />
        

        </MAINDIV>
    )
}


export default AboutMe;



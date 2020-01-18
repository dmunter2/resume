import React from 'react';
import Style from 'styled-components';
import Lesson1 from './learning/Lesson1'
import Lesson2 from './learning/Lesson2'

const H1 = Style.h1``
const H4 = Style.h5``

const AboutMe = () => {

    return(

        <div>

            <H1>About Me</H1>

            <H4>A week after graduating college in 2017 was when I began my career in banking. A week after that was when
I reazlied I was in the wrong career. During this time of searching was when I stumbled into 
free code camp. I began their intro course and started to dive in to their introductary html course. 
I became a little obsessed and took a few other courses they had to offer. I was upset because I realized i 
had made the mistake of going to college for business when I should went the software route. 
It wasnt until early 2019 when I discovered an online software engineer program that fit with my schedule
and budget. I am currently still enrolled in the course and have dedicted every Sunday-Thursday since April
of 2019 to this course. I have learned much more then I thought could be possible in this short amount of time

With a short amount of time I could see how any
employer would be worried about what I have acutally have learned, which is why I have attatched some of my 
favorite projects I have created</H4>


        <Lesson1 />
        <Lesson2 />

        </div>
    )
}


export default AboutMe;



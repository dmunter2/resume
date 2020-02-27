import React, { useState } from 'react';
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
// width: 50%;

@media (max-width: 840px) {
  width: 100%;
}

`

const H1 = Style.h1`
color: #f9f6ef;
`
const H5 = Style.h5`
color: #f9f6ef;
font-size: 16px;

`

const Lesson0 = () => {



    return (
        <DIV>
            <DIV1>
          <H1>What I am Looking for</H1>
                <h2></h2>
          <H5>Before I continue with my projects, I wanted to throw out what I am interested in.
Im looking to Develop for a company that creates meaningful projects and empowers
engineers to make decisions, solve problems, and implement new ideas.  </H5>
            </DIV1>
        </DIV>
    )
}


export default Lesson0;

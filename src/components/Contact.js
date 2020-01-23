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

@media (max-width: 600px) {
  width: 85px;
  height: 70px;

  display: flex;
  align-items: center;
}


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

@media (max-width: 600px) {
  width: 250px;
  height: 70px;

  display: flex;
  align-items: center;
}



`
const DISPLAY = Style.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
margin-top: 20px;

@media (max-width: 600px) {


  display: flex;
  flex-direction: column;
  align-items: center;
}


`
const H1 = Style.h5`
text-align: center;

@media (max-width: 600px) {


  margin: 1%;
}


`
const DIV = Style.div`
margin-top: 100px;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 600px) {
  display: none;
}


`

const IMG2 = Style.img`
height: 150px;

@media (max-width: 600px) {
  width: 85px;
  height: 70px;

  display: flex;
  align-items: center;
}


`
const MAIN = Style.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const NEW = Style.div`
display: flex;
flex-direction: row;
`
const DIV4 = Style.div`
display: none;

@media (max-width: 600px) {
  display: flex;
  margin-top: 5%;
}

`


const Contact = () => {


    return (
        <MAIN>

            <DISPLAY>
                <NEW>

                    <a href='https://www.linkedin.com/in/devon-munter-93890a182'>
                        <IMG src={link} />
                    </a>
                    <a href='https://www.facebook.com/devon.munter'>
                        <IMG src={face} />
                    </a>

                    <DIV4>
                        <a href='https://github.com/dmunter2'>
                            <IMG2 src={git} />

                        </a>

                    </DIV4>


                </NEW>

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


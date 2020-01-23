import React, {useState} from 'react';
import Style from 'styled-components';

const DIV = Style.div`
background-color: #1F2020;
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 2%; 
height: 100%;
padding-top: 4%;
padding-bottom: 4%;

@media (max-width: 800px) {
  display: flex;
flex-direction: column;
}

`
const SPAN = Style.div`
width: 46%;

@media (max-width: 800px) {
  width: 100%;
}


`


const H1 = Style.h1`
color: #E4E4E2;
`

const H4 = Style.h4`
color: #E4E4E2;
`



const CONTAINER1 = Style.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: end;

@media (max-width: 800px) {
  display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
width: 100%;
margin-bottom: 20px;
}

`
const CONTAINER2 = Style.div`
display: flex;
width: 350px;
flex-direction: row;
justify-content: space-between;
`



const CONTAINER3 = Style.div`
margin-top: 6%;
height: 240px;
width: 348px;
border: 1px solid #F5DDC5;
`



const DIV1 = Style.div`
height: 40px;
width: 70px;
border: 1px solid #a3aaae;
margin: 1%;
color: white;
margin: 2%;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

display: flex;
align-items: center;
justify-content:center;
`



const DISPLAY = Style.div`
`

const BUTTON = Style.button`
width: 110px;
height: 60px;
`












const Lesson1 = () => {

    const [display, setDisplay] = useState("plain")

    const [button, setButton] = useState('plain-btn')

    const [button2, setButton2] = useState('button-design')

    const [hiddenbtn, setHiddenbtn] = useState('no-display')



    const handleDisplay = e => {
        e.preventDefault();
        setDisplay('row')
        setButton('button-design')
        setButton2('plain-btn')
    }
    const handleDisplay2 = e => {
        e.preventDefault();
        setDisplay('column')
        setButton2('button-design')
        setButton('plain-btn')
    }

    const handleDisplay3 = e => {
        e.preventDefault();
        setHiddenbtn('is-display')
        
        

    }

    return (
        <DIV>

            <SPAN>
                <H1>Early On</H1>
                <H4>One of my favorite properties we learned in the first week of school was CSS Flexbox. After covering the basics of HTML and CSS, we were
                    introduced to this. Learning this method of arrangment gave me more control of my webpage and 
                    gave me more confidence on the design portion. 
                </H4>
                <H4>Here is an example of calling 'display: flex' then decideing what type of direction you want the properties to be arranged. 
                    You can select to align the contents with a 'flex-direction' of 'row' or 'flex-direction' of 'column' This is just one of the powers of Flexbox.
                </H4>
            </SPAN>


            <CONTAINER1>
                <CONTAINER2>
                    <DISPLAY>
                        <BUTTON className='display-btn' onClick={handleDisplay3} >Display</BUTTON>
                    </DISPLAY>


                    <DISPLAY className={hiddenbtn}>
                        <BUTTON onClick={handleDisplay} className={button} >Row</BUTTON>
                        <BUTTON onClick={handleDisplay2} className={button2}>Column</BUTTON>
                    </DISPLAY>
                </CONTAINER2>


                <CONTAINER3 className={display}>
                    <DIV1>Shape 1</DIV1>
                    <DIV1>Shape 2</DIV1>
                    <DIV1>Shape 3</DIV1>

                </CONTAINER3>
            </CONTAINER1>
     
      
        </DIV>
    )
}

export default Lesson1;


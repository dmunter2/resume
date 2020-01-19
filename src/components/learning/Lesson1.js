import React, {useState} from 'react';
import Style from 'styled-components';


const DIV = Style.div`
background-color: #1F2020;
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 2%; 
height: 100%;
`



const SHAPE = Style.div`
height: 200px;
width: 250px;
border: 1px solid red;
`

const DIV1 = Style.div`
height: 40px;
width: 50px;
border: 1px solid red;
margin: 1%;
`
const CONTAINER = Style.div`
display: flex;
width: 250px;

flex-direction: row;
justify-content: space-between;
`
const DISPLAY = Style.div``


const BUTTON = Style.button`
width: 70px;
height: 40px;
`


const H1 = Style.h1`
color: #E4E4E2;
`

const H4 = Style.h4`
color: #E4E4E2;
`

const DIVIDE = Style.div`
width: 50%;
`

const DIVIDE2 = Style.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: end;
`





const Lesson1 = () => {

    const [display, setDisplay] = useState("plain")

    const [button, setButton] = useState('plain-btn')

    const [button2, setButton2] = useState('button-design')

    const [addDisplay, setaddDisplay] = useState('no-display')

    const [toggleButton, setToggleButton]= useState('plain-btn')


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
        if(addDisplay = 'no-display'){
            return setaddDisplay('add-display')
        } else {
            return setaddDisplay('no-display')
        }
        

    }

    return (
        <DIV>

            <DIVIDE>
                <H1>Early On</H1>
                <H4>One of the first things I learned at Lambda School was how to use
                    flexbox. I loved the feeling of creating something and then having control
                    on that contents display through out the page regardless of the screen size
                </H4>
            </DIVIDE>


            <DIVIDE2>
                <CONTAINER>
                    <DISPLAY>
                        <BUTTON onClick={handleDisplay3} className={toggleButton}>Display</BUTTON>
                    </DISPLAY>

                    <DISPLAY>
                        <BUTTON onClick={handleDisplay} className={button} >Row</BUTTON>
                        <BUTTON onClick={handleDisplay2} className={button2}>Column</BUTTON>
                    </DISPLAY>

             
                </CONTAINER>

                <SHAPE className={display} className={addDisplay}>
                    <DIV1>Shape 1</DIV1>
                    <DIV1>Shape 2</DIV1>
                    <DIV1>Shape 3</DIV1>

                </SHAPE>
            </DIVIDE2>
     
      
        </DIV>
    )
}

export default Lesson1;


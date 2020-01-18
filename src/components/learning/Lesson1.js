import React, {useState} from 'react';
import Style from 'styled-components';

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
const CONTAINER = Style.div``

const BUTTON = Style.button`
width: 70px;
height: 40px;
`


const Lesson1 = () => {

    const [display, setDisplay] = useState("plain")

    const [button, setButton] = useState('plain-btn')

    const [button2, setButton2] = useState('button-design')


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


    return (
        <div>
            <h1>My First Lesson</h1>
            <h4>One of the first things I learned at Lambda School was how to use 
                flexbox. I loved the feeling of creating something and then having control
                on that contents display through out the page regardless of the screen size
            </h4>
            <CONTAINER>
                <BUTTON onClick={handleDisplay} className={button} >Row</BUTTON>
                <BUTTON onClick={handleDisplay2} className={button2}>Column</BUTTON>
            </CONTAINER>

            <SHAPE className={display}>
                <DIV1>Shape 1</DIV1>
                <DIV1>Shape 2</DIV1>
                <DIV1>Shape 3</DIV1>

            </SHAPE>
        </div>
    )
}

export default Lesson1;


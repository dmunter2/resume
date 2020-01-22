import React, {useState} from 'react';
import Style from 'styled-components';
import map1 from './map.PNG'
import foreach from './foreach1.PNG'
import reduce from './reduce.PNG'
import filter from './filter1.PNG'




const DIV = Style.div`
background-color: #657786;
padding: 2%;
padding-top: 4%;
padding-bottom: 4%;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 100%;

@media (max-width: 840px) {
  display: flex;
flex-direction: column-reverse;
justify-content: center;
}


`
const DIV1 = Style.div``

const DIV2 = Style.div`
height: 350px;
width: 380px;
background-color: #F5DDC5;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);


`

const DIV3 = Style.div`
width: 380px;
height: 210px;
background-color: #1F2020;
display: flex;
flex-direction: column;
align-items: center;

`

const DIV5 = Style.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`

const DIV6 = Style.div`
`

const BUTTON = Style.button`
width: 95px;
// background-color: #F5DDC5;
color: black;
border: none;
height: 30px;
`




const H1 = Style.h1`
color: #E4E4E2;
`
const ELEMENT1 = Style.div`
`


const ELEMENT2 = Style.div``
const ELEMENT3 = Style.div``
const ELEMENT4 = Style.div``
const DIV8 = Style.div``

const H5 = Style.div`
margin-top: 20px
display: flex;
flex-direction: column;
justify-content: center;
color: #E4E4E2;
font-weight: 500;

font-family: 'Lato', sans-serif;



`
const IMG = Style.img`
height: 90px;
width: 300px;
margin-top: 15px;
border-radius: 5px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

`



const DIV10 = Style.div`
text-align: center;
font-size: 20px;
margin-top: 20px;
color: white;
`

const N1 = Style.div``

const DIV11 = Style.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: end;
@media (max-width: 840px) {
  width: 100%;
}


`

const H7 = Style.h5`
width: 94%;
font-family: 'Source Sans Pro', sans-serif;
font-size: 15px;

`


const SPAN = Style.div`
// width: 46%;
`



const H4 = Style.h4`
color: #E4E4E2;
`
const H9 = Style.h4`
color: #E4E4E2;
@media (max-width: 600px) {
  display: none;
}

`
const MAIN = Style.div`
@media (max-width: 840px) {
  display: flex;
justify-content: center;
margin-top: 30px;
margin-bottom: 30px;
}
`





const Lesson2 = () => {

    const [show1, setShow1] = useState('no-show')
    const [show2, setShow2] = useState('no-show')
    const [show3, setShow3] = useState('no-show')
    const [show4, setShow4] = useState('no-show')



    const clickHandler = e => {
        e.preventDefault();
        let buttons = document.querySelectorAll('.hover-btn')


        buttons.forEach((e) => {
            e.style.backgroundColor = '#F5DDC5';
            e.style.color = 'black';

        })


        if(e.target.classList[3] === 'map'){
            setShow1('show')
            setShow2('no-show')
            setShow3('no-show')
            setShow4('no-show')
        } else if (e.target.classList[3] === 'foreach') {
            setShow1('no-show')
            setShow2('show')
            setShow3('no-show')
            setShow4('no-show')
        } else if (e.target.classList[3] === 'filter') {
            setShow1('no-show')
            setShow2('no-show')
            setShow3('show')
            setShow4('no-show')
        } else if (e.target.classList[3] === 'reduce') {
            setShow1('no-show')
            setShow2('no-show')
            setShow3('no-show')
            setShow4('show')
        }


        e.target.style.backgroundColor = '#1F2020';
        e.target.style.color = 'white';



    }



    return (
        <DIV>




            <MAIN>

                <DIV2>

                    <DIV3>
                        <DIV5>
                            <BUTTON onClick={clickHandler} className='hover-btn map'>.map</BUTTON>
                            <BUTTON onClick={clickHandler} className='hover-btn foreach'>.forEach</BUTTON>
                            <BUTTON onClick={clickHandler} className='hover-btn filter'>.filter</BUTTON>
                            <BUTTON onClick={clickHandler} className='hover-btn reduce'>.reduce</BUTTON>
                        </DIV5>

                        <DIV6>

                            <ELEMENT1 className='testcode ' className={show1} >
                                <H5>

                                    <IMG src={map1} />
                                    <DIV10>Output: [6,7,9,10,11,12,13,10,9,7] </DIV10>

                            
                                </H5>
                                
                            </ELEMENT1>

                            <ELEMENT2 className='test-code' className={show2}>
                                    <IMG src={foreach} />

                                <DIV10>Output: [2,4,6,8,10,12,152] </DIV10>

                            </ELEMENT2>

                            <ELEMENT3 className='test-code' className={show3}>
                                    <IMG src={filter} />

                                <DIV10>Output: [5,6,76] </DIV10>

                            </ELEMENT3>

                            <ELEMENT4 className='test-code' className={show4}>
                                    <IMG src={reduce} />

                                <DIV10>Output: [200] </DIV10>

                            </ELEMENT4>

                        </DIV6>
                    </DIV3>
                    <DIV8>
                        <N1 className={show1} >
                            <H7>Array methods were one of the first things we covered when going over Javascript. Knowing when and
                                    how to use different array  methods turned out to be a good base of Javascript knowledge to build off of. </H7>
                        </N1>

                        <N1 className={show2} >
                            <H7>After a few weeks of using online Javascript editors we started to implement these new methods into Class Components and Functional Components in React.  </H7>
                        </N1>

                        <N1 className={show3} >
                            <H7>React is a component based UI library for Javascript And was used to make this website you are currently on. Most of my projects were made using React.</H7>
                        </N1>

                        <N1 className={show4} >
                            <H7>React has been fun to learn. Although most of my projects were made in React I am willing to learn new languages or libraries. One of the things i've learned at Lambda School was how to learn. </H7>
                        </N1>


                    </DIV8>




                </DIV2>
            </MAIN>


            <DIV11>
                <SPAN>
                    <H1> Digging into Javascript</H1>

                    <H4>Learning Javascript helped me connect a lot of dots when it comes to functionality. The first few sections covered Functions, Control Flow, Data Structures, Classes, and Callbacks. Once we
                    got the basic principles down we began to implement them in Functional Components and Class Components.</H4>
                    <H9 className='js-example'>
                        Ive attached a Countdown application I created using the Date object. This project helped solidify my knowledge on Event Handlers in Javascript. 
                    </H9>
                </SPAN>

            </DIV11>




 

        </DIV>

    )
}

export default Lesson2;

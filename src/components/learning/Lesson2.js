import React, {useState} from 'react';
import Style from 'styled-components';
import map1 from './map.PNG'
import map2 from './map2.PNG'





const DIV = Style.div`
background-color: #657786;
padding: 2%;
padding-top: 4%;
padding-bottom: 4%;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 100%;
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


const BUTTON1 = Style.button`
background-color: #1F2020;
border: 2px solid  #1F2020;
height: 30px;
width: 90px;
color: white;
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

`
const IMG = Style.img`
height: 80px;
width: 290px;
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


        if(e.target.classList[3] == 'map'){
            setShow1('show')
            setShow2('no-show')
            setShow3('no-show')
            setShow4('no-show')
        } else if (e.target.classList[3] == 'foreach') {
            setShow1('no-show')
            setShow2('show')
            setShow3('no-show')
            setShow4('no-show')
        } else if (e.target.classList[3] == 'filter') {
            setShow1('no-show')
            setShow2('no-show')
            setShow3('show')
            setShow4('no-show')
        } else if (e.target.classList[3] == 'reduce') {
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
                            <H1>This is for the foreach function</H1>
                        </ELEMENT2>

                        <ELEMENT3 className='test-code' className={show3}>
                            <H1>This is for the filter function</H1>
                        </ELEMENT3>

                        <ELEMENT4 className='test-code' className={show4}>
                            <H1>This is for the reduce function</H1>
                        </ELEMENT4>

                    </DIV6>
                </DIV3>
                <DIV8>
                    <N1 className={show1} >
                        <h1>This will be a new MAP</h1>
                    </N1>

                    <N1 className={show2} >
                        <h1>This will be a new FOREACH</h1>
                    </N1>

                    <N1 className={show3} >
                        <h1>This will be a new FILTER</h1>
                    </N1>

                    <N1 className={show4} >
                        <h1>This will be a new REDUCE</h1>
                    </N1>


                </DIV8>




            </DIV2>

            <DIV11>
                <H1>Digging into Javascript</H1>
                <h5>After creating many website templates with HTML and CSS I was ready for
                    the life and blood of many websites; Javascript.
                </h5>
                <h5>After we learned the basics we covered how to implement them in functions </h5>
                <h5>Functions are the foundation for all web interactions</h5>
                <h5>It was here where i was able to complete projects like this</h5>
            </DIV11>



 

        </DIV>

    )
}

export default Lesson2;

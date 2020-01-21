import React, {useState} from 'react';
import Style from 'styled-components';


const DIV = Style.div`
padding: 2%;
// padding-top: 4%;
padding-bottom: 4%;
display: flex;
flex-direction: row;
justify-content: space-between;

@media (max-width: 840px) {
  display: flex;
flex-direction: column-reverse;
justify-content: center;
}


`

const DIV1 = Style.div`
display: flex;
flex-direction: column;
align-items: end;
width: 50%;

@media (max-width: 840px) {
  width: 100%;
  display: flex;
  align-items: baseline;
}

`
const DIV2 = Style.div`
height: 350px;
width: 380px;
background-color: #1f2020;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
margin: 3%;


`
const DIV4 =  Style.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 2%;
`
const DIV3 = Style.div`
margin-top: 25px;
`
const BUTTON = Style.button`

`

const H10 = Style.h5`
border: 1px solid #535150;
width: 220px;
margin: 2%;
padding: 2%;
border-radius: 5px;
color: white;
`
const CONTAIN = Style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DIV11 = Style.div``
const H11 = Style.h1`
color: white;
font-size: 20px;
text-align: center;
padding-bottom: 2%;
border-bottom: 2px solid  #ebebe3;
`

const H1 = Style.h1`
color: #1f2020;

`
const H4 = Style.h4`
color: #1f2020;
`
const MAIN = Style.div`
@media (max-width: 840px) {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
`

const Lesson4 = ({name, food1, food2, food3}) => {

    const [state, setState] = useState('no-show-state')


    const clickHandler = e => {
        e.preventDefault();
        setState('show-state')
    }
    const clickHandler1 = e => {
        e.preventDefault();
        setState('no-show-state')
    }

    return (
        <DIV>
            
        <MAIN>

                <DIV2 >
                    <DIV11>
                        <H11>Receive State</H11>
                    </DIV11>
                    <DIV4>
                        <BUTTON className='btn' onClick={clickHandler}>Get State</BUTTON>
                        <BUTTON className='btn' onClick={clickHandler1}>Delete State</BUTTON>
                    </DIV4>
                

                    <DIV3 className={state}>
                        <CONTAIN>
                            <H10>Name: {name.user}</H10>
                            <H10>Breakfast: {name.food1}</H10>
                        </CONTAIN>
                        <CONTAIN>
                            <H10>Lunch: {name.food2}</H10>
                            <H10>Supper: {name.food3}</H10>
                        </CONTAIN>
                    </DIV3>
            



                </DIV2>
            </MAIN>

            <DIV1>
               <H1>Transferring State</H1>
               <H4>As you can see, the state was successfully delivered into this second component. Passing state is fun, and I love the opportunities it gives me when interacting with a user. In React, there are a few different ways to pass down state from one component to another. I have learned Redux, Context API, and Prop Drilling. For this example I used the method of Prop Drilling.</H4>
               
            </DIV1>
        </DIV>
    )
}


export default Lesson4;

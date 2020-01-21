import React, {useState} from 'react';
import Style from 'styled-components';
import Lesson4 from './Lesson4'

const MAIN = Style.div`
background-color: #f9f6ef;
`
const H5 = Style.h5`
`
const H1 = Style.h1`
color: white;
font-size: 20px;
text-align: center;
padding-bottom: 2%;
border-bottom: 2px solid  #ebebe3;

`
const DIV = Style.div`
padding: 2%;
padding-top: 4%;
padding-bottom: 1%;
display: flex;
flex-direction: row;
justify-content: space-between;

@media (max-width: 800px) {
  display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

}


`
const DIV2 = Style.div`
width: 50%;

@media (max-width: 800px) {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;

}


`
const DIV3 = Style.div`
display: flex;
flex-direction: column;
align-items: end;
width: 50%;
@media (max-width: 800px) {
  width: 100%;
  display: flex;
flex-direction: column;
align-items:center;
  margin-bottom: 40px;



}

`
const FORM = Style.form`
height: 350px;
width: 380px;
background-color: #1f2020;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
margin: 3%;
`
const INPUT  = Style.input`
width: 220px;
border-radius: 6px;
border: 1px solid #535150;
height: 30px;
margin: 2%;



`


const SPAN = Style.div``
const H4 = Style.h4`
color: #1f2020;

`
const H2 = Style.h1`
color: #1f2020;
font-size: 25px;

`
const DIV5 = Style.div`
height: 200px;

`
const BUTTON = Style.button``
const DIV8 = Style.div`
height: 200px;
`

const DIV6 = Style.div`
display: flex;
flex-direction: row;
justify-content: space-around;
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

const Lesson3 = () => {

    const [name, setName] = useState({
        user: '',
        food1: '',
        food2: '',
        food3: ''
    })

    const [display, setDisplay] = useState('show-state')
    const [display1, setDisplay1] = useState('no-show-state')


    const changeHandler = e => {
        e.preventDefault();
        setName({
            ...name,
            [e.target.name]: e.target.value
        })

    }

    const changeShow1 = e => {
        e.preventDefault();
        setDisplay('no-show-state')
        setDisplay1('show-state')

    }

    const changeShow2 = e => {
        e.preventDefault();
        setDisplay('show-state')
        setDisplay1('no-show-state')
    }



    return(
        <MAIN>


        <DIV>
                <DIV2>
                    <H2>State Management</H2>

                    <H4>One of Reacts central principles is the management of the current state. The concept of state took some extra time and studying for me to grasp. 
                Once I did it changed everything and enabled me to do so much more with any application I create. Go ahead and enter some information information
                in and I will pass that state onto the next section i've created.</H4>
                </DIV2>



            <DIV3>
                <FORM >
                    <H1>Lets work with state!</H1>
                        <DIV8 className={display}>
                            <INPUT
                               
                                type='text'
                                placeholder='Name'
                                name='user'
                                onChange={changeHandler}
                            />
                            <INPUT
                           
                                type='text'
                                placeholder='Favorite Breakfast Item'
                                name='food1'
                                onChange={changeHandler}
                            />
                            <INPUT
                              
                                type='text'
                                placeholder='Favorite Lunch Item'
                                name='food2'
                                onChange={changeHandler}
                            />
                            <INPUT
                               
                                type='text'
                                placeholder='Favorite Supper Item'
                                name='food3'
                                onChange={changeHandler}
                            />
                    </DIV8>
          

                        <DIV5 className={display1}>
                            <CONTAIN>
                                <H10>Name: {name.user}</H10>
                                <H10>Breakfast: {name.food1}</H10>
                            </CONTAIN>
                            <CONTAIN>
                                <H10>Lunch: {name.food2}</H10>
                                <H10>Supper: {name.food3}</H10>
                            </CONTAIN>
                        </DIV5>


                        <DIV6>
                            <BUTTON className='btn' onClick={changeShow1}>Submit</BUTTON>
                            <BUTTON className='btn' onClick={changeShow2}>Edit</BUTTON>
                        </DIV6>

                      





                </FORM>
             





            </DIV3>

        </DIV>



        <Lesson4 name={name}/>
        </MAIN>

    )
}


export default Lesson3;



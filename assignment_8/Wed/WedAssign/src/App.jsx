import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import upper, {text1,text2, text3} from "./file1";
import obj,{males,females} from './file2';
import './App.css'
import MultiWelcome from './file3';
import JokeComponent from './components/JokeComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Ex 1</h2>
    <p>{upper("please uppercase me")}</p>
    <p>{text1}</p>
    <p>{text2}</p>
    <p>{text3}</p>

    <h2>Ex 2</h2>
    <p>{firstName}</p>
    <p>{email}</p>

    <h2>Ex 3</h2>
    <MultiWelcome/>

    <h2>Ex 4</h2>
    <JokeComponent/>



    

    </>
  )
}

const person = obj;
const {firstName, email} = person;
const {gender,lastName} = person;

console.log(...males);
console.log(...females);

const personV2 = {email, firstName, friends:[...males,...females], gender, lastName, phone:123456};

console.log(personV2);

export default App

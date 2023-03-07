import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MyButton'
import MyProfile from './components/Myprofile'


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Sasikarn")
  const [ifTrue, setIfTrue] = useState(true);

const user = {
  firstname:"Sasikarn",
  lastname:"Lerdpipatkit",
  imgPic : "https://img.pptvhd36.com/thumbor/2022/01/26/771eebf1b8.jpg"
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

function handleIncreaseClick(){
  setCount(count+1)
}

function handleDecreaseClick(){
  setCount(count-1)
}

  return (
    <>
      <h1 style={{color:"blue", border:"1px solid black"}}>Welcome to my app</h1>
      <MyProfile data={user} />
      <p>{count}</p>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <p>{name}</p>
      {/* <p>My name is {user.firstname} {user.lastname}</p> */}
      {/* <img src={user.imgPic} width="150" height="100"></img> */}
      <MyButton/>
      {ifTrue ? "Yes, it's true" : "No, it's false"}
      <ul>
        {products.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App

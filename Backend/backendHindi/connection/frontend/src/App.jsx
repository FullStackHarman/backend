import { useEffect, useState } from 'react'
import axios from 'axios'



function App() {
  const [jokes,setjokes]=useState([]);
  useEffect(()=>{axios.get('/api/jokes')
  .then((response)=>{setjokes(response.data)})
  .catch((errir)=>{
    console.log(error)
  })

},[])

  return (
   <>
   <h1> Top five Funny Jokes Developed By Harman On this Monday 13th April 2021 at 10:00 AM </h1>
   <p> Number Of jokes : {jokes.length}</p>
   {jokes.map((joke,index)=>(
    <div key={joke.id}>
     <h3>{joke.title}</h3>
     <p>{joke.content}</p>
    </div>

   ))}

 
   
   
   
   </>
  )
}

export default App

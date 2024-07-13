import React, { useEffect, useState } from 'react'
import "./CardList.css"
const CardList = () => {
const [data, setData]=useState([])
const [tick, setTick]=useState(false)
useEffect(()=>{

    fetch('https://api9.parentune.com/content/v2/dailyfocus', {
        method: 'GET',
        headers: {
          'accept': 'application/json, text/plain, /',
          'accept-language': 'en-US,en;q=0.9',
          'authtoken': '9467c5b4e290227a2a270f4a1ec2a37643b4a5dfd90a993b4e6ceb61ea0d5b5a',
          'instanceid': 'c4b50b993092ab3ed5f35ad684f82b4e6d081a4ed65c49902d80dde82183057a',
          'lang': 'en',
          'origin': 'https://www.parentune.com',
          'priority': 'u=1, i',
          'referer': 'https://www.parentune.com/',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
          'userid': '3781928'
        }
      })
        .then(response => response.json())
        .then(data => {
            console.log(data.data.content)
      setData(data.data.content)
        })
        .catch(error => console.error('Error:', error));
      
},[])


const handleClick=()=>{
let checked=setTick(!true)
}
  return (
    <div>
      {data?.map((el)=>
      <div >
        {el.data?.map((elm)=>
        <div onClick={handleClick} className='card-container'>
            <div>
                 <img src={elm.
thumb} alt="image" /> 
            </div>
           
      <div className='details'>
          <h5>{elm.title}</h5>
        
      </div>
 <div>

 </div>
        </div>
        
        )}
     

    </div>
    )
      }

    </div>
  )
}

export default CardList

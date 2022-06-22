import Person from '@mui/icons-material/Person';
import React, { useState } from 'react'
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name : "elon musk",
            url : "https://en.wikipedia.org/wiki/File:Elon_Musk_Royal_Society_(crop2).jpg"
        }
    ])

  return <div className="tindercards">
    {people.map((Person) => (
        <h1>{Person.name}</h1>
    ))}

    </div>
  
}

export default TinderCards
import React, {useEffect, useState} from 'react';
import axios from 'axios';//

import {Atom} from 'react-loading-indicators';

function GitHub(){

    const[data, setData] = useState([]);

    const[searchTerm, setSearchTerm]=useState("greg")

    const[isLoading, setIsLoading] = useState(false);

useEffect(()=>{
    getData();
},[searchTerm])

const getData = async() => {

    const res = await


    axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
    
        setData(res.data.items);
        setIsLoading(false);
    
}

const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    getData();

}

const listUsers=data.map((user)=>
    <di>
        <br/>
        -----------------------
        <br/>
        <a href={user.html_url}>
            <img 
                width={64} 
                height={64}
                className="mr-3"
                src={user.avatar_url}
                alt="Generic placeholder"
                />
        </a>
        <h5>Login: {user.login}</h5>
        <p>Id: {user.id}</p>
        
        
</di>

);


return(
    <div>
        <form
        onSubmit={handleSubmit}>
            <input type="text"
                onChange={event=>
                    setSearchTerm(event.target.value)}
                />

        </form>

            GitHub Users Results

            {isLoading && 
                
                <div>dogs

<Atom color="#32cd32" size="medium" text="" textColor="" />
                </div>
  }
        {listUsers}
    </div>
);


}

export default GitHub;





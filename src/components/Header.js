import React, { useState } from 'react';

let navItems = ['Home', 'About', 'Service', 'Contact'];

const App = () => {
    const [homepage, setHomepage] = useState(false);

    const menuHandler = (index) => {
        if(index === 0) {
            setHomepage(true);
        }
    }
    return( 
    <>
        <div className="w-full flex items-center fixed top-0 bg-red-400 text-white">
            {
                navItems.map((nav, index) => (
                    <li key={index} onClick={()=>menuHandler(index)} className="list-none hover:bg-white hover:text-red-400 py-3 px-6" >{nav}</li>
                ))
            }
            homepage && <div className="w-full h-screen bg-green-400 flex items-center">
                <h1>homepage</h1>
            </div>
        </div>
    </> 
    )
}

export default App;
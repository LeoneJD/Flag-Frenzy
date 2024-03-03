import React, { useEffect, useState } from 'react';


const Flags = ({ selectedContinent }) => {
    const[info, setInfo]= useState([])
    const [randomCountry, setRandomCountry] = useState(null);
    const [randomCountry2, setRandomCountry2] = useState(null);
    const [randomCountry3, setRandomCountry3] = useState(null);
    const [randomCountry4, setRandomCountry4] = useState(null);
    const [randomName, setRandomName] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/region/${selectedContinent}?fields=name,flags`);
                const data = await response.json();
                console.log(data);
                chooseRandomCountry(data);
                chooseRandomCountry2(data);
                chooseRandomCountry3(data);
                chooseRandomCountry4(data);
                setInfo(data)
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedContinent]);
    console.log (info)
    if(info.length > 1)
{
    console.log (info[0].flags.png)
}    

const chooseRandomCountry = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomCountry(data[randomIndex])
}
const chooseRandomCountry2 = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomCountry2(data[randomIndex]);
}
const chooseRandomCountry3 = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomCountry3(data[randomIndex]);
}
const chooseRandomCountry4 = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomCountry4(data[randomIndex]);
}

function name() { 
    
    //randomCountry.name.common
    //randomCountry2.name.common
    let nameList = []
    nameList.push(randomCountry.name.common);
    nameList.push(randomCountry2.name.common);
    nameList.push(randomCountry3.name.common);
    nameList.push(randomCountry4.name.common);
    console.log(nameList)

}
if(randomCountry){
name();
}
    return (
        <div>
            {/* Display Flags component content here */}
            <h1>Random Country</h1>
        {randomCountry && (
        <div>
            <h2>{randomCountry.name.common}</h2>
            <button><img src={randomCountry.flags.png} alt="" /></button>
            <button><img src={randomCountry2.flags.png} alt="" /></button>
            <button><img src={randomCountry3.flags.png} alt="" /></button>
            <button><img src={randomCountry4.flags.png} alt="" /></button>

        </div>
        )}
        </div>
    );
};

export default Flags;
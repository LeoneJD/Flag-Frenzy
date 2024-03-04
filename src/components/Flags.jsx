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
                console.log(selectedContinent);
                const nameList = []
                nameList.push(chooseRandomCountry(data));
                nameList.push(chooseRandomCountry2(data));
                nameList.push(chooseRandomCountry3(data));
                nameList.push(chooseRandomCountry4(data));
                pickRandomCountryName(nameList)
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
    return data[randomIndex].name.common
}
const chooseRandomCountry2 = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomCountry2(data[randomIndex]);
    return data[randomIndex].name.common
}
const chooseRandomCountry3 = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomCountry3(data[randomIndex]);
    return data[randomIndex].name.common
}
const chooseRandomCountry4 = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomCountry4(data[randomIndex]);
    return data[randomIndex].name.common
}

const pickRandomCountryName = (nameList) => {
    const randomIndex = Math.floor(Math.random() * nameList.length);
    setRandomName(nameList[randomIndex])
}

return (
    <div>
        {/* Display Flags component content here */}
        <h1>Guess the Flag</h1>
    {randomCountry && (
    <div>
        <h2>Which flag does this country belong to?</h2>
        <h2>{randomName}</h2>
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
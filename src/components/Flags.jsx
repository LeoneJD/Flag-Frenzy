import React, { useEffect } from 'react';

const Flags = ({ selectedContinent }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/region/${selectedContinent}?fields=name,flags`);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedContinent]);

    return (
        <div>
            {/* Display Flags component content here */}
        </div>
    );
};

export default Flags;

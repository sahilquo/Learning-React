import { useState } from "react";

const Home = () => {

    const [firstName, setFirstName] = useState('Sahil');

    const handleClick = (e) => {
        setFirstName('Parag');
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{firstName}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;
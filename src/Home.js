const Home = () => {

    const handleClick = (e) => {
        alert(`Hello Sahil!`);
        console.log(e);
    }

    const handleClickAgain = (firstName, e) => {
        alert(`Hello ${firstName}`);
        console.log(e.target);
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Mario', e)}>Click Me Again</button>
        </div>
    );
}

export default Home;
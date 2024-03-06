import ContinentSelector from '../components/ContinentSelector.jsx';

const LandingPage = ({ counter, score, setScore, setCounter }) => {

    return (
    <>

        <h2>Let's see your knowledge of country flags! </h2>
        <div>
            <ContinentSelector setScore={setScore} setCounter={setCounter} score={score} counter={counter}/>
        </div>

    </>
    )
}

export default LandingPage;

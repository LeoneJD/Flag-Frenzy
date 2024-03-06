import ContinentSelector from '../components/ContinentSelector.jsx';
import { motion } from 'framer-motion';

const LandingPage = ({ counter, score, setScore, setCounter }) => {

    return (
    <>

        <motion.h2 
            whileHover={{ scale: 1.6 }} 
        >
            Let's see your knowledge of country flags!
        </motion.h2>
        <div>
            <ContinentSelector setScore={setScore} setCounter={setCounter} score={score} counter={counter}/>
        </div>

    </>
    )
}

export default LandingPage;

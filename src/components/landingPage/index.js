
import './index.css';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

import { useState, createContext } from 'react';


const ThemeContext = createContext('light');

// Landing Page Component
const LandingPage = () => {

    const [theme, setTheme] = useState('light');

    return (

        <ThemeContext.Provider value={theme}>
            <section className="flex landing__page text-white" >
                <LeftSection theme={theme} />
                <RightSection theme={theme} setTheme={setTheme} />
            </section>
        </ThemeContext.Provider>
    );
}


export default LandingPage;

import './index.css';
import LeftSection from './LeftSection';
import RightSection from './RightSection';


// Landing Page Component
const LandingPage = () => {
    return (
        <section className="flex landing__page text-white" >
            <LeftSection />
            <RightSection />
        </section>
    );
}


export default LandingPage;
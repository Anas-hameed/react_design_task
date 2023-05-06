
import Icons from '../../../media/images/Icons.png';

import './index.css';

// Right Section Design Element Goes Here
const RightSection = () => {

    return (
        <div className='right__side'>
            {/* toogle btn */}
            <div className="toggler__section flex item-center justify-end">
                <p>Light</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p>Dark</p>
            </div>

            {/* Image Section */}
            <div className='image__section'>
                <p>Share</p>
                <img src={Icons} alt='icons' />
            </div>

            {/* Guest Speaker Section */}
            <div className='speaker__section'>
                <div>

                    <h4>GUESTS</h4>
                    <div className='flex speaker'>
                        <div className='circle flex item-center'>
                            <span>L</span>
                        </div>
                        <div className='flex flex-col  justify-center'>
                            <p>Lisa Alivin</p>
                            <p className='text-gray p1'>Cofounder, Jea</p>
                        </div>

                    </div>

                    {/* speaker 2 */}

                    <div className='flex speaker'>
                        <div className='circle flex item-center'>
                            <span>J</span>
                        </div>
                        <div className='flex flex-col  justify-center'>
                            <p>Jenny Pick</p>
                            <p className='text-gray p1'>Head of Education, Jea</p>
                        </div>

                    </div>

                    {/* Speaker 3 */}
                    <div className='flex speaker'>
                        <div className='circle flex item-center'>
                            <span>P</span>
                        </div>
                        <div className='flex flex-col  justify-center'>
                            <p>Peter Scott</p>
                            <p className='text-gray p1'>Founder, Jea</p>
                        </div>
                    </div>
                    <h4 className='host__heading'>HOSTED BY</h4>
                    <div className='flex speaker'>
                        <div className='circle flex item-center'>
                            <span>J</span>
                        </div>
                        <div className='flex flex-col  justify-center'>
                            <p>Josh Jacab</p>
                            <p className='text-gray p1'>Educator, Web</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );

}

export default RightSection;
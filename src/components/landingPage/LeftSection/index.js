import EventForm from '../Form';
import './index.css';



// Left Section Design Element Goes Here
const LeftSection = ({theme}) => {
    return (
        <div className={`left__side flex justify-end${theme==='dark'?'theme_dark_left':'theme_light_left'}`}>

            <div>

                <p className='text-gray left__date'>March 17, 2021 12:00 </p>
                <h3 className='mt-2 left__heading'>The help of Argumented Reality and Holograms</h3>
                <p className='text-gray mt-2 left__details'>Use Augmented Realuty to keep students engaged and provide detailed explantions of models and course materials. In 3D, AR Lab, students can pinch, zoom, and rotate equipment related to the course, for a fully immensive learning experience</p>


                {/* The inputs Forms  */}
                <EventForm />



            </div>


        </div>
    );

}

export default LeftSection;
import './index.css';
const EventForm = () => {
    return (
        <form className='form__container'>
            {/* Header of Form  */}
            <h3 className='event__heading'>Join the event</h3>

            {/* Inputs field */}
            {/* Name Container */}
            <div className='flex justify-between'>
                <div className='flex flex-col' >
                    <label>First Name</label>
                    <input type='text' placeholder='Enter you first name ' />
                </div>
                <div className='flex flex-col'>
                    <label>Last Name</label>
                    <input type='text' placeholder='Enter your last name' />
                </div>
            </div>

            {/* Email Container */}
            <div className='flex justify-between'>
                <div className='flex flex-col' >
                    <label>Business email</label>
                    <input type='email' placeholder='Enter you email' />
                </div>
                <div className='flex flex-col'>
                    <label>Title</label>
                    <input type='email' placeholder='Enter you job title?' />
                </div>
            </div>


            {/* Company details */}
            <div className='flex justify-between'>
                <div className='flex flex-col' >
                    <label>Company Name</label>
                    <input type='text' placeholder='Where do you work?' />
                </div>
                <div className='flex flex-col'>
                    <label>Company Size</label>
                    {/* type select with option */}
                    <select>
                        <option value='Select' selected disabled>Select</option>
                        <option value='1-100'>1-100</option>
                        <option value='101-500'>101-500</option>
                        <option value='501-1000'>501-1000</option>
                        <option value='1000+'>1000+</option>
                    </select>
                </div>
            </div>

            {/* Text Area */}
            <div className='flex flex-1'>
                <div className='flex flex-col flex-1' >
                    <label>What are you hoping to learn about?</label>
                    <textarea rows={4} placeholder='where do you work?' />

                </div>
            </div>

            <div className='flex item-center'>
                <input type='checkbox' />
                <label className='text-grey'>I would like to receive emails about future webinars</label>
            </div>

            {/* Submit Button */}
            <button className='evt__btn'>Register for this event</button>
        </form>
    );
}

export default EventForm;
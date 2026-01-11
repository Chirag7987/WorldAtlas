import React from 'react'

const Contact = () => {
    const handleSumbit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (
        <section className='section-contact'>
            <h2 className='container-title'>Contact Us</h2>
            <div className="contact-wrapper container">
                <form action={handleSumbit}>
                    <input
                        type="text"
                        className='form-control'
                        required
                        autoComplete='false'
                        placeholder='enter your name'
                        name='username'
                    />
                    <input
                        type="email"
                        className='form-control'
                        required
                        autoComplete='false'
                        placeholder='enter your email'
                        name='email'
                    />
                    <textarea
                        name="message"
                        className='form-control'
                        rows="5"
                        placeholder='enter your message'
                        required
                    ></textarea>
                    <button type='submit' vlaue="send">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
import React, {useState} from "react";

import { validateEmail } from "../utils/helpers";

function ContactForm() {
    const [formState, setFormState] = useState ({name:'', email:'', message:''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message} = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your Email is invalid.');
            }else{
                setErrorMessage('');
            }
        }else{
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`);
            }else{
                setErrorMessage('');
            }
        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    };
    const [state,setState]=useState(true);
    let LIurl="www.linkedin.com/in/raymond-flaherty-07b2011bb";
    let linkedInElement= <p>No handle exists for this user!</p>;
    if(state) linkedInElement=<a href={LIurl}>LinkedIn</a>
  
    
    return(
        <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" defaultValue={email} onBlue={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
            <div>
                <h2>FIND ME!</h2>
            </div>
            <div>
                <ul>
                    <li>
                        {linkedInElement}
                    </li>
                </ul>
            
            </div>
        </section>
    )
}

export default ContactForm;
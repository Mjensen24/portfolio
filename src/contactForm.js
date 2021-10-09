import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("mdoyajag");
    if (state.succeeded) {
        return (
            <div className="thanks">
                <h1>Thank you!</h1>
            </div>
        )
    }
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Enough about me,</h2>
            <h3>Lets talk about you</h3>
            <input
                id="name"
                type="name"
                name="name"
                placeholder="Name"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder="Your message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <div className="submit-container">
                <button type="submit" disabled={state.submitting}>
                    Submit(:
                </button>
            </div>
        </form>
    );
}

export default ContactForm;

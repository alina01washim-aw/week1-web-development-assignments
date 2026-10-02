import { useState } from "react";
import Button from "./Button";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));

        setSubmitted(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>

            <div className="input-group">
                <label htmlFor="name">
                    Name
                </label>

                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="input-group">
                <label htmlFor="email">
                    Email
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="input-group">
                <label htmlFor="message">
                    Message
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <Button type="submit">
                Send Message
            </Button>

            {submitted && (
                <p className="success-message">
                    Message submitted successfully.
                </p>
            )}

        </form>
    );
}

export default Form;
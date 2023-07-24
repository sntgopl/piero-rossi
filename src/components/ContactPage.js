import React, { useState } from 'react';

const ContactPage = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xoqoqbkj', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSuccessMessage('Your form has been sent.');
        form.reset();
      } else {
        setSuccessMessage('There was an error sending your form. Please try again later.');
      }
    } catch (error) {
      setSuccessMessage('There was an error sending your form. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Contacto</h2>
      <p className='form-subtitle'>Si encuentra interés en una de estas obras, puede usted comunicarse aquí</p>
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="last-name">Apellido:</label>
        <input type="text" id="last-name" name="last-name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactPage;

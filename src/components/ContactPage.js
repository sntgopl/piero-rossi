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
        setSuccessMessage('Su solicitud ha sido enviada.');
        form.reset();
      } else {
        setSuccessMessage('Hubo un error al enviar su formulario. Por favor, inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      setSuccessMessage('Hubo un error al enviar su formulario. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="form-container">
      <div className="biography-image-bg"></div>
      <h2 className="form-title">Contacto</h2>
      <p className='form-subtitle'>Si encuentra interés en una de estas obras, puede usted comunicarse aquí:</p>
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

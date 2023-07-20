import React from 'react';
import piero from '../assets/images/piero.jpeg';

const Biography = () => {
  return (
    <div className="biography">
      <div className="biography-image-container">
        <img className="biography-image" src={piero} alt="Profile" />
      </div>
      <div className="biography-text">
        <h2>Pierossi</h2>
        <p>
        Piero Rossi pintor italiano, autodidacta sus obras no tienen tendencias puras, se recrea de forma constante y pulsa aplicaciones poco frecuentes, así el artista pasa de lo figurativo hacia lo abstracto en el año 2010, este cambio ha sido un hito importante en su trayectoria artística, permitiéndose explorar nuevas dimensiones. Su materia favorita es el oleo sobre lienzo, aunque ocasionalmente trabaja en oleo sobre tabla.
        </p>
      </div>
    </div>
  );
};

export default Biography;

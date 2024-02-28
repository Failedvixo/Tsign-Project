import React from 'react';

const RandomImage = () => {
  // Función para cargar dinámicamente todas las imágenes PNG del directorio 'images'
  const importAll = (r) => {
    return r.keys().map(r);
  };

  // Importa todas las imágenes PNG del directorio 'images'
  const images = importAll(require.context('../public/img', false, /\.png$/));

  // Obtén una imagen aleatoria del array
  const randomImage = images[Math.floor(Math.random() * images.length)];
  console.log(randomImage.default);

  return (
    <div>
      <h2>¿Qué significa esta señal?</h2>
      <img src={randomImage} alt="Imagen Aleatoria" />
    </div>
  );
};

export default RandomImage;

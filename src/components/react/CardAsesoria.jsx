import React from 'react';

export default function CardAsesoria({ asesoria }) {
  return (
    <div className="border rounded p-4 shadow mb-4">
      <h2 className="text-xl font-bold">{asesoria.titulo}</h2>
      <p>{asesoria.descripcion}</p>
      <div className="mt-2 text-sm text-gray-500">
        Publicado por: {asesoria.usuario.nombre}
      </div>
    </div>
  );
}
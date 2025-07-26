import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        {onClick && (
          <button 
            onClick={onClick}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

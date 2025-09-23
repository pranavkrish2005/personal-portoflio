import React from 'react';

interface ProjectPopupProps {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ title, description, image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img src={image} alt={title} className="w-32 h-32 object-cover rounded mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
          <p className="text-gray-700 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;

import React from "react";

interface LoadingOverlayProps {
  message: string;
  isOpaque?: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message, isOpaque = false }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpaque ? 'bg-white' : 'bg-black bg-opacity-50'} z-50`}>
      <div className="flex flex-col items-center">
        {!isOpaque && (
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4"></div>
        )}
        <p className={`${isOpaque ? 'text-black' : 'text-white'} text-lg`}>{message}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;

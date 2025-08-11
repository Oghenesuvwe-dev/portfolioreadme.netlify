import React from 'react';
import { motion } from 'framer-motion';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          ×
        </button>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vTD1M2S89DhbVgXJNPP8noY5X6Y8onE8y1OaRPRTNzAYrOc3Y0NhcmkObqKTq2RaBeEDa3dPhv_LEBt/pub?embedded=true"
          className="w-full h-full rounded-lg"
          title="Oghenesuvwe Omashone CV"
        />
      </motion.div>
    </motion.div>
  );
};

export default CVModal;
import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
                                           children = "", onClick = () => {
    }
                                       }) => {
    return (
        <motion.button layout
            onClick={onClick}
            className="p-20 gap-10 flex justify-center items-center bg-tertiary-3 text-paragraph4 text-primary-1 hover:bg-tertiary-2 transition-colors duration-300">
            {children}
        </motion.button>
    );
};

export default Button;
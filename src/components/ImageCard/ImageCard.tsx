import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";

interface ImageProps {
    image: string;
}

const ImageCard: React.FC<ImageProps> = ({image}) => {
    const [showOverlay, setShowOverlay] = useState<boolean>(false)

    return (
        <motion.div onHoverStart={() => setShowOverlay(true)} onHoverEnd={() => setShowOverlay(false)} className="relative z-10 w-[33rem] h-[27rem]">
            <AnimatePresence>
            {showOverlay && <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 0.3}}
                        exit={{opacity: 0}}
                        className="absolute z-20 inset-0 w-full h-full pointer-events-none bg-black"></motion.div>}
            </AnimatePresence>
            <img className="bg-cover w-full h-full saturate-0" src={image} alt={image}/>
        </motion.div>
    );
};

export default ImageCard;
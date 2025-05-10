import { IoMdAdd, IoMdImage } from "react-icons/io";
import React, {useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MultiImageUploadProps {
    value: File[];
    setValue: React.Dispatch<React.SetStateAction<File[]>>;
}

const MultiImageUpload: React.FC<MultiImageUploadProps> = ({ value, setValue }) => {
    const uploadRef = useRef<HTMLInputElement | null>(null);

    const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        if (files) {
            const newImages = Array.from(files);
            setValue(prevState => [...prevState, ...newImages]);
            if (uploadRef.current) {
                uploadRef.current.value = "";
            }
        }
    }

    const handleRemoveImage = (index: number) => {
        const newImages = value.filter((_, i) => i !== index);
        setValue(newImages);
    }

    return (
        <motion.div layout className="flex flex-wrap gap-10">
            <AnimatePresence mode="sync">
                {value.map((image: File, index) => (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{stiffness: 1}}
                        key={index}
                        className="p-20 text-paragraph4 w-[12rem] flex gap-10 items-center bg-primary-1 rounded-2xl border border-dashed border-quaternary-2"
                        onClick={() => handleRemoveImage(index)}>
                        <span className="text-tertiary-3"><IoMdImage /></span>
                        <span className="truncate">{image.name}</span>
                    </motion.button>
                ))}
                <input ref={uploadRef} type="file" id="upload" className="hidden" multiple onChange={handleAddImage} />
                <motion.label key="10" layout htmlFor="upload"
                       className="flex cursor-pointer p-20 hover:bg-tertiary-2 transition-colors duration-300 text-primary-1 gap-10 items-center text-paragraph4 bg-tertiary-3 rounded-2xl">
                    <span>New</span><span><IoMdAdd /></span>
                </motion.label>
            </AnimatePresence>
        </motion.div>
    );
};

export default MultiImageUpload;
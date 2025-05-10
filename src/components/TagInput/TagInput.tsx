import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

interface TagInputProps {
    tags: string[];
    setTags: (tags: string[]) => void;
    placeholder?: string;
}

const TagInput: React.FC<TagInputProps> = ({ tags, setTags, placeholder = "Add a tag" }) => {
    const [tag, setTag] = useState<string>("");
    const [showError, setShowError] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTag(e.currentTarget.value);
    };

    const addTag = () => {
        if (tag.trim()) {
            setShowError(false);
            setTags([...tags, tag.trim()]);
            setTag("");
        } else {
            setShowError(true);
            setTimeout(() => setShowError(false), 1000);
        }
    };

    const deleteTag = (indexToBeDeleted: number) => {
        setTags(tags.filter((_tag, index) => index !== indexToBeDeleted));
    };

    return (
        <div className="flex flex-wrap gap-10 text-paragraph4">
            <AnimatePresence>
                {tags.map((tag, index) => (
                    <motion.button
                        layout
                        animate={{ scale: [0, 1], opacity: [0, 1] }}
                        exit={{ scale: [1, 0], opacity: [1, 0] }}
                        className="border border-quaternary-1 bg-quaternary-5 text-quaternary-1 p-20 rounded-2xl"
                        onClick={() => deleteTag(index)}
                        key={index}
                    >
                        {tag}
                    </motion.button>
                ))}
            </AnimatePresence>

            <motion.div
                style={{ borderColor: showError ? "var(--color-tertiary3)" : "var(--color-quaternary1)" }}
                animate={showError ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
                className="flex border border-quaternary-1 text-paragraph4 overflow-clip bg-quaternary-5 text-quaternary-1 placeholder:text-quaternary-3 rounded-2xl"
            >
                <input
                    type="text"
                    value={tag}
                    onChange={handleChange}
                    className="bg-transparent p-20"
                    placeholder={placeholder}
                />
                <button
                    onClick={addTag}
                    className="bg-tertiary-3 p-20 text-primary-1 hover:bg-tertiary-2 transition-colors duration-300"
                >
                    <IoMdAdd size={24} />
                </button>
            </motion.div>
        </div>
    );
};

export default TagInput;

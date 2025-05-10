import React from "react";

interface TextAreaProps {
    name: string,
    grow: true,
    placeholder: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<Partial<TextAreaProps>> = ({
                                                        name = "", value = "",
                                                        grow = true, placeholder = "", onChange = () => {
    }
                                                    }) => {
    return (
        <textarea name={name} value={value} rows={3} placeholder={placeholder} onChange={onChange}
                  className={`flex ${grow ? 'flex-grow' : 'flex-grow-0'} focus:border-tertiary-3 resize-none border border-quaternary-2 bg-primary-1 p-20 text-paragraph4`}>
        </textarea>
    );
};

export default TextArea;
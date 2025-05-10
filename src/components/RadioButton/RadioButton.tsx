import React, {useEffect} from "react";

interface RadioButtonProps {
    value: string,
    setValue: (value: string) => void,
    choices: string[],
}

const RadioButton: React.FC<Partial<RadioButtonProps>> = ({
                                                              setValue = () => {
                                                              }, choices = [], value = ""
                                                          }) => {
    const onSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        setValue(e.currentTarget.name);
    }

    useEffect(() => {
        if (choices) {
            setValue(choices[0]);
        }
    }, []);

    const buttons: React.ReactNode[] = choices.map((choice: string, index: number) => (
        <button key={index} onClick={onSelect} name={choice}
                className={`p-20 ${choice === value ? 'bg-tertiary-3 text-primary-1' : 'bg-primary-1 text-tertiary-3'} text-start transition-colors duration-300 text-paragraph4 border border-tertiary-3`}>
            {choice}
        </button>
    ));

    return (
        <div className={`grid grid-cols-${choices.length} w-full gap-10`}>
            {buttons}
        </div>
    );
};

export default RadioButton;
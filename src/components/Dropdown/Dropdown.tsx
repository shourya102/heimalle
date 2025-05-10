import React from 'react';

interface DropdownProps {
    children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({children}: DropdownProps) => {
    const styledChildren: React.ReactNode = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement, { className: 'dropdown-item' });
        }
        return child;
    });
    return (
        <div className="">
            {styledChildren}
        </div>
    );
};

export default Dropdown;
import React from 'react';

const Button = ({children}) => {
    return (
        <div>
           <button className="btn btn-accent uppercase font-bold text-white px-[15px] py-[14px]bg-gradient-to-r from-green-400 to-blue-500">{children}</button>
        </div>
    );
};

export default Button;
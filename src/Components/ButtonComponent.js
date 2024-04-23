import React, {Component} from 'react';
const ButtonComponent = ({className, buttonName, onClickFunction}) => {

    return (
        <div>
            <button className={className} onClick={onClickFunction}>{buttonName}</button>
        </div>
    );
}

export default ButtonComponent;
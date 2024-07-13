"use client";

import React, { useState } from 'react';
import Icon from '../Icon';
import "./checkbox.scss";
import { IconId } from '@/utils/iconSpriteId';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [animationParent] = useAutoAnimate();
    const [check] = useAutoAnimate();
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label ref={animationParent} className="checkbox">
            <input 
                type="checkbox" 
                className="checkbox__input" 
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span ref={check} className="checkbox__custom">
                {isChecked && <Icon color="" width={12} height={12} id={IconId.IconNavMod} />}
            </span>
            {
                isChecked && 
                    <div className={`checkbox__image `}>
                        <Icon color='--black' width={16} height={16} id={IconId.IconNavMod} />
                    </div> 
            }
            
            <span className="checkbox__title">RPG</span>
        </label>
    );
};

export default Checkbox;
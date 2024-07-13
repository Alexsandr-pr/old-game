import React from 'react'
import SearchInput from '../ui/search-input/SearchInput';
import Title from '../ui/title/Title'

import "./left-sidebar.scss";
import Spoller from '../ui/spoller/Spoller';
import Checkbox from '../ui/checkbox/Checkbox';


const LeftSidebar = () => {
    return (
        <div className='sidebar'>
            <SearchInput/>
            <div className="left-sidebar">
                <Title title='Фильтры'/>
                <div className="spollers">
                    <Spoller title='Год выхода игры:'>
                        <Checkbox  />
                    </Spoller>
                    <Spoller title='Год выхода игры:'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, eveniet.
                    </Spoller>
                    <Spoller title='Год выхода игры:'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, eveniet.
                    </Spoller>
                    <Spoller title='Год выхода игры:'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, eveniet.
                    </Spoller>
                    <Spoller title='Год выхода игры:'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, eveniet.
                    </Spoller><Spoller title='Год выхода игры:'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, eveniet.
                    </Spoller>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar
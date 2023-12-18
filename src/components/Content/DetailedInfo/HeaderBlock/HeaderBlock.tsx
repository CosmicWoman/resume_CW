import React, {FC} from 'react';
import './HeaderBlock.scss'

interface HeaderProps{
    ru: string,
    en: string
}

const HeaderBlock:FC<HeaderProps> = (name) => {
    return (
        <div className='headerBlock'>
            <div className="headerBlock_container">
                <div className="headerBlock_content">
                    <div className="headerBlock_item">
                        {name.ru}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBlock;
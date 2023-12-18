import React, {FC} from 'react';
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import './DetailedInfo.scss'

interface nameProps {
    "name": {
        ru: string
        en: string
    }
}

const DetailedInfo: FC<nameProps> = (name) => {
    return (
        <div className="detailedInfo">
            <div className="container detailedInfo__container">
                <div className="detailedInfo__content">
                    <HeaderBlock ru={name.name.ru}
                                 en={name.name.en}/>
                    <InfoBlock/>
                </div>
            </div>
        </div>
    );
};

export default DetailedInfo;
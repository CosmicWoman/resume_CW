import React, {FC} from 'react';
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import './DetailedInfo.scss'
import {UserType} from "../../../types/userType";

const DetailedInfo: FC<UserType> = (User) => {
    return (
        <div className="detailedInfo">
            <div className="container detailedInfo__container">
                <div className="detailedInfo__content">
                    <HeaderBlock ru={User.personal_info.name.ru}
                                 en={User.personal_info.name.en}/>
                    <InfoBlock/>
                </div>
            </div>
        </div>
    );
};

export default DetailedInfo;
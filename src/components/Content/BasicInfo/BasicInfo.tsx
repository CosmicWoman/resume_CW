import React, {FC} from 'react';
import './BasicInfo.scss';
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import OtherInfo from "./OtherInfo/OtherInfo";
import {UserType} from "../../../types/userType";
import photo from '../../../static/img/ava.jpg'

const BasicInfo: FC<UserType> = (User) => {
    return (
        <div className="basic-info">
            <div className="container basic-info__container">
                <div className="basic-info__content">
                    <div className="basic-info__photo">
                        <img src={photo} alt=""/>
                    </div>
                    <PersonalInfo personal_info={User.personal_info}/>
                    <OtherInfo/>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
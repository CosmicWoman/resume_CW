import React from 'react';
import './BasicInfo.scss';
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import OtherInfo from "./OtherInfo/OtherInfo";

const BasicInfo = () => {
    return (
        <div className="basic-info">
            <div className="container basic-info__container">
                <div className="basic-info__content">
                    <PersonalInfo/>
                    <OtherInfo/>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
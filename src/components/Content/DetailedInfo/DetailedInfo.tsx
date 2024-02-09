import React, {FC} from 'react';
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import './DetailedInfo.scss'
import {UserType} from "../../../types/userType";
import {WorkExp} from "../../../types/workExp";

interface DetailedInfoType {
    User: UserType,
    Works: WorkExp[]
}

const DetailedInfo: FC<DetailedInfoType> = ({User, Works}) => {
    return (
        <div className="detailedInfo">
            <div className="container detailedInfo__container">
                <div className="detailedInfo__content">
                    <HeaderBlock ru={User.personal_info.name.ru}
                                 en={User.personal_info.name.en}/>
                    <InfoBlock educations={User.education_background}
                               works={Works}
                               projects={User.projects}/>
                </div>
            </div>
        </div>
    );
};

export default DetailedInfo;
import React, {FC} from 'react';
import './BasicInfo.scss';
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import OtherInfo from "./OtherInfo/OtherInfo";
import {UserType} from "../../../types/userType";
import photo from '../../../static/img/ava.jpg'
import {useSelector} from "react-redux";

const BasicInfo: FC<UserType> = (User) => {
    const theme = useSelector((state:any) => state.theme)

    return (
        <div className="basic-info">
            <div className="container basic-info__container">
                <div className={(theme === 'dark') ? "basic-info__content" : "basic-info__content-dark"}>
                    <div className="basic-info__photo">
                        <img src={photo} alt=""/>
                    </div>
                    <PersonalInfo personal_info={User.personal_info}/>
                    <OtherInfo hard_skills={User.hard_skills}
                               other_skills={User.other_skills}
                               hobbies={User.hobbies}/>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
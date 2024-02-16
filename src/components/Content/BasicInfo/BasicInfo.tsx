import React, {FC} from 'react';
import './BasicInfo.scss';
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import OtherInfo from "./OtherInfo/OtherInfo";
import {UserType} from "../../../types/userType";
import photo from '../../../static/img/ava.jpg'
import {useSelector} from "react-redux";

const BasicInfo: FC<UserType> = (User) => {
    const theme = useSelector((state:any) => state.theme)
    const media = window.matchMedia('(max-width: 450px)')

    function className() {
        if (media.matches) {
            return 'basicInfoMobile'
        } else {
            return 'basic-info'
        }
    }

    return (
        <div className={className()}>
            <div className={className() + "__container container"}>
                <div className={(theme === 'dark') ? (className() + '__content') : (className() + '__content-dark')}>
                    <div className={className() + "__photo"}>
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
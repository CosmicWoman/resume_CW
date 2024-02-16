import React, {FC} from 'react';
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import './DetailedInfo.scss'
import {UserType} from "../../../types/userType";
import {WorkExp} from "../../../types/workExp";
import {useSelector} from "react-redux";

interface DetailedInfoType {
    User: UserType,
    Works: WorkExp[]
}

const DetailedInfo: FC<DetailedInfoType> = ({User, Works}) => {
    const theme = useSelector((state:any) => state.theme)

    function className() {
        if (theme === 'dark') {
            return 'detailedInfo'
        } else {
            return 'detailedInfoDark'
        }
    }

    return (
        <div className={className()}>
            <div className={className() + "__container container"}>
                <div className={className() + "__content"}>
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
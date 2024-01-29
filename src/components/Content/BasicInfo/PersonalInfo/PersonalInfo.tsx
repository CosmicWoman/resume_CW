import React, {FC} from 'react';
import {PersonalInfoType} from "../../../../types/userType";
import {useTranslation} from "react-i18next";

const PersonalInfo: FC<PersonalInfoType> = (PersInfo) => {
    const {t, i18n} = useTranslation();

    return (
        <div className='personalInfo'>
            <div className="container personalInfo__container">
                <div className="personalInfo__content">
                    <div className="personalInfo__blockName">
                        {i18n.language === 'ru' ? PersInfo.personal_info.name.ru : PersInfo.personal_info.name.en}
                    </div>
                    <div className="personalInfo__blockAdress"></div>
                    <div className="personalInfo__blockMail"></div>
                    <div className="personalInfo__blockPhone"></div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
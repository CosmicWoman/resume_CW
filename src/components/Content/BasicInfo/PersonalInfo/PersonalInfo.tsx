import React, {FC} from 'react';
import {PersonalInfoType} from "../../../../types/userType";
import {useTranslation} from "react-i18next";
import Icons from "../../../../hooks/Icons/Icons";
import './PersonalInfo.scss'

const PersonalInfo: FC<PersonalInfoType> = (PersInfo) => {
    const {t, i18n} = useTranslation();
    let fullYears = examinationDate(PersInfo.personal_info.birthday)

    function examinationDate(datestr: string) {
        const date = new Date(datestr)
        const nowDate = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1
        let age = nowDate.getFullYear() - date.getFullYear()
        if (month > (nowDate.getMonth() + 1)) {
            return age = age - 1
        } else if (month == (nowDate.getMonth() + 1)) {
            if (day <= nowDate.getDate()) {
                return age = age - 1
            } else {
                return age
            }
        }
        return age
    }

    return (
        <div className='personalInfo'>
            <div className="container personalInfo__container">
                <div className="personalInfo__content">

                    <div className="personalInfo__title">
                        {t('content.PersonalInfo.title')}
                    </div>
                    <div className="personalInfo__block">
                        <div className="personalInfo__block_icon">
                            <Icons name='face' size='20'/>
                        </div>
                        <div className="personalInfo__block_text text">
                            <div className="text__block-name">
                                {i18n.language === 'ru' ? PersInfo.personal_info.name.ru : PersInfo.personal_info.name.en}
                            </div>
                            <div className="text__block-birthday">
                                {PersInfo.personal_info.birthday} ({fullYears} лет)
                            </div>
                        </div>
                    </div>
                    <div className="personalInfo__block">
                        <div className="personalInfo__block_icon">
                            <Icons name='address' size='20'/>
                        </div>
                        <div className="personalInfo__block_text">
                            {(i18n.language == 'en') ? PersInfo.personal_info.city.en : PersInfo.personal_info.city.ru}
                        </div>
                    </div>
                    <div className="personalInfo__block">
                        <div className="personalInfo__block_icon">
                            <Icons name='mail' size='20'/>
                        </div>
                        <div className="personalInfo__block_text">
                            {PersInfo.personal_info.email}
                        </div>
                    </div>
                    <div className="personalInfo__block">

                        <div className="personalInfo__block_icon">
                            <Icons name='phone' size='20'/>
                        </div>
                        <div className="personalInfo__block_text">
                            {PersInfo.personal_info.phone_number}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
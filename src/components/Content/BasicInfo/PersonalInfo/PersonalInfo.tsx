import React, {FC, useEffect} from 'react';
import {PersonalInfoType} from "../../../../types/userType";
import {useTranslation} from "react-i18next";
import Icons from "../../../../hooks/Icons/Icons";
import './PersonalInfo.scss'

const PersonalInfo: FC<PersonalInfoType> = (PersInfo) => {
    const {t, i18n} = useTranslation();
    const media = window.matchMedia('(max-width: 450px)')
    let fullYears = examinationDate(PersInfo.personal_info.birthday)

    useEffect(() =>
    {
        className()
    }, [media.matches])

    function examinationDate(datestr: string) {
        const date = new Date(datestr)
        const nowDate = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1
        let age = nowDate.getFullYear() - date.getFullYear()
        if (month > (nowDate.getMonth() + 1)) {
            return age = age - 1
        } else if (month === (nowDate.getMonth() + 1)) {
            if (day <= nowDate.getDate()) {
                return age = age - 1
            } else {
                return age
            }
        }
        return age
    }

    function className(){
        if(media.matches){
            return 'mobileInfo'
        } else {
            return 'personalInfo'
        }
    }

    return (
        <div className={className()}>
            <div className={className + '__container container'}>
                <div className={className() + "__content"}>

                    <div className={className() + "__title"}>
                        {t('content.PersonalInfo.title')}
                    </div>
                    <div className={className() + "__block"}>
                        <div className={className() + "__block_icon"}>
                            <Icons name='face' size='20'/>
                        </div>
                        <div className={className() + "__block_text text"}>
                            <div className="text__block-name">
                                {i18n.language === 'ru' ? PersInfo.personal_info.name.ru : PersInfo.personal_info.name.en}
                            </div>
                            <div className="text__block-birthday">
                                {PersInfo.personal_info.birthday} ({fullYears} лет)
                            </div>
                        </div>
                    </div>
                    <div className={className() + "__block"}>
                        <div className={className() + "__block_icon"}>
                            <Icons name='address' size='20'/>
                        </div>
                        <div className={className() + "__block_text"}>
                            {(i18n.language == 'en') ? PersInfo.personal_info.city.en : PersInfo.personal_info.city.ru}
                        </div>
                    </div>
                    <div className={className() + "__block"}>
                        <div className={className() + "__block_icon"}>
                            <Icons name='mail' size='20'/>
                        </div>
                        <div className={className() + "__block_text"}>
                            {PersInfo.personal_info.email}
                        </div>
                    </div>
                    <div className={className() + "__block"}>

                        <div className={className() + "__block_icon"}>
                            <Icons name='phone' size='20'/>
                        </div>
                        <div className={className() + "__block_text"}>
                            {PersInfo.personal_info.phone_number}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
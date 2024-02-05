import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import Icons from "../../../../hooks/Icons/Icons";
import {skillsType} from "../../../../types/skillsType";
import CreateList from "../../../CreateList/CreateList";
import './OtherInfo.scss'

const OtherInfo: FC<skillsType> = (briefInfo) => {
    const {t, i18n} = useTranslation();

    return (
        <div className="otherInfo">
            <div className="container otherInfo__container">
                <div className="otherInfo__content">

                    <div className="otherInfo__block">
                        <div className="otherInfo__block_title">
                            {t('content.otherInfo.skills')}
                        </div>
                        <div className="otherInfo__block_content">
                            <div className="otherInfo__block_icon">
                                <Icons name='skills' size='20'/>
                            </div>
                            <div className="otherInfo__block_list">
                                <ul>
                                    <CreateList items={briefInfo.hard_skills} renderItem={(skill: string) =>
                                        <li>{skill}</li>
                                    }/>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="otherInfo__block">
                        <div className="otherInfo__block_title">
                            {t('content.otherInfo.other_skills')}
                        </div>
                        <div className="otherInfo__block_content">
                            <div className="otherInfo__block_list">
                                <ul>
                                    <CreateList items={briefInfo.other_skills} renderItem={(skill: string) =>
                                        <li>{skill}</li>
                                    }/>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="otherInfo__block">
                        <div className="otherInfo__block_title">
                            {t('content.otherInfo.hobbies')}
                        </div>
                        <div className="otherInfo__block_content">
                            <div className="otherInfo__block_icon">
                                <Icons name='hobbies' size='24'/>
                            </div>
                            <div className="otherInfo__block_list">
                                <ul>
                                    <CreateList
                                        items={(i18n.language == 'ru') ? briefInfo.hobbies.ru : briefInfo.hobbies.en}
                                        renderItem={(hobby: string) =>
                                            <li>{hobby}</li>
                                        }/>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default OtherInfo;
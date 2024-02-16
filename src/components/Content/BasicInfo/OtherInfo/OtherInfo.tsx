import React, {FC, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import Icons from "../../../../hooks/Icons/Icons";
import {skillsType} from "../../../../types/skillsType";
import CreateList from "../../../CreateList/CreateList";
import './OtherInfo.scss'
import {useSelector} from "react-redux";

const OtherInfo: FC<skillsType> = (briefInfo) => {
    const {t, i18n} = useTranslation();
    const media = window.matchMedia('(max-width: 450px)')
    const [active, setActive] = useState<string[]>([])
    const theme = useSelector((state: any) => state.theme)

    useEffect(() => {
        className()
        classNameTitle()
    }, [media.matches])

    function className() {
        if (media.matches) {
            return 'mobileOtherInfo'
        } else {
            return 'otherInfo'
        }
    }

    function classNameTitle() {
        if (media.matches) {
            if (theme === 'dark') {
                return 'title mobileOtherInfo'
            } else {
                return 'dark-title mobileOtherInfo'
            }
        } else {
            return 'otherInfo'
        }
    }

    function blockActive(id: string) {
        if (media.matches) {
            let arr = active
            if (active.includes(id)) {
                arr = arr.filter(item => item !== id)
                setActive(arr)
            } else {
               arr = [...arr, id]
                setActive(arr)
            }
        }
    }

    function createBlock(listen: string[], listenArr: {"ru": string[], "en": string[]} , id: string) {
        let result
        if (media.matches) {
            if (active.includes(id)) {
                if(id === 'hobbies'){
                    result = (<div className="mobileOtherInfo__block_list list">
                        <ul>
                            <CreateList items={(i18n.language === 'ru') ? listenArr.ru : listenArr.en} renderItem={(list: string) =>
                                <li>
                                    <div className="list__icon">
                                        <Icons name='circle' size='5'/>
                                    </div>
                                    <div className="list__text">
                                        {list}
                                    </div>
                                </li>
                            }/>
                        </ul>
                    </div>)
                } else{
                    result = (
                        <div className="mobileOtherInfo__block_list list">
                            <ul>
                                <CreateList items={listen} renderItem={(list: string) =>
                                    <li>
                                        <div className="list__icon">
                                            <Icons name='circle' size='5'/>
                                        </div>
                                        <div className="list__text">
                                            {list}
                                        </div>
                                    </li>
                                }/>
                            </ul>
                        </div>
                    )
                }
            } else {
                result = ''
            }
        } else if(id === 'hobbies'){
            result = (<div className="mobileOtherInfo__block_list list">
                <ul>
                    <CreateList items={(i18n.language === 'ru') ? listenArr.ru : listenArr.en} renderItem={(list: string) =>
                        <li>
                            <div className="list__icon">
                                <Icons name='circle' size='5'/>
                            </div>
                            <div className="list__text">
                                {list}
                            </div>
                        </li>
                    }/>
                </ul>
            </div>)
        } else {
            result = (
                <div className="otherInfo__block_list list">
                    <ul>
                        <CreateList items={listen} renderItem={(list: string) =>
                            <li>
                                <div className="list__icon">
                                    <Icons name='circle' size='5'/>
                                </div>
                                <div className="list__text">
                                    {list}
                                </div>
                            </li>
                        }/>
                    </ul>
                </div>)
        }
        return result
    }

    return (
        <div className={className()}>
            <div className={className() + "__container container"}>
                <div className={className() + "__content"}>

                    <div className={className() + "__block"}>
                        <div className={classNameTitle() + "__block_title"}
                             id='skills'
                             onClick={() => blockActive('skills')}
                        >
                            {t('content.otherInfo.skills')}
                            {(media.matches) ? <Icons name='hand' size='25'/> : ''}
                        </div>
                        <div className={className() + "__block_content"}>
                            {(!media.matches) ? <div className="otherInfo__block_icon">
                                <Icons name='skills' size='20'/>
                            </div> : ''}
                            {createBlock(briefInfo.hard_skills, briefInfo.hobbies,'skills')}
                        </div>
                    </div>

                    <div className={className() + "__block"}>
                        <div className={classNameTitle() + "__block_titleSmall"}
                             id='otherSkills'
                             onClick={() => blockActive('otherSkills')}
                        >
                            {t('content.otherInfo.other_skills')}
                            {(media.matches) ? <Icons name='hand' size='25'/> : ''}

                        </div>
                        <div className={className() + "__block_content"}>
                            {createBlock(briefInfo.other_skills, briefInfo.hobbies,'otherSkills')}
                        </div>
                    </div>

                    <div className={className() + "__block"}>
                        <div className={classNameTitle() + "__block_title"}
                             id='hobbies'
                             onClick={() => blockActive('hobbies')}
                        >
                            {t('content.otherInfo.hobbies')}
                            {(media.matches) ? <Icons name='hand' size='25'/> : ''}

                        </div>
                        <div className={className() + "__block_content"}>
                            {(!media.matches) ? <div className="otherInfo__block_icon">
                                <Icons name='hobbies' size='24'/>
                            </div> : ''}
                            {createBlock([''], briefInfo.hobbies,'hobbies')}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default OtherInfo;
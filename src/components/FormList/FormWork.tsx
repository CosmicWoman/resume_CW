import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import {WorkExp} from "../../types/workExp";
import CreateList from "../CreateList/CreateList";
import './FormsStyles.scss'
import CreateEnd from "../createEnding/CreateEnd";
import Icons from "../../hooks/Icons/Icons";
import {useSelector} from "react-redux";

const FormWork: FC<WorkExp> = (work) => {
    const {t, i18n} = useTranslation();
    const theme = useSelector((state:any) => state.theme)

    function workPeriodBlock() {
        if (work.year === 0) {
            return (
                <div className="basic__period_exp">
                    <CreateEnd number={Number(work.month)} wordOne={'месяц'} wordTwo={'месяцев'} wordThree={'месяца'}
                               wordEn={'month'}/>
                </div>
            )
        } else if (work.month === 0) {
            return (
                <div className="basic__period_exp">
                    <CreateEnd number={Number(work.year)} wordOne={'год'} wordTwo={'лет'}
                               wordThree={'года'} wordEn={'year'}/>
                </div>
            )
        } else {
            return (
                <div className="basic__period_exp">
                    <div className="basic__period_expYear">
                        <CreateEnd number={Number(work.year)} wordOne={'год'} wordTwo={'лет'}
                                   wordThree={'года'} wordEn={'year'}/>
                    </div>
                    <div className="basic__period_expMonth">
                        <CreateEnd number={Number(work.month)} wordOne={'месяц'} wordTwo={'месяцев'}
                                   wordThree={'месяца'} wordEn={'month'}/>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="formWork">
            <div className="container formWork__container">
                <div className="formWork__content">

                    <div className="formWork__block">
                        <div className="formWork__block-basic basic">
                            <div className="basic__title">
                                <div className="basic__title_title">
                                    {(i18n.language === 'ru') ? work.position.ru : work.position.en}
                                </div>
                                <div className="basic__title_subtitle">
                                    {(i18n.language === 'ru') ? work.company.ru : work.company.en}
                                </div>
                            </div>
                            <div className="basic__period">
                                {work.work_start + '-' + work.work_end}  ({workPeriodBlock()})
                            </div>
                        </div>
                        <div className="formWork__block-list list">
                            <ul>
                                <CreateList
                                    items={(i18n.language === 'ru') ? work.responsibilities.ru : work.responsibilities.en}
                                    renderItem={(resp: string) =>
                                        <li>
                                            <div className="list__icon">
                                                {(theme === 'dark') ? <Icons name='circle-black' size='5'/> : <Icons name='circle' size='5'/>}
                                            </div>
                                            <div className="list__text">
                                                {resp}
                                            </div>
                                        </li>
                                    }/>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FormWork;
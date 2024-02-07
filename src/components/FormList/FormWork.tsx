import React, {FC, useEffect} from 'react';
import {useTranslation} from "react-i18next";
import {WorkExp} from "../../types/userType";
import CreateList from "../CreateList/CreateList";
import './FormsStyles.scss'
import CreateEnd from "../createEnding/CreateEnd";

const FormWork: FC<WorkExp> = (work) => {
    const {t, i18n} = useTranslation();
    let month
    let year

    // useEffect(() => {
    //     dateConvert()
    // }, [work])
    //
    // console.log(work.work_period)
    //
    // function dateConvert() {
    //     let date = work.work_period.split('-')
    //     let date1 = date[0].split('.')
    //     let date2 = date[1].split('.')
    //     let oneNum = Number(date2[1]) - Number(date1[1]) * 12
    //     let twoNum
    //     if( oneNum > 0){
    //         twoNum = (oneNum - Number(date1[0]) + Number(date1[0]) + 1) / 12
    //         if(twoNum > 1){
    //             twoNum = twoNum.toString().split(',')
    //             year = Number(twoNum[1])
    //             month = Number(twoNum[0])
    //         } else {
    //             year = twoNum
    //         }
    //     } else{
    //         month = Number(date1[0]) - Number(date1[0]) + 1
    //     }
    // }

    return (
        <div className="formWork">
            <div className="container formWork__container">
                <div className="formWork__content">

                    <div className="formWork__block">
                        <div className="formWork__block-basic basic">
                            <div className="basic__title">
                                <div className="basic__title_title">
                                    {(i18n.language == 'ru') ? work.position.ru : work.position.en}
                                </div>
                                <div className="basic__title_subtitle">
                                    {(i18n.language == 'ru') ? work.company.ru : work.company.en}
                                </div>
                            </div>
                            <div className="basic__period">
                                {work.work_period}
                                <div className="basic__period_exp">
                                    {(year) ?
                                        (year + <CreateEnd number={year} wordOne={'год'} wordTwo={'лет'} wordThree={'года'} wordEn={'years'}/>) : ''}
                                    {(month) ?
                                        (month + <CreateEnd number={month} wordOne={'месяц'} wordTwo={'месяца'} wordThree={'месяцев'} wordEn={'month'}/>) : ''}
                                </div>
                            </div>
                        </div>
                        <div className="formWork__block-list">
                            <ul>
                                <CreateList items={(i18n.language == 'ru') ? work.responsibilities.ru : work.responsibilities.en}
                                            renderItem={(resp: string) =>
                                                <li>{resp}</li>
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
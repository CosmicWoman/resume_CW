import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import {WorkExp} from "../../types/userType";
import CreateList from "../CreateList/CreateList";

const FormWork: FC<WorkExp> = (work) => {
    const {t, i18n} = useTranslation();

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
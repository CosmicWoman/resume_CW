import React, {FC} from 'react';
import {EducationBack} from "../../types/userType";
import {useTranslation} from "react-i18next";

const FormEduc: FC<EducationBack> = (education) => {
    const {t, i18n} = useTranslation();

    return (
        <div className='formEduc'>
            <div className="container formEduc__container">
                <div className="formEduc__content">

                    <div className="formEduc__block">
                        <div className="formEduc__block_title">
                            {(i18n.language == 'ru') ? education.speciality.ru : education.speciality.en}
                        </div>
                        <div className="formEduc__block_text">
                            {(i18n.language == 'ru') ? education.educational_institution.ru : education.educational_institution.en}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FormEduc;
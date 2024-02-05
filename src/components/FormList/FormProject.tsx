import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import {ProjectsType} from "../../types/projectsType";

const FormProject: FC<ProjectsType> = (projects) => {
    const {t, i18n} = useTranslation();

    return (
        <div className="formProject">
            <div className="container formProject__container">
                <div className="formProject__content">

                    <div className="formProject__block">
                        <div className="formProject__block_title">
                            <a href={projects.link_project}>
                                {(i18n.language == 'ru') ? projects.name_project.ru : projects.name_project.en}
                            </a>
                        </div>
                        <div className="formProject__block_text">
                            {(i18n.language == 'ru') ? projects.specification.ru : projects.specification.en}
                        </div>
                        <div className="formProject__block_list">
                            [{projects.project_tools}]
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FormProject;
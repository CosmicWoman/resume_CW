import React, {FC} from 'react';
import {EducationBack, WorkExp} from "../../../../types/userType";
import {ProjectsType} from "../../../../types/projectsType";
import {useTranslation} from "react-i18next";
import CreateList from "../../../CreateList/CreateList";
import FormProject from "../../../FormList/FormProject";
import FormEduc from "../../../FormList/FormEduc";
import FormWork from "../../../FormList/FormWork";

interface ViewForm {
    educations: EducationBack[],
    works: WorkExp[],
    projects: ProjectsType[]
}

const InfoBlock: FC<ViewForm> = ({educations,works,projects}) => {
    const {t, i18n} = useTranslation();

    return (
        <div className='infoBlock'>
            <div className="container infoBlock__container">
                <div className="infoBlock__content">

                    <div className="infoBlock__block">
                        <div className="infoBlock__block_title">
                            {t('content.infoBlock.project')}
                        </div>
                        <div className="infoBlock__block_list list">
                            <CreateList items={projects} renderItem={(project:ProjectsType) =>
                            <FormProject name_project={project.name_project}
                                         link_project={project.link_project}
                                         project_tools={project.project_tools}
                                         specification={project.specification}/>
                            }/>
                        </div>
                    </div>

                    <div className="infoBlock__block">
                        <div className="infoBlock__block_title">
                            {t('content.infoBlock.education')}
                        </div>
                        <div className="infoBlock__block_list list">
                            <CreateList items={educations} renderItem={(education:EducationBack) =>
                                <FormEduc speciality={education.speciality}
                                          educational_institution={education.educational_institution}/>
                            }/>
                        </div>
                    </div>

                    <div className="infoBlock__block">
                        <div className="infoBlock__block_title">
                            {t('content.infoBlock.work')}
                        </div>
                        <div className="infoBlock__block_list list">
                            <CreateList items={works} renderItem={(work:WorkExp) =>
                                <FormWork position={work.position}
                                          company={work.company}
                                          work_period={work.work_period}
                                          responsibilities={work.responsibilities}/>
                            }/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InfoBlock;
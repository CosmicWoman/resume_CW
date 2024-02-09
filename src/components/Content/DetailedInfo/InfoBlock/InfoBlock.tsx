import React, {FC, useEffect, useState} from 'react';
import {EducationBack, WorksExp} from "../../../../types/userType";
import {ProjectsType} from "../../../../types/projectsType";
import {useTranslation} from "react-i18next";
import CreateList from "../../../CreateList/CreateList";
import FormProject from "../../../FormList/FormProject";
import FormEduc from "../../../FormList/FormEduc";
import FormWork from "../../../FormList/FormWork";
import './InfoBlock.scss'
import {WorkExp} from "../../../../types/workExp";

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

                    <div className="infoBlock__border"></div>

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

                    <div className="infoBlock__border"></div>

                    <div className="infoBlock__block">
                        <div className="infoBlock__block_title">
                            {t('content.infoBlock.work')}
                        </div>
                        <div className="infoBlock__block_list list">
                            <CreateList items={works} renderItem={(work:WorkExp) =>
                                <div className="list__element">
                                    <FormWork position={work.position}
                                              company={work.company}
                                              work_start={work.work_start}
                                              work_end={work.work_end}
                                              year={work.year}
                                              month={work.month}
                                              responsibilities={work.responsibilities}/>
                                </div>
                            }/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InfoBlock;
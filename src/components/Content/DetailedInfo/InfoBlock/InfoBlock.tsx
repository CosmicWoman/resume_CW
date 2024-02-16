import React, {FC, useState} from 'react';
import {EducationBack} from "../../../../types/userType";
import {ProjectsType} from "../../../../types/projectsType";
import {useTranslation} from "react-i18next";
import CreateList from "../../../CreateList/CreateList";
import FormProject from "../../../FormList/FormProject";
import FormEduc from "../../../FormList/FormEduc";
import FormWork from "../../../FormList/FormWork";
import './InfoBlock.scss'
import {WorkExp} from "../../../../types/workExp";
import Icons from "../../../../hooks/Icons/Icons";
import {useSelector} from "react-redux";

interface ViewForm {
    educations: EducationBack[],
    works: WorkExp[],
    projects: ProjectsType[],
}

const InfoBlock: FC<ViewForm> = ({educations, works, projects}) => {
    const {t, i18n} = useTranslation();
    const media = window.matchMedia('(max-width: 450px)')
    const [active, setActive] = useState<string[]>([])
    const theme = useSelector((state:any) => state.theme)

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

    function activity(id: string) {
        if(active.includes(id) || !media.matches){
            return true
        } else {
            return false
        }
    }

    function className() {
        if (media.matches) {
            return 'infoBlockMobile'
        } else {
            return 'infoBlock'
        }
    }

    function classNameTheme() {
        if(media.matches && theme === 'dark'){
            return '__block_title'
        } else if(media.matches && theme !== 'dark'){
            return '__block_title-dark'
        } else {
            return '__block_title'
        }
    }

    return (
        <div className={className()}>
            <div className={className() + "__container container"}>
                <div className={className() + "__content"}>

                    <div className={className() + "__block"}
                         id='project'
                         onClick={() => blockActive('project')}
                    >
                        <div className={className() + classNameTheme()}>
                            {t('content.infoBlock.project')}
                            {(media.matches) ? <Icons name='hand' size='25'/> : ''}
                        </div>
                        {(activity('project')) ?
                            <div className={className() + "__block_list list"}>
                                <CreateList items={projects} renderItem={(project: ProjectsType) =>
                                    <FormProject name_project={project.name_project}
                                                 link_project={project.link_project}
                                                 project_tools={project.project_tools}
                                                 specification={project.specification}/>
                                }/>
                            </div> : ''}

                    </div>

                    <div className="infoBlock__border"></div>

                    <div className={className() + "__block"}
                         id='education'
                         onClick={() => blockActive('education')}
                    >
                        <div className={className() + classNameTheme()}>
                            {t('content.infoBlock.education')}
                            {(media.matches) ? <Icons name='hand' size='25'/> : ''}
                        </div>
                        {(activity('education')) ?
                            <div className={className() + "__block_list list"}>
                                <CreateList items={educations} renderItem={(education: EducationBack) =>
                                    <FormEduc speciality={education.speciality}
                                              educational_institution={education.educational_institution}/>
                                }/>
                            </div> : ''
                        }

                    </div>

                    <div className="infoBlock__border"></div>

                    <div className={className() + "__block"}
                         id='work'
                         onClick={() => blockActive('work')}
                    >
                        <div className={className() + classNameTheme()}>
                            {t('content.infoBlock.work')}
                            {(media.matches) ? <Icons name='hand' size='25'/> : ''}
                        </div>
                        {(activity('work')) ?
                            <div className={className() + "__block_list list"}>
                                <CreateList items={works} renderItem={(work: WorkExp) =>
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
                            </div> : ''
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default InfoBlock;
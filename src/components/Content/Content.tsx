import React, {useEffect, useState} from 'react';
import './Content.scss'
import BasicInfo from "./BasicInfo/BasicInfo";
import DetailedInfo from "./DetailedInfo/DetailedInfo";
import {defaultUser, UserType, WorksExp} from "../../types/userType";
import api from "../../api";
import {WorkExp, workExp} from "../../types/workExp";

interface nameProps {
    ru: string
    en: string
}

const nameUser = {
    ru: "",
    en: ""
}

const Content = () => {
    const [user, setUser] = useState<UserType>(defaultUser)
    const [name, setName] = useState<nameProps>(nameUser)
    const [works, setWorks] = useState<WorkExp[]>([workExp])

    useEffect(() => {
        UserCreate()
    }, [])

    async function UserCreate() {
        const response = await api.get.data()
        let works_ = response.user.work_experience.map((item: WorksExp) => {
            return {
                "position": {
                    "ru": item.position.ru,
                    "en": item.position.en
                },
                "company": {
                    "ru": item.company.ru,
                    "en": item.company.en
                },
                "work_start": item.work_period.split('-')[0],
                "work_end": item.work_period.split('-')[1],
                "year": createYear(item.work_period.split('-')[0], item.work_period.split('-')[1]),
                "month": createMonth(item.work_period.split('-')[0], item.work_period.split('-')[1]),
                "responsibilities": {
                    "ru": item.responsibilities.ru,
                    "en": item.responsibilities.en
                }
            }
        })
        setUser(response.user)
        setName(response.user.personal_info.name)
        setWorks(works_)
    }

    function createYear(start: string, end: string) {
        let startDate = start.split('.')
        let endDate = end.split('.')

        console.log(Number(endDate[1]) - Number(startDate[1]))

        return (Number(endDate[1]) - Number(startDate[1]))
    }

    function createMonth(start: string, end: string) {
        let year = createYear(start, end) * 12
        let startDate = start.split('.')
        let endDate = end.split('.')
            return (year - Number(startDate[0]) + Number(endDate[0]) + 1 - year)
    }

    return (
        <div className="content">
            <div className="container content__container">
                <div className="content__content">
                    <BasicInfo photo={user.photo}
                               personal_info={user.personal_info}
                               hard_skills={user.hard_skills}
                               other_skills={user.other_skills}
                               hobbies={user.hobbies}
                               projects={user.projects}
                               education_background={user.education_background}
                               work_experience={user.work_experience}/>
                    <DetailedInfo User={user}
                                  Works={works}/>
                </div>
            </div>
        </div>
    );
};

export default Content;
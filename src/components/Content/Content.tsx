import React, {useEffect, useState} from 'react';
import './Content.scss'
import BasicInfo from "./BasicInfo/BasicInfo";
import DetailedInfo from "./DetailedInfo/DetailedInfo";
import {defaultUser, UserType} from "../../types/userType";
import axios from "axios";
import api from "../../api";

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

    useEffect(() => {
        UserCreate()
    }, [])

    async function UserCreate() {
        const response = await api.get.data()
        setUser(response.user)
        setName(response.user.personal_info.name)
    }

    return (
        <div className="content">
            <div className="container content__container">
                <div className="content__content">
                    <BasicInfo photo={user.photo} personal_info={user.personal_info} hard_skills={user.hard_skills}
                               other_skills={user.other_skills} hobbies={user.hobbies}
                               education_background={user.education_background} work_experience={user.work_experience}/>
                    <DetailedInfo photo={user.photo} personal_info={user.personal_info} hard_skills={user.hard_skills}
                                  other_skills={user.other_skills} hobbies={user.hobbies}
                                  education_background={user.education_background}
                                  work_experience={user.work_experience}/>
                </div>
            </div>
        </div>
    );
};

export default Content;
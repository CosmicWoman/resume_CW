import React, {useEffect, useState} from 'react';
import './Content.scss'
import BasicInfo from "./BasicInfo/BasicInfo";
import DetailedInfo from "./DetailedInfo/DetailedInfo";
import {UserType} from "../../types/userType";
import axios from "axios";

//TODO: Вынести объект User в отдельный файл
// (как его собрать там, чтобы потом дергать в другие компоненты?)

interface nameProps {
    ru: string
    en: string
}

const nameUser = {
    ru: "",
    en: ""
}

const Content = () => {
    const [User, setUser] = useState<UserType>()
    const [Name, setName] = useState<nameProps>(nameUser)

    useEffect(() => {
        UserCreate()
    }, [])

    useEffect(() => {
        let name_ = User?.personal_info.name || nameUser
        setName(name_)
    }, [User])

    async function UserCreate() {
        await axios
            .get('http://localhost:3001/user')
            .then((response) => {
                setUser(response.data)
            })
    }
    // function nameCreate(){
    //     let name_ = User?.personal_info.name || nameUser
    //     setName(name_)
    // }

    console.log(Name)

    return (
        <div className="content">
            <div className="container content__container">
                <div className="content__content">
                    <BasicInfo/>
                    <DetailedInfo name={Name}/>
                </div>
            </div>
        </div>
    );
};

export default Content;
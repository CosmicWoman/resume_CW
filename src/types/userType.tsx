export interface PersonalInfoType {
    "personal_info": {
        "name": {
            "ru": string,
            "en": string
        },
        "birthday": string,
        "phone_number": number,
        "email": string,
        "city": {
            "ru": string,
            "en": string
        },
        "salary": number
    }
}

export interface UserType {
    "photo": string,
    "personal_info": {
        "name": {
            "ru": string,
            "en": string
        },
        "birthday": string,
        "phone_number": number,
        "email": string,
        "city": {
            "ru": string,
            "en": string
        },
        "salary": number
    },
    "hard_skills": string[],
    "other_skills": string[],
    "hobbies": {
        "ru": string[],
        "en": string[]
    },
    "education_background": EducationBack[],
    "work_experience": [
        {
            "position": {
                "ru": string,
                "en": string
            },
            "company": {
                "ru": string,
                "en": string
            },
            "work_period": string,
            "responsibilities": {
                "ru": string[],
                "en": string[]
            }
        },
    ]
}

interface EducationBack {
    "speciality": {
        "ru": string,
        "en": string
    },
    "educational_institution": {
        "ru": string,
        "en": string
    }
}

export const defaultUser: UserType = {
        "photo": "",
        "personal_info": {
            "name": {
                "ru": "",
                "en": ""
            },
            "birthday": "",
            "phone_number": 0,
            "email": "",
            "city": {
                "ru": "",
                "en": ""
            },
            "salary": 0
        },
        "hard_skills": [""],
        "other_skills": [""],
        "hobbies": {
            "ru": [""],
            "en": [""]
        },
        "education_background": [
            {
                "speciality": {
                    "ru": "",
                    "en": ""
                },
                "educational_institution": {
                    "ru": "",
                    "en": ""
                }
            }
        ],
        "work_experience": [
            {
                "position": {
                    "ru": "",
                    "en": ""
                },
                "company": {
                    "ru": "",
                    "en": ""
                },
                "work_period": "",
                "responsibilities": {
                    "ru": [""],
                    "en": [""]
                }
            },
        ]
}
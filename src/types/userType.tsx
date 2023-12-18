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
    "education_background": [
        {
            "speciality": {
                "ru": string,
                "en": string
            },
            "educational_institution": {
                "ru": string,
                "en": string
            }
        }
    ],
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
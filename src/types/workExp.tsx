export interface WorkExp {
    "position": {
        "ru": string,
        "en": string
    },
    "company": {
        "ru": string,
        "en": string
    },
    "work_start": string,
    "work_end": string,
    "year": number,
    "month": number,
    "responsibilities": {
        "ru": string[],
        "en": string[]
    }
}

export const workExp: WorkExp = {
    "position": {
        "ru": '',
        "en": ''
    },
    "company": {
        "ru": '',
        "en": ''
    },
    "work_start": '',
    "work_end": '',
    "year": 0,
    "month": 0,
    "responsibilities": {
        "ru": [''],
        "en": ['']
    }
}
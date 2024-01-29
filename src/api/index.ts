import getEndpoints from '../server/server';
import {UserType} from "../types/userType";

const endpoints = getEndpoints();

type ENDPOINTS = keyof typeof endpoints;
type RESPONSE_DATA = {
    user: UserType;
};

const getJson = async <T>(endpoint: ENDPOINTS): Promise<T> => {
    const path = `https://raw.githubusercontent.com/CosmicWoman/resume_CW/gh-pages/static/server/${endpoint}.json`;
    const response = await fetch(path);

    return await response.json();
};

type API = {
    get: {
        data: () => Promise<RESPONSE_DATA>;
    };
};
const api: API = {
    get: {
        data: () => getJson<RESPONSE_DATA>('data'),
    },
};

export type { RESPONSE_DATA, ENDPOINTS };
export default api;
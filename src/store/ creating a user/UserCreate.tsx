import axios from 'axios';
import '../../static/json/db.json'

let user

function UserCreate() {
    axios
        .get('http://localhost:300/user')
        .then((response) => {
            user = response.data
        })
}

UserCreate()
export const Info = user

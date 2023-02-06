import axios from "axios";

export const GetDefaultBooks = (user) => {
    return axios.get("https://25xwqiuh6b.execute-api.eu-west-1.amazonaws.com/prod?user=" + user);
};
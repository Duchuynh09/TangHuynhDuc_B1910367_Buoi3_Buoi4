import axios from "axios";

const commonConfig = {
    Headers: {
        "Content-Type": "application/json",
        Accept :"application/json",
    },
    // auth: {
    //     username: 'admin',
    //     password: 'admin'
    //   },

};

export default (baseURL) => {
    return axios.create({
        baseURL,...commonConfig,
    });
};
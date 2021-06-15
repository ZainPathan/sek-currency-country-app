import axios from 'axios';

export const request = (config: any) => (dispatch: Function) =>
    new Promise((resolve, reject) => {
        axios({
            ...config,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            }
        })
            .then((response: any) => {
                resolve(response);
            })
            .catch((error: any) => {
                reject(error);
            });
    });

export const get = (url: string) => (dispatch: Function) =>
    dispatch(
        request({
            url,
            method: 'GET'
        })
    );

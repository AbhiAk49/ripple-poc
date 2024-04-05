import { IRequestBody } from "../constants/common-interface";
import { IConfig, IRest } from "../constants/model-interfaces";

export class Rest implements IRest {
    config: IConfig;
    baseurl: string;

    constructor(rest?: IRest) {
        this.config = rest?.config || {};
        const apihost = this.config.apihost || "";
        const basepath = this.config.basepath || "";
        this.baseurl = apihost + basepath;
    }

    getCommonHeaders(requestHeaders?: Record<string, string>) {
        const globalHeaders = this.config.headers ?? {};
        const apiHeaders = requestHeaders ?? {};
        return {
            "Content-Type": "application/json",
            ...globalHeaders,
            ...apiHeaders
        };
    }

    async get(url: string, isRemote?: boolean, requestHeaders?: Record<string, string>) {
        const finalUrl = isRemote ? url : this.baseurl + url;
        return fetch(finalUrl, {
            method: "GET",
            headers: this.getCommonHeaders(requestHeaders)
        }).then((res) => res.json());
    }

    async post(url: string, requestBody: IRequestBody, isRemote?: boolean, requestHeaders?: Record<string, string>) {
        const finalUrl = isRemote ? url : this.baseurl + url;
        return fetch(finalUrl, {
            method: "POST",
            headers: this.getCommonHeaders(requestHeaders),
            body: JSON.stringify(requestBody)
        }).then((res) => res.json());
    }

    async put(url: string, requestBody: IRequestBody, isRemote?: boolean, requestHeaders?: Record<string, string>) {
        const finalUrl = isRemote ? url : this.baseurl + url;
        return fetch(finalUrl, {
            method: "PUT",
            headers: this.getCommonHeaders(requestHeaders),
            body: JSON.stringify(requestBody)
        }).then((res) => res.json());
    }

    async delete(url: string, isRemote?: boolean, requestHeaders?: Record<string, string>) {
        const finalUrl = isRemote ? url : this.baseurl + url;
        return fetch(finalUrl, {
            method: "DELETE",
            headers: this.getCommonHeaders(requestHeaders)
        }).then((res) => res.json());
    }

    async patch(url: string, requestBody: IRequestBody, isRemote?: boolean, requestHeaders?: Record<string, string>) {
        const finalUrl = isRemote ? url : this.baseurl + url;
        return fetch(finalUrl, {
            method: "PATCH",
            headers: this.getCommonHeaders(requestHeaders),
            body: JSON.stringify(requestBody)
        }).then((res) => res.json());
    }
}

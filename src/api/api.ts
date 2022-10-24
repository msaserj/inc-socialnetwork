import axios from "axios";
import {UserProfileType} from "../redux/profile-reducer";
// DAL


const apiInstance = axios.create({
    withCredentials: true,

    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "43312b93-73fd-4342-90f4-f7fe2aad1adb"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return apiInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    unFollow(usrId: number) {
        return apiInstance.delete(`follow/${usrId}`).then(res => res.data)
    },
    follow(usrId: number) {
        return apiInstance.post(`follow/${usrId}`).then(res => res.data)
    }

}
export const profileAPI = {
    getProfile(profileId: number) {
        return apiInstance.get(`profile/` + profileId)
    },
    getStatus(profileId: string) {
        return apiInstance.get(`profile/status/` + profileId)
    },
    updateStatus(status: string) {
        return apiInstance.put(`profile/status`, {status}).then(response => response.data)
    },
    savePhoto(photoFile: string | Blob) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return apiInstance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    saveProfile(profile: UserProfileType) {
        return apiInstance.put(`profile`, profile).then(response => response.data)
    },

}

export const authAPI = {
    me() {
        return apiInstance.get<MeResType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe?: boolean, captcha?: string | null) {
        return apiInstance.post<LoginResType>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout() {
        return apiInstance.delete(`auth/login`).then(res => res.data)
    },
}

type MeResType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: string[]
}

type LoginResType = {
    data: {
        userId: number
    }
    resultCode: number
    messages: string[]
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export const securityAPI = {
    getCaptcha() {
        return apiInstance.get(`security/get-captcha-url`).then(res => res.data)
    }
}



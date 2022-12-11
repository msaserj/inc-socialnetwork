import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../../redux/profile-reducer";
import {Navigate} from "react-router-dom";


export type ProfileType = {
    userProfile: UserProfileType | null
    isAuth: boolean
    status: string
    updateStatus: (status: string) => void
    getStatus: (profileId: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: any,  setStatus: any, setSubmitting: any) => void
    resultCode: number
}

export const Profile = (props: ProfileType) => {
    if (!props.isAuth) return <Navigate to="/login" />
    return (
        <div>
            <h2>Main content</h2>
            <ProfileInfo
                status={props.status}
                updateStatus={props.updateStatus}
                getStatus={props.getStatus}
                userProfile={props.userProfile}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
             saveProfile={props.saveProfile} resultCode={props.resultCode}/>
            <MyPostsContainer  />
        </div>
    )
}
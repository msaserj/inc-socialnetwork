import React, {useState} from "react";
import classes from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../../redux/profile-reducer";
import userPhoto from "../../../../assets/images/profileImage.png";
import {Preloader} from "../../../00-Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";

type ProfileType = {
    userProfile: UserProfileType | null
    updateStatus: (status: string) => void
    getStatus: (profileId: string) => void
    status: string
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: any, setStatus: any, setSubmitting: any) => void
    resultCode: number
}

export const ProfileInfo = (props: ProfileType) => {
    const [editMode, setEditMode] = useState<boolean>(false)


    if (!props.userProfile) {
        return <Preloader/>  //если нет профайла то крутилка
    }
    let data = props.userProfile
    // console.log(props.isOwner)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const loadPhotoHandler = (e: any) => {
        if (e.target.files.length) {
            let file = e.target.files[0]
            props.savePhoto(file)
        }
    }
    return (
        <div>
            <div>
                <img className={classes.bgc} src="http://location-la-batie-montsaleon.fr/layout/img/entete.jpg"
                     alt="la_batie"/>
            </div>
            <div className={classes.descriptionBlock}>
                {/*<img className={classes.userPhoto} src={data.photos ? data.photos.large : userPhoto} alt=""/>*/}

                <img className={classes.userPhoto} src={data.photos != null || undefined
                    ? data.photos.small : userPhoto} alt=""/>
                {props.isOwner && <input type={"file"} onChange={loadPhotoHandler}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}
                                        getStatus={props.getStatus}/>

                {editMode
                    ? <ProfileDataForm userProfile={props.userProfile} saveProfile={props.saveProfile}
                                       deactivateEditMode={deactivateEditMode} resultCode={props.resultCode}/>
                    : <ProfileData userProfile={props.userProfile} isOwner={props.isOwner}
                                   goToEditMode={activateEditMode}/>}
            </div>
        </div>)
}
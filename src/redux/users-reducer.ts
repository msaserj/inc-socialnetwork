import {ActionsType, AppThunk} from "./redux-store";
import {usersAPI} from "../api/api";
import {followUnfollow, updateObjectInArray} from "../utils/object-helpers";

// typeof ActionCreators
export type UsersActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleIsFollowingAC>

// ActionCreators
export const followAC = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unFollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: "SET-TOTAL-USERS-COUNT", totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)
export const toggleIsFollowingAC = (isFetching: boolean, userId: number) => (
    {type: "TOGGLE-IS-FOLLOWING", isFetching, userId} as const)


// types for InitialState

export type UserLocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}


const initialState: UsersPageType = {
    users: [
        {
            id: 1,
            photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
            followed: false,
            name: "Alex",
            status: "Loking for a job",
            location: {city: "Tagil", country: "Russia"}
        },
        {
            id: 2,
            photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
            followed: true,
            name: "Nikolai",
            status: "I flying in the clouds",
            location: {city: "E-burg", country: "Russia"}
        },
        {
            id: 3,
            photos: {small: "https://thispersondoesnotexist.com/image", large: ""},
            followed: true,
            name: "Lisa",
            status: "At home",
            location: {city: "Tver", country: "Russia"}
        },
    ],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

// reducer
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            } as UsersPageType
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            } as UsersPageType
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            } as UsersPageType
        default:
            return state
    }
}

//thunks
export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(setCurrentPageAC(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))
    dispatch(toggleIsFetchingAC(false))

}

export const followTC = (userId: number): AppThunk => async (dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI)
    await followUnfollow(dispatch, userId, apiMethod, followAC)
}

export const unFollowTC = (userId: number): AppThunk => async (dispatch) => {
    let apiMethod = usersAPI.unFollow.bind(usersAPI)
    await followUnfollow(dispatch, userId, apiMethod, unFollowAC)
}
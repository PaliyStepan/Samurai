const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users:  [
        // {id: 1, photoUrl: 'https://games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg',
        //     followed: false ,fullName: 'Dmitry', status: 'I`m a boss', location: {city: 'Moscow', country: "Russia"} },
        // {id: 2, photoUrl: 'https://pic.rutube.ru/video/19/7c/197c4d75ba2fa8891ba329066fa62a36.png',
        //     followed: true, fullName: 'Sasha', status: 'I`m a boss', location: {city: 'Kiev', country: "Ukraine"} },
        // {id: 3, photoUrl: 'https://storage.yandexcloud.net/incrussia-prod/wp-content/uploads/2019/06/Cover_610-1.jpg',
        //     followed: false, fullName: 'Evgen', status: 'I`m a boss', location: {city: 'Detroit ', country: "USA"} },
        // {id: 4, photoUrl: 'http://infit.ru/uploads/images/Alex/untitled%20folder/untitled%20folder/untitled%20folder/Denis_1%D0%B4%D0%B8%D0%B5%D1%82%D0%B0.jpg',
        //     followed: true ,fullName: 'Denis', status: 'I`m a boss', location: {city: 'Minsk', country: "Belarus"} }

    ]
}




const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(u => {
                    if  (u.id === action.useId) {
                        return {...u, followed: true}
                    }
                    return u;
                } )
            };
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(u => {
                    if  (u.id === action.useId) {
                        return {...u, followed: false}
                    }
                    return u;
                } )
            };
        case SET_USERS:
            return {
              ...state,
              users: [...state.users, ...action.users]
            };
        default:
            return state
    }
};







export const followAC = (useId) => (
    {type: FOLLOW, useId}
);
export const unfollowAC = (useId) => (
    { type: UNFOLLOW, useId}
);

export const sesUsersAC = (users) => ({
    type: SET_USERS, users
})


export default usersReducer;
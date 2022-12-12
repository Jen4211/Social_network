const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initiaState = {
    users: [
        { id: 1, photo: 'https://i.etsystatic.com/16080595/r/il/d3dd03/2600962297/il_570xN.2600962297_arhj.jpg', followed: false, fullName: 'Jenia', status: 'I am good guy', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, photo: 'https://i.etsystatic.com/16080595/r/il/d3dd03/2600962297/il_570xN.2600962297_arhj.jpg', followed: true, fullName: 'Sasha', status: 'I am good guy to', location: { city: 'Kiev', country: 'Ukraine' } },
        { id: 3, photo: 'https://i.etsystatic.com/16080595/r/il/d3dd03/2600962297/il_570xN.2600962297_arhj.jpg', followed: false, fullName: 'Vova', status: 'I am good guy to', location: { city: 'Pinsk', country: 'Belarus' } },
    ]
}

const usersReducer = (state = initiaState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
            case SET_USERS:
               return {
                ...state,
                users: [...state.users, ...action.users]
               } 
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
};

export default usersReducer;
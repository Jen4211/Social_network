

const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const addPost = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'


let initialState = {
    postsData: [
        { id: 1, message: "Hi, how are you?", likeCount: 12 },
        { id: 2, message: "It is my first post.", likeCount: 20 },
        { id: 3, message: "What do you do?", likeCount: 10 }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 5
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case updateNewPostText:
            return {
                ...state,
                newPostText: action.newText
            }
            case SET_USERS_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: addPost
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: updateNewPostText,
        newText: text
    }
};
export const setUsersProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    }
}

export default profileReducer;
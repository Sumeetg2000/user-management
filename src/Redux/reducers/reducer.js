import { LOGOUT, USER_SIGNUP } from "../actions/actionTypes";

const initialState ={
        userName: localStorage.getItem('name'),
        userEmail: localStorage.getItem('email'),
        userPhoneNo: localStorage.getItem('phoneNo'),
        userPassword: localStorage.getItem('password'),
        confirmPassword:'',
        userImage: localStorage.getItem('image'),
        isLoggedIn:localStorage.getItem('loggedIn')
    };

export const SignUpReducer=(state=initialState, action)=>{
    switch (action.type){
        case USER_SIGNUP :
            return{
                ...action.payload
            }
        case LOGOUT:
            return initialState
        default :
            return state
    }
};
import { LOGGING_IN, LOG_IN_SUCCESSFULLY, SIGNING_UP, SIGN_UP_SUCCESSFULLY, SIGN_UP_FAILED, LOG_IN_FAILED, LOG_OUT } from "../../constants";
import { LOGIN, SIGNUP } from "../../api/authApi";
import history from "../../utils/history";

const loggingIn = () => ({
    type: LOGGING_IN
});

const loginSuccessfully = (authPayload) => ({
    type: LOG_IN_SUCCESSFULLY,
    authPayload
})

const loginFailed = () => ({
    type: LOG_IN_FAILED,
})


const signingUp = () => ({
    type: SIGNING_UP
});

const signUpSuccessfully = (authPayload) => ({
    type: SIGN_UP_SUCCESSFULLY,
    authPayload
})

const signUpFailed = () => ({
    type: SIGN_UP_FAILED,
})

export const logout = ()=>{
    localStorage.removeItem('authPayload');
    localStorage.removeItem('token');
    history.push('/');
    return {
        type: LOG_OUT
    }
}

export const login = (client, { email, password }) => {
    return async dispatch => {
        dispatch(loggingIn());
        try {
            const res = await client.mutate({
                mutation: LOGIN,
                variables: {
                    data: {
                        email,
                        password
                    }
                }
            });
            localStorage.setItem('authPayload', JSON.stringify(res.data.login));
            localStorage.setItem('token', res.data.login.token);
            dispatch(loginSuccessfully(res.data.login));
        } catch (ex) {
            console.log(ex)
            dispatch(loginFailed());
        }
    }
}

export const signUp = (client, { email, username, password }) => {
    return async dispatch => {
        dispatch(signingUp());
        try {
            const res = await client.mutate({
                mutation: SIGNUP,
                variables: {
                    data: {
                        email,
                        username,
                        password
                    }
                }
            });
            localStorage.setItem('authPayload', JSON.stringify(res.data.signUp));
            localStorage.setItem('token', res.data.signUp.token);
            dispatch(signUpSuccessfully(res.data.signUp));
        } catch (ex) {
            dispatch(signUpFailed());
        }
    }
}
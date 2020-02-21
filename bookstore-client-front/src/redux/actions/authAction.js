import { LOGGING_IN, LOG_IN_SUCCESSFULLY, SIGNING_UP, SIGN_UP_SUCCESSFULLY, SIGN_UP_FAILED, LOG_IN_FAILED } from "../../constants";
import { LOGIN, SIGNUP } from "../../api/authApi";

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
            dispatch(signUpSuccessfully(res.data.signUp));
        } catch (ex) {
            dispatch(signUpFailed());
        }
    }
}
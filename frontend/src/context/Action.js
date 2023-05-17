export const LoginStart =  (userCredentials) => ({
    type:"Login_Start",
});

export const LoginSuccess = (user) => ({
    type: "Login_Success",
});

export const LoginFailure = ()=>({
    type: "Login_Failure"
})
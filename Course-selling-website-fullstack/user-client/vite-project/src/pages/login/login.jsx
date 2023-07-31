import React from "react";
import LoginRegister from "../../compnents/login-register/LoginRegister";
 function Login(){
    return(<>
        <LoginRegister website="Login" login={false} register={true}/>
    </>)
};

export default Login;

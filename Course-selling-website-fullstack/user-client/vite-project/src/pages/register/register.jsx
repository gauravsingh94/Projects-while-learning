import React from "react";
import LoginRegister from "../../compnents/login-register/LoginRegister";
 function Register(){
    return(<>
        <LoginRegister website="Register" login={true} register={false}/>
    </>)
};

export default Register;

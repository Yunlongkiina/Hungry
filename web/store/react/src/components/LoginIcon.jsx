import React,{ useState } from 'react';

const LoginParent ={
    position: "absolute",
    background: "gray",
    width: "100vw",
    height: "100vh",
    paddingTop: "100px",
    left: "0",
    opacity: "0.9",
};
const LoginFormStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const InputStyle ={
    maxWidth: "200px",
    borderRadius: "25px",
}
const ButtonLogin={
    padding:"10px",
    borderRadius: "25px",
    background: "green",
}
const ButtonForgetpassword={
    padding:"10px",
    borderRadius: "25px",
    background: "red",
}
const LoginForm=()=>{
    return(
        <div style = {LoginParent}>
            <div style = {LoginFormStyle}>
                <input style = {InputStyle} name="name" type="text" placeholder="name"/>
                <input style = {InputStyle} name="password" type="text" placeholder="password"/>
                <div>
                    <button style={ButtonLogin}>Login</button>
                    <button style={ButtonForgetpassword}>Forget Password?</button>
                </div>
            </div>
        </div>
    );
}
const LoginIcon =()=>{
    const [show, setShow] = React.useState(false)
    return (
				<div>
                    <button onClick={()=>setShow(!show)}>Log In</button>
                    {
                        show? <LoginForm />: null
                    }
				</div>
		)
    };


export default LoginIcon


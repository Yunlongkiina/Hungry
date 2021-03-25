import React,{ useState } from 'react';
const LoginFormStyle = {
    position: "absolute",
    width: "100vw",
    height:"100vh",
    top:"100px",
    left:"0",
    zIndex: "10",
    background:"gray"
};
const LoginForm=()=>{
    return(
        <div style = {LoginFormStyle}>
            <input name="name" type="text" placeholder="name"/>
            <input name="password" type="text" placeholder="password"/>
            <button>Forget Password</button>
        </div>
    );
}
const LoginIcon =()=>{
    const [show, setShow] = React.useState(false)
    return (
				<div >
                    <button onClick={()=>setShow(!show)}>Log In</button>
                    {
                        show? <LoginForm />: null
                    }
				</div>
		)
    };


export default LoginIcon


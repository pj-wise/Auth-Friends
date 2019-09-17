import React from "react";

const Login = () => {
  return (
    <div>
      <form className='loginForm'>
        <input type='text' name='name' placeholder='username' />
        <input type='password' name='password' placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

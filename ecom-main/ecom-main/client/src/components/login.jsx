import './styleLogin.css';
function Login(){
    return(
        <div className='BodyLogin'>
            <title>Login Form</title>
            <div id="LoginForm">
  <h1>Login </h1>
  <input
    id="Uname"
    type="text"
    placeholder="Username"
    name="UserN"
    defaultValue=""
  />
  <input
    id="Pwsd"
    type="password"
    placeholder="Password"
    name="PassN"
    defaultValue=""
  />
  <p id="incorrect">Username or Password Incorrect</p>
  <input
    id="Buttonl"
    type="button"
    onclick="validate()"
    placeholder="Username"
    name="UserN"
    defaultValue="Login"
  />
  <center>
    <br />
    <a href="/register">Don't have an account?</a>
    <a href="/error">Forgot Password?</a>
    <br />
    <a href="/">Back to HomePage</a>
  </center>
</div>

        </div>
    )
}

export default Login;

import style from './style.module.css'


const Login = () => {
  return (
    <>
        <div className={style.main}>
            <p className={style.head}>Login Form</p>

            <div className={style.contaner}>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter your Email" />
            </div>

            <div className={style.password}>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your Password" />
            </div>

            <button className={style.btn}>Sign In</button>
            <div className={style.addtext}>
            <p >Forgot My Password</p>
            <p >Not Account</p>
            </div>

            </div>

        </div>
    </>
  )
}

export default Login

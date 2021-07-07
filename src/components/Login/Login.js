import React from "react";
import {reduxForm} from "redux-form";
import {Input, createField} from "../common/FromControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.sass"

const LoginForm = ({handleSubmit,error, captchaUrl}) =>  {
    return (
        <form onSubmit={handleSubmit} className={classes.loginForm}>
            {createField("Email", "email", [required], Input,{type: "email", className:classes.formInput}) }
            {createField("Password", "password", [required], Input, {type: "password",className:classes.formInput}) }

            { captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            { captchaUrl && createField("Введите текст", "captcha", [required], Input)      }

            { error && <div className={classes.formSummaryError}> <span>{error}</span> </div>
            }
            <button className={classes.mainBtn}>Login</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) =>  {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default  connect(mapStateToProps, {login})(Login);

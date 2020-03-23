import React from "react";
import {reduxForm} from "redux-form";
import {Input, createField} from "../common/FromControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.sass"

//const LoginForm = (props) =>  {   // деструктр.
const LoginForm = ({handleSubmit,error, captchaUrl}) =>  {
    return (
        <form onSubmit={handleSubmit} className={classes.loginForm}>
            {createField("Email", "email", [required], Input,{type: "email", className:classes.formInput}) }
            {createField("Password", "password", [required], Input, {type: "password",className:classes.formInput}) }


          {/*
          {createField("rememberMe", null, "rememberMe", [], Input, {type: "checkbox"}, "remember me") }

          <div>
                <Field placeholder={"Email"}
                       component={Input}
                       name={"email"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} name={"password"} type="password"
                       validate={[required]}
                />
            </div>
            */}
            {/*<div>*/}
            {/*    <Field type="checkbox" component={Input} name={"rememberMe"}/> Remember me*/}
            {/*</div>*/}
            { captchaUrl && <img src={captchaUrl}/>}
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
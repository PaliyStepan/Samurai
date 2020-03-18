import React from "react";
import {reduxForm} from "redux-form";
import {Input, сreateField} from "../common/FromControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "./Login.module.sass"

//const LoginForm = (props) =>  {   // деструктр.
const LoginForm = ({handleSubmit,error}) =>  {
    return (
        <form onSubmit={handleSubmit}>
            {сreateField("Email", "email", [required], Input) }
            {сreateField("Password", "password", [required], Input, {type: "password"}) }
            {сreateField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me") }

          {/*  <div>
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
            { error && <div className={classes.formSummaryError}> {error}</div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) =>  {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default  connect(mapStateToProps, {login})(Login);
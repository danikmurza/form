import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from "../login/login";
import Registration from "../login/registration";
import TodoList from "../posts/todo-list";
import CreateTodoTask from "../posts/create-todo-task";
import NavBar from '../posts/navbar';
import Footer from '../posts/footer';
import {useToken} from "./use-token";
import Avatar from "../posts/avatar";
import SetNewPassword from "../login/setNewPassword";
import RecoveryPassword from '../login/recovery-password'
import Google from "../login/google";
import Account from "../login/account";

export const App =()=> {
    const { token, setToken } = useToken();
    if (token) {
        return (
            <>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={ TodoList }/>
                    <Route path="/create" component={ CreateTodoTask }/>
                    <Route path="/account" component={Account}/>
                    <Route path="/avatar" component={Avatar}/>
                    <Redirect to="/" from="/*"/>
                </Switch>
                <Footer/>
            </>
        )
    } if (!token) {
        return (
            <>
                <Switch>
                    <Route exact path="/"><LoginPage setToken={ setToken } /></Route>
                    <Route path="/registration" ><Registration setToken={ setToken }/></Route>
                    <Route path="/google/:token" component={Google}/>
                    <Route path="/new_password/:token" component={SetNewPassword}/>
                    <Route path="/recovery_password" component={RecoveryPassword}/>
                    <Redirect to="/" from="/*"/>
                </Switch>
            </>
        )
    }

}




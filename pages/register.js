import React, { useState, useContext } from 'react';
import Router from 'next/router';
import Layout from '../containers/layout/layout.container';
import Card from '../containers/auth.card/auth.card.container';
import Input from '../components/custom.input/custom.input.component';
import Button from '../components/custom.button/custom.button.component';
import style from '../styles/signin.module.scss';
import { userInputValidator } from '../helper/auth.input.validator';
import { StateContext } from '../context/app.context';
import { useCookies } from 'react-cookie';

const Register = () => {
    const [cookies, setCookie] = useCookies(['token']);
    const { dispatch } = useContext(StateContext);

    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
        isAdmin: false,
        adminCode: "",
        error: ""
    });


    const handleChange = ({ target }) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [name]: value,
            error: ""
        })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        dispatch({ type: "START LOADING" })
        try {
            const {
                username,
                email,
                password,
                cpassword,
                isAdmin,
                adminCode
            } = formState;
            const validated = userInputValidator(formState);
            if (validated) {
                const body = {
                    username,
                    email,
                    password,
                    cpassword,
                    isAdmin,
                    adminCode
                };
                const res = await fetch('/api/register', {
                    method: 'POST',
                    body: JSON.stringify(body),
                });
                const data = await res.json();
                if (data.Error) {
                    throw new Error(data.Error)
                }
                console.log(data);
                setCookie('token', data.token);
                dispatch({
                    type: "SET AUTH",
                    payload: data,

                });
                resetState();
            }
        } catch (error) {
            dispatch({ type: "STOP LOADING" });
            setFormState({
                ...formState,
                error: error.message
            })
        }
    }

    const resetState = () => {
        setFormState({
            username: "",
            email: "",
            password: "",
            cpassword: "",
            isAdmin: false,
            adminCode: "",
            error: "",
        });
        dispatch({ type: "STOP LOADING" })
    }

    const handleTypeSelect = (type) => {
        switch (type) {
            case 'admin':
                return setFormState({
                    ...formState,
                    isAdmin: true,
                });
            case 'author':
                return setFormState({
                    ...formState,
                    isAdmin: false,
                });
            default:
                return formState
        }
    }


    const userForm = (
        <>
            <Input
                name="username"
                type="text"
                placeholder="User Name"
                value={formState.username}
                onChange={handleChange}
                required={true}
            />
            <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
                required={true}
            />
            <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}
                required={true}
            />
            <Input
                name="cpassword"
                type="password"
                placeholder="Confirm Password"
                value={formState.cpassword}
                onChange={handleChange}
                required={true}
            />
            <Input
                name="adminCode"
                type="password"
                placeholder="admin Code"
                value={formState.adminCode}
                onChange={handleChange}
                required={true}
            />
        </>
    )

    const errorIndicator = (
        <div
            className="error"
            style={{ margin: "1rem auto", width: "90%" }}
        >
            {formState.error}
        </div>
    )

    return (
        <>
            <Layout>
                <div className={style.signin}>
                    <Card>
                        <div className="headerMd">
                            Register
                            </div>
                        <div className="authTypeSection mt">
                            <Button
                                onClick={
                                    () => handleTypeSelect('admin')
                                }
                                block={true}
                                isActive={formState.isAdmin}
                                type="text"
                            >ADMIN</Button>
                            <Button
                                onClick={
                                    () => handleTypeSelect('author')
                                }
                                block={true}
                                isActive={!formState.isAdmin}
                                type="text"
                            >AUTHOR</Button>
                        </div>
                        {formState.error && errorIndicator}
                        <form
                            onSubmit={handleSubmit}
                        >
                            {userForm}
                            <div style={{ width: "90%", margin: "auto" }}>
                                <Button
                                    type="submit"
                                    block={true}
                                >
                                    SIGN UP
                                    </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </Layout>
            <style jsx>
                {
                    `
                    .br{
                        border-rigth: 1px solid #00000040;
                    }
                    .mt{
                        margin-top: 1rem
                    }
                    `
                }
            </style>
        </>
    )

}

export default Register;
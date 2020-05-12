import React, { useState, useContext } from 'react';
import { loginUser } from '../firebase/firebase.auth';
import { StateContext } from '../context/app.context'
import Router from 'next/router';
import Layout from '../containers/layout/layout.container';
import Card from '../containers/auth.card/auth.card.container';
import Input from '../components/custom.input/custom.input.component';
import Button from '../components/custom.button/custom.button.component';
import style from '../styles/signin.module.scss';



const SignIn = () => {
    const { dispatch } = useContext(StateContext);

    const [formState, setFormState] = useState({
        email: "",
        password: "",
        user: false,
        escort: true,
        error: ""
    })

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        dispatch({ type: "START LOADING" })
        const { email, password, escort } = formState;
        let user;
        if (escort) {
            user = await loginUser(email, password, 'escorts')
        } else {
            user = await loginUser(email, password, 'users')
        }
        if (user.error) {
            dispatch({ type: "STOP LOADING" })

            return setFormState({
                ...formState,
                error: user.error
            })
        }
        resetForm();
        return Router.push('/profile');
    }

    const resetForm = () => {
        setFormState({
            email: "",
            password: "",
            user: false,
            escort: true,
            error: ""
        });
        dispatch({ type: "STOP LOADING" });
    }

    const handleChange = ({ target }) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [name]: value,
            error: ""
        })
    }

    const handleTypeSelect = (type) => {
        switch (type) {
            case 'user':
                return setFormState({
                    ...formState,
                    user: true,
                    escort: false
                });
            case 'escort':
                return setFormState({
                    ...formState,
                    user: false,
                    escort: true
                });
            default:
                return formState
        }
    }


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
                            Sign In
                        </div>
                        <div className="authTypeSection mt">
                            <Button
                                onClick={
                                    () => handleTypeSelect('escort')
                                }
                                block={true}
                                isActive={formState.escort}
                                type="text"
                            >HELLO</Button>
                            <Button
                                onClick={
                                    () => handleTypeSelect('user')
                                }
                                block={true}
                                isActive={formState.user}
                                type="text"
                            >USER</Button>
                        </div>
                        {formState.error && errorIndicator}
                        <form
                            onSubmit={handleSubmit}
                        >
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
                            <div style={{ width: "90%", margin: "auto" }}>
                                <Button
                                    type="submit"
                                    block={true}
                                >
                                    LOGIN
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

export default SignIn;
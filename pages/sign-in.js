import React, { useState, useContext } from 'react';
import { StateContext } from '../context/app.context'
import Router from 'next/router';
import Layout from '../containers/layout/layout.container';
import Card from '../containers/auth.card/auth.card.container';
import Input from '../components/custom.input/custom.input.component';
import Button from '../components/custom.button/custom.button.component';
import style from '../styles/signin.module.scss';
import { loginValidator } from '../helper/auth.input.validator';
import { useCookies } from 'react-cookie';


const SignIn = () => {
    const { dispatch } = useContext(StateContext);
    const [cookies, setCookie] = useCookies(['token']);

    const [formState, setFormState] = useState({
        email: "",
        password: "",
        error: ""
    });

    const handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            dispatch({ type: "START LOADING" });
            const { email, password } = formState;
            const body = { email, password };
            const validate = loginValidator(body)
            if (validate) {
                const res = await fetch('/api/login', {
                    method: 'POST',
                    body: JSON.stringify(body)
                });
                const data = await res.json();
                if (data) {
                    setCookie('token', data.token);
                    dispatch({
                        type: "SET AUTH",
                        payload: data,

                    });
                    resetForm();
                }
            }
        } catch (error) {
            return setFormState({
                ...formState,
                error: user.error
            })
        }
        //return Router.push(`/${type}/${user.user.uid}`);
    }

    const resetForm = () => {
        setFormState({
            email: "",
            password: "",
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
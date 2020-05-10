import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../containers/layout/layout.container';
import Card from '../containers/auth.card/auth.card.container';
import Input from '../components/custom.input/custom.input.component';
import Button from '../components/custom.button/custom.button.component';
import CustomSelect from '../components/custome.select/custom.select.component';
import Textarea from '../components/custom.textarea/custom.textarea.component';
import style from '../styles/signin.module.scss';
import { states, gender, bodyType } from '../helper/select.options';
import { userInputValidator } from '../helper/auth.input.validator';
import { registerNewUser } from '../firebase/firebase.auth';

const Register = () => {
    const [formState, setFormState] = useState({
        displayName: "",
        email: "",
        password: "",
        cpassword: "",
        mobile: "",
        sex: "",
        birthdate: "",
        location: "",
        bodyType: "",
        bio: "Enter Bio. This will appear on every search",
        user: false,
        escort: true,
        error: ""
    })


    const handleChange = ({ target }) => {
        const { value, name } = target;
        if (name === 'bio' && value.length > 150) {
            return null
        };
        setFormState({
            ...formState,
            [name]: value,
            error: ""
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { displayName,
            email,
            password,
            cpassword,
            mobile,
            sex,
            birthdate,
            location,
            bodyType,
            bio,
            user,
        } = formState
        const obj = {
            displayName,
            email,
            password,
            cpassword,
            mobile,
            sex,
            birthdate,
            location,
        }
        if (user) {
            return handleUserReg(obj)
        }

        const escortObj = { ...obj, bodyType, bio }
        return handleEscortReg(escortObj)
    }

    const handleUserReg = async (obj) => {
        try {
            userInputValidator(obj)
            const registered = await registerNewUser(obj, 'users')
            if (registered.error) {
                throw new Error(registered.error)
            }
            resetState();
            return Router.push('/sign-in')
        } catch (err) {
            setFormState({
                ...formState,
                error: err.message
            })
        }
    }

    const handleEscortReg = async (obj) => {
        try {
            userInputValidator(obj)
            const registered = await registerNewUser(obj, 'escorts');
            if (registered.error) {
                throw new Error(registered.error)
            }
            resetState();
            return Router.push('/sign-in')
        } catch (err) {
            setFormState({
                ...formState,
                error: err.message
            })
        }
    }

    const resetState = () => {
        setFormState({
            displayName: "",
            email: "",
            password: "",
            cpassword: "",
            mobile: "",
            sex: "",
            birthdate: "",
            location: "",
            bodyType: "",
            bio: "Enter Bio. This will appear on every search",
            user: false,
            escort: true,
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


    const userForm = (
        <>
            <Input
                name="displayName"
                type="text"
                placeholder="Display Name"
                value={formState.displayName}
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
                name="mobile"
                type="tel"
                placeholder="Mobile"
                value={formState.mobile}
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
            <CustomSelect
                options={gender}
                label="Select Gender"
                name="sex"
                value={formState.sex}
                onChange={handleChange}
                required={true}
            />
            <div className={style.label}>Date of Birth</div>
            <Input
                name="birthdate"
                type="date"
                placeholder="Birth Date"
                value={formState.birthdate}
                onChange={handleChange}
                required={true}
            />

            <CustomSelect
                options={states}
                label="Select Location"
                name="location"
                value={formState.location}
                onChange={handleChange}
                required={true}
            />
        </>
    )

    const escortForm = (
        <>
            <CustomSelect
                options={bodyType}
                label="Select Body Type"
                name="bodyType"
                value={formState.bodyType}
                onChange={handleChange}
                required={true}
            />
            <Textarea
                value={formState.bio}
                name="bio"
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
                            {userForm}
                            {formState.escort && escortForm}
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
import React from 'react';
import Layout from '../containers/layout/layout.container';
import Card from '../containers/auth.card/auth.card.container';
import Input from '../components/custom.input/custom.input.component';
import Button from '../components/custom.button/custom.button.component';
import CustomSelect from '../components/custome.select/custom.select.component';
import Textarea from '../components/custom.textarea/custom.textarea.component';
import style from '../styles/signin.module.scss';
import { states, gender, bodyType } from '../helper/select.options';
import { userInputValidator } from '../helper/auth.input.validator';

class Register extends React.Component {
    constructor() {
        super()

        this.state = {
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
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleTypeSelect = this.handleTypeSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserReg = this.handleUserReg.bind(this);
        this.handleEscortReg = this.handleEscortReg.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    handleChange({ target }) {
        const { value, name } = target;
        if (name === 'bio' && value.length > 150) {
            return null
        };
        this.setState({
            [name]: value,
            error: ""
        })
    }

    handleSubmit(evt) {
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
        } = this.state
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
            return this.handleUserReg(obj)
        }

        const escortObj = { ...obj, bodyType, bio }
        return this.handleEscortReg(escortObj)
    }

    handleUserReg(obj) {
        try {
            userInputValidator(obj)
            this.resetState()
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }

    handleEscortReg(obj) {
        try {
            userInputValidator(obj)
            this.resetState()
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }

    resetState() {
        this.setState({
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

    handleTypeSelect(type) {
        switch (type) {
            case 'user':
                return this.setState({
                    user: true,
                    escort: false
                });
            case 'escort':
                return this.setState({
                    user: false,
                    escort: true
                });
            default:
                return this.state
        }
    }


    render() {
        const userForm = (
            <>
                <Input
                    name="displayName"
                    type="text"
                    placeholder="Display Name"
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    required={true}
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required={true}
                />
                <Input
                    name="mobile"
                    type="tel"
                    placeholder="Mobile"
                    value={this.state.mobile}
                    onChange={this.handleChange}
                    required={true}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required={true}
                />
                <Input
                    name="cpassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={this.state.cpassword}
                    onChange={this.handleChange}
                    required={true}
                />
                <CustomSelect
                    options={gender}
                    label="Select Gender"
                    name="sex"
                    value={this.state.sex}
                    onChange={this.handleChange}
                    required={true}
                />
                <div className={style.label}>Date of Birth</div>
                <Input
                    name="birthdate"
                    type="date"
                    placeholder="Birth Date"
                    value={this.state.birthdate}
                    onChange={this.handleChange}
                    required={true}
                />

                <CustomSelect
                    options={states}
                    label="Select Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleChange}
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
                    value={this.state.bodyType}
                    onChange={this.handleChange}
                    required={true}
                />
                <Textarea
                    value={this.state.bio}
                    name="bio"
                    onChange={this.handleChange}
                    required={true}
                />
            </>
        )

        const errorIndicator = (
            <div
                className="error"
                style={{ margin: "1rem auto", width: "90%" }}
            >
                {this.state.error}
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
                                        () => this.handleTypeSelect('escort')
                                    }
                                    block={true}
                                    isActive={this.state.escort}
                                    type="text"
                                >HELLO</Button>
                                <Button
                                    onClick={
                                        () => this.handleTypeSelect('user')
                                    }
                                    block={true}
                                    isActive={this.state.user}
                                    type="text"
                                >USER</Button>
                            </div>
                            {this.state.error && errorIndicator}
                            <form
                                onSubmit={this.handleSubmit}
                            >
                                {userForm}
                                {this.state.escort && escortForm}
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
}

export default Register;
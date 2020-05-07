import React from 'react';
import Layout from '../containers/layout/layout.container';
import Card from '../containers/auth.card/auth.card.container';
import Input from '../components/custom.input/custom.input.component';
import Button from '../components/custom.button/custom.button.component';
import style from '../styles/signin.module.scss';

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: "",
            user: false,
            escort: true,
            error: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleTypeSelect = this.handleTypeSelect.bind(this);
    }

    handleChange({ target }) {
        const { value, name } = target;
        this.setState({
            [name]: value
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

        const errorIndicator = (
            <div 
            className="error"
            style={{margin: "1rem auto", width: "90%"}}
            >
                {this.state.error }
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
                            <form>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
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
}

export default SignIn;
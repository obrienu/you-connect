import React, { useContext, useState } from 'react';
import Layout from '../containers/layout/layout.container';
import { AuthContext } from '../context/auth.context';
import Button from '../components/custom.button/custom.button.component';
import { verifyUserAccount } from '../firebase/firebase.auth';


const VerifyUserAccount = () => {
    const [verificationSent, setVerificationSent] = useState(false)
    const handleClick = () => setVerificationSent(verifyUserAccount());

    const { isAuthenticated } = useContext(AuthContext);
    return (
        <Layout>
            {
                isAuthenticated &&
                <div className="userVerificationPage">
                    <h1 className="headerMd">User Account Verification</h1>
                    {verificationSent ?
                        <p>A new verification link has been sent to your email address {isAuthenticated.email} . Please check your inbox and click the verification link</p>
                        :
                        <>
                            <p>Your account is yet to be verified. Please check your email {isAuthenticated.email} for a verification link</p>
                            <p>If you do not get this email please Click the button below to recieve a new verification link</p>
                            <div style={{ margin: "auto" }}>
                                <Button
                                    onClick={handleClick}
                                >RESEND VERIFICATION EMAIL</Button>
                            </div>
                        </>
                    }
                </div>
            }
        </Layout>
    );
}

export default VerifyUserAccount;

import React, { useContext, useEffect } from 'react';
import { StateContext } from '../../context/app.context';
import Router, { useRouter } from 'next/router';
import { getProfile } from '../../helper/user.action';
import Layout from '../../containers/layout/layout.container';

function Post() {
    const { dispatch, isLoading, profile, isAuthenticated } = useContext(StateContext);
    const { id } = useRouter().query;
    useEffect(() => {
        if (!isAuthenticated) Router.push('/sign-in')
        // getProfile(id, "users");
    }, [isAuthenticated])
    return (
        <Layout>

        </Layout>
    )
}

export default Post
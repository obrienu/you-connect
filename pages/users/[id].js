import React, { useContext, useEffect } from 'react';
import { StateContext } from '../../context/app.context';
import Router, { useRouter } from 'next/router';
import { getProfile } from '../../helper/user.action';
import Layout from '../../containers/layout/layout.container'
function Post() {
    const { dispatch, isLoading, profile, isAuthenticated } = useContext(StateContext);


    useEffect(async () => {
        if (isAuthenticated) {
            dispatch({ type: "START LOADING" })
            const { id } = useRouter().query;
            const userProfile = await getProfile(id, "users");
        } else {
            dispatch({ type: "START LOADER" });
        }
    }, [isAuthenticated]);
    return (
        <Layout>

        </Layout>
    )
}

export default Post
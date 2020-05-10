import React, { useContext } from 'react';
import { AuthContext } from '../context/auth.context'
import Layout from '../containers/layout/layout.container';

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated)
  return (
    <div className="container">
      <Layout>

      </Layout>

    </div>
  )
}

export default Home;
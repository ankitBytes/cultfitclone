import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../Images/cult.jpg';
import '../Styles/HomeStyles.css';
const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`}}>
         <div className="headerContainer">
          <h1>TRAINING</h1>
          <p>Best Fitness</p>
          <Link to="/">
          <button>
            TRY FOR FREE
          </button>
          </Link>
         </div>
        </div>
    </Layout>
  );
};

export default Home;
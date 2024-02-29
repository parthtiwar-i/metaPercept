import React, { Fragment } from "react";
import Header from "./Header";
import "./home.css";
import Card from "./Card";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="container1">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          repudiandae, facere iusto ab quisquam cum.
        </p>
        <button>Read More</button>
      </div>
      <div className="container2">
        <div className="top">
        <h1>Classes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit
          deleniti nisi magni earum reprehenderit voluptatem modi voluptates,
          laboriosam provident.
        </p>
        </div>
        <div className="cards">
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
            <Card/> 
        </div>
      </div>

      <div className="footer">
        all right reserved
      </div>
    </Fragment>
  );
};

export default Home;

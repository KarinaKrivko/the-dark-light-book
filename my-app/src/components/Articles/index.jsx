import React from "react";
import { NavLink } from "react-router-dom";
import s from "./styles.module.css";

function Articles(props) {
  return (
    <div>
    <div className={s.learn_block}>
      <NavLink to="/articles" />
      <div>
        <h1>What Will You Learn?</h1>
        <img className={s.yellow} src={require("./images/yellow_line.png")} />
  
      <div className={s.grid_container}>
        <div className={s.grid_1}>
          Use HDFS & Map Reduce for storing & analyzing data at scale.
        </div>
        <div className={s.grid_2}>
          Consume streaming data using Spark Streaming, Flink, and Storm.
        </div>
        <div className={s.grid_3}>
          Choose an appropriate data storage technology for your application.
        </div>
        <div className={s.grid_4}>
          Analyze non-relational data using HBase, Cassandra, and MongoDB.
        </div>
      </div>
      <div>
        <img className={s.reading_pic} src={require("./images/reading.png")} />
      </div>
    </div>
    </div>
    <div className={s.resources_block}>
    <h2>Articles & Resources</h2>
            <img className={s.linie} src={require("./images/yellow_line.png")} />
            <div className={s.second_container}>
  <img className={s.grid_one} src={require("./images/one.png")} />
  <img className={s.grid_two} src={require("./images/two.png")} />
  <img className={s.grid_three} src={require("./images/three.png")} />
  </div>
  <div className={s.context_container}>
    <div className={s.context_one}>
      <p className={s.p1}>Significant reading has more info number</p>
      <p className={s.p2}>Override the digital divide with<br></br> additional clickthroughs from DevOps<br></br>  for real-time schemas.</p>
      <p className={s.p3}>October 6, 2021</p>
    </div>
    <div className={s.context_two}>
      <p className={s.p1}>Many variations of pass majority have suffered</p>
      <p className={s.p2}>Capitalize on low-hanging fruit to  <br></br> identify a ballpark value-added activity   <br></br> to beta test.</p>
      <p className={s.p3}>October 6, 2021</p>
    </div>
    <div className={s.context_three}>
      <p className={s.p1}>Words which don’t look even slightly believable</p>
      <p className={s.p2}>Podcasting operational change <br></br>  management inside of workflows <br></br>  to  establish a framework.</p>
      <p className={s.p3}>October 6, 2021</p>
    </div>
  </div>
    </div>
    </div>

  );
}

export default Articles;

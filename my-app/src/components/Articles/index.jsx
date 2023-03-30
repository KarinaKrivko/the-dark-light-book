import React from "react";
import { NavLink } from "react-router-dom";
import s from "./styles.module.css";

function Articles(props) {
  return (
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
  );
}

export default Articles;

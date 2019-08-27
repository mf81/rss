import React, { Component } from "react";

const Like = props => {
  let like = props.liked;
  like === true ? (like = "fa fa-heart") : (like = "fa fa-heart-o");
  return (
    <i
      onClick={props.onLike}
      className={like}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;

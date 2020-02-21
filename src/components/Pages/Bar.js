import React from "react";
import { Link } from "react-router-dom";



const Bar = props => {
  return (
    <React.Fragment>
      <div className="main-content div-name">
        <h3 key="{props.id}"></h3>
        <h1>{props.title}</h1>
        <h3>{props.address}</h3>
        <p className="bar-content">{props.description}</p>
        <Link to={`/Bar/${props.id}`}>En savoir plus</Link>
        {/* <h3>{`nbLike  ${props.nbLike}`}</h3> */}
        <a
          href="#"
          href="#"
          onClick={() => {
            
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {`Likes  ${props.nbLike}`}
        </a>
        <addLike
          likes={props.likes}
          setLikes={props.setLikes}
          useLikes={props.useLikes}
        ></addLike>
      </div>
    </React.Fragment>
  );
};

export default Bar;

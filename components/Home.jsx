import React from "react";

function Home(props) {
  return (
    <React.Fragment>
      <div className="container">
        <h1>
          Home {props.currentUser.firstName} {props.currentUser.lastName}
        </h1>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Home;

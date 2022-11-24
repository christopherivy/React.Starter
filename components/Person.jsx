import React from "react";
import { useNavigate } from "react-router-dom";

function Person(props) {
  //   console.log("Person", props.person);
  const aPerson = props.person;

  const onLocalPersonDeleteClicked = (e) => {
    e.preventDefault();
    props.onPersonClicked(aPerson, e);
  };

  const navigate = useNavigate();

  const onEditButtonClicked = () => {
    const updating = { type: "updateFriend", payload: props.person };
    //  console.log(updating);

    navigate(`addFriend/${aPerson.id}`, { state: updating });
    //  console.log(updating);
  };

  return (
    <div className="col-md-2">
      <div className="card mb-3">
        <img src={aPerson.primaryImage.url} onClick={onLocalPersonDeleteClicked} alt="" />
        <div className="card-body">
          <h5 className="card-title">{aPerson.title}</h5>
          <p className="card-text"> {aPerson.bio} </p>
          <p className="random"> </p>
          <div className="button-group" style={{ justify: "center" }}>
            <button type="button" className="mx-1 btn btn-primary " onClick={onEditButtonClicked}>
              Edit
            </button>
            <button className="mx-1 btn btn-primary " onClick={onLocalPersonDeleteClicked}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Person);

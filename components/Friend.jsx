import React from "react";
import { useNavigate } from "react-router-dom";

function Friend(props) {
  //   console.log("Friend", props.friend);
  const aFriend = props.friend;

  const onLocalFriendDeleteClicked = (e) => {
    e.preventDefault();
    props.onFriendClicked(aFriend, e);
  };

  const navigate = useNavigate();

  const onEditButtonClicked = () => {
    const updating = { type: "updateFriend", payload: props.friend };
    //  console.log(updating);

    navigate(`addFriend/${aFriend.id}`, { state: updating });
    //  console.log(updating);
  };

  return (
    <div className="col-md-2">
      <div className="card mb-3">
        <img src={aFriend.primaryImage.url} onClick={onLocalFriendDeleteClicked} alt="" />
        <div className="card-body">
          <h5 className="card-title">{aFriend.title}</h5>
          <p className="card-text"> {aFriend.bio} </p>
          <p className="random"> </p>
          <div className="button-group" style={{ justify: "center" }}>
            <button type="button" className="mx-1 btn btn-primary " onClick={onEditButtonClicked}>
              Edit
            </button>
            <button className="mx-1 btn btn-primary " onClick={onLocalFriendDeleteClicked}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Friend);

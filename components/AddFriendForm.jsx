import React, { useState, useEffect } from "react";
import userService from "../services/userService";
import toastr from "toastr";
import { useLocation } from "react-router-dom";

function AddfriendForm() {
  // ====================================== FORM DATA ===============================================

  const { state } = useLocation(); // USELOCATION LETS ME USE STATE PASSED FROM ANOTHER PAGE VIA USENAVIGATE.
  //   console.log(state);

  const [addFriendData, setAddFriendData] = useState({
    title: "",
    bio: "",
    summary: "Lorem Ipsum is simply dummy text.",
    headline: "Lorem Ipsum is simply dummy text.",
    slug: "slug34",
    statusId: "active",
    imageUrl: "",
    ImageTypeId: "",
    id: "",
  });

  //   [count, setCount]= useState()
  useEffect(() => {
    if (state?.type === "updateFriend" && state.payload) {
      // console.log(state.payload);
      const imgUrl = state.payload.primaryImage.imageUrl;

      setAddFriendData((prevState) => {
        //   console.log(prevState, state.payload, "prvSt");
        const newFriendUpdate = { ...prevState, ...state.payload }; // this is what is making my page populated.
        //   console.log(newFriendUpdate);
        newFriendUpdate.primaryImage = imgUrl;
        return newFriendUpdate;
      });
    }
  }, [state]);

  //   useEffect(() => {
  //     console.log("useEffect");

  //     userService.updateFriend(state.id).then().catch();
  //   }, [state]);

  const onFormFieldChange = (e) => {
    let target = e.target;
    let newUserValue = target.value;
    let nameOfField = target.name;
    //  console.log({ nameOfField, newUserValue });
    setAddFriendData((prevState) => {
      let newUserObject = {
        ...prevState,
      };
      newUserObject[nameOfField] = newUserValue;
      return newUserObject;
    });
  };

  // ====================================== MEDIUM EXAMPLE ======================================

  // ====================================== MEDIUM EXAMPLE ======================================

  // ====================================== AJAX CALL ======================================

  const onClickAddFriend = (e) => {
    e.preventDefault();
    let payload = addFriendData;
    //  console.log(payload);

    if (!payload.id) {
      userService.addFriend(payload).then(onAddFriendSuccess).catch(onAddFriendError);
    } else {
      userService.updateFriend(payload.id, payload).then(onUpdateFriendSuccess).catch(onUpdateFriendError);
    }
  };

  const onAddFriendSuccess = (response) => {
    //  console.log(response);
    setAddFriendData((prevState) => {
      const addNewFriendId = { ...prevState };

      addNewFriendId.id = response.data.item;
      return addNewFriendId;
    });
    console.log("you did it!", response);
    toastr.success("Friend Successfully Added!");
  };

  const onUpdateFriendSuccess = (response) => {
    false && console.log(response);
    toastr.info("Friend Successfully Updated!");
  };
  const onUpdateFriendError = (error) => {
    console.log(error);
    toastr.error("Friend Not Updated!");
  };

  const onAddFriendError = (error) => {
    console.log("Error.", error);
    toastr.error("Friend Not Added!");
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Add a Friend</h1>
      </div>
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-md-5">
              <form>
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="title" name="title" placeholder="Enter Your Title" value={addFriendData.title} onChange={onFormFieldChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="bio" className="form-label">
                    Bio
                  </label>
                  <input type="text" className="form-control" id="bio" name="bio" placeholder="Enter your Bio" value={addFriendData.bio} onChange={onFormFieldChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="summary" className="form-label">
                    Summary
                  </label>
                  <input type="text" className="form-control" id="summary" name="summary" placeholder="Enter your Summary" value={addFriendData.summary} onChange={onFormFieldChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="headline" className="form-label">
                    Headline
                  </label>
                  <input type="text" className="form-control" id="headline" name="headline" placeholder="Enter your Headline" value={addFriendData.headline} onChange={onFormFieldChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="slug" className="form-label">
                    Slug
                  </label>
                  <input type="text" className="form-control" id="slug" name="slug" placeholder="Enter your slug" value={addFriendData.slug} onChange={onFormFieldChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="statusId" className="form-label">
                    StatusId
                  </label>
                  <input type="text" className="form-control" id="statusId" name="statusId" placeholder="Enter your Bio" value={addFriendData.statusId} onChange={onFormFieldChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="imageUrl" className="form-label">
                    Image Url
                  </label>
                  <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="Enter your PrimaryImage Url" value={addFriendData.url} onChange={onFormFieldChange} />
                </div>
                <button type="submit" className="btn btn-primary mt-2" onClick={onClickAddFriend}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default AddfriendForm;

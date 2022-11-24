import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
// import "rc-pagination/assets/index.css";
// import locale from "rc-pagination/lib/locale/en_US";

import userService from "../../services/userService";
import Person from "../Person";

function Friends() {
  const [pageData, setPageData] = useState({ arrayOfPeople: [], peopleComponents: [] });
  const [count, setCount] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  //   false && console.log(pageData.arrayOfPeople);

  //   console.log(pageData.arrayOfPeople);

  // ============================ THIS USED TO TARGET AND DELETE A SPECIFIC CARD ===========================DELETE==============
  const onDeleteRequested = useCallback((myPerson, eObj) => {
    console.log(myPerson.id, { myPerson, eObj });

    const handler = getDeleteSuccessHandler(myPerson.id);

    userService.deletePerson(myPerson.id).then(handler).catch(onDeleteError);
  }, []);

  const getDeleteSuccessHandler = (idToBeDeleted) => {
    //  console.log("getDeleteSuccessHandler", idToBeDeleted);
    return () => {
      // console.log("onDeleteSuccess:", idToBeDeleted);

      setPageData((prevState) => {
        const pd = { ...prevState };

        pd.arrayOfPeople = [...pd.arrayOfPeople];

        const idxOf = pd.arrayOfPeople.findIndex((person) => {
          let result = false;

          if (person.id === idToBeDeleted) {
            result = true;
          }
          return result;
        });
        if (idxOf >= 0) {
          pd.arrayOfPeople.splice(idxOf, 1);
          pd.peopleComponents = pd.arrayOfPeople.map(mapPerson);
        }
        return pd;
      });
    };
  };

  const onDeleteError = (error) => {
    console.log("There is an Error here.", error);
  };

  //   ======================= USER SERVICES FOR SEARCH ======================================================SEARCH=============
  const onClickSearchFriend = (e) => {
    e.preventDefault();

    userService.searchFriend(0, 3, "e").then(onSearchFriendSuccess).catch(onSearchFriendError);
    console.log("Search clicked!!");
  };

  const onSearchFriendSuccess = (response) => {
    console.log(response, "Success");
  };
  const onSearchFriendError = (error) => {
    console.log(error, "Error");
  };

  //   ======================== THIS USED TO MAP. IS ALSO USING PROPS TO MAP OVER THE PERSON COMPONENT ==========MAPPING=======
  const mapPerson = (aPerson) => {
    //  console.log("mapping", aPerson);
    return <Person person={aPerson} key={"ListA-" + aPerson.id} onPersonClicked={onDeleteRequested}></Person>;
  };

  //   ======================= USER SERVICES FOR THIS ======================================================SERVICE=============
  useEffect(() => {
    userService.getPeople().then(onGetPeopleSuccess).catch(onGetPeopleError);
  }, []);

  //   ==================== SUCCESS ON AJAX CALL ===========================================================AJAX ==============
  const onGetPeopleSuccess = (response) => {
    console.log("Response:", response);
    let arrayOfPeopleIWant = response.data.item.pagedItems;
    //  console.log({ arrayOfPeopleIWant });

    // ============ CONTROLLING STATE ISOLATED TO THAT PARTICULAR COMPONENT ============================SETSTATE =============
    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.arrayOfPeople = arrayOfPeopleIWant;
      pd.peopleComponents = arrayOfPeopleIWant.map(mapPerson);

      return pd;
    });
  };

  const onGetPeopleError = (error) => {
    console.log(error, "There is an error here ");
  };
  //   ==================== ERROR ON AJAX CALL ===========================================================AJAX ==============

  const onHeaderClicked = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  //   =================== TOGGLE RENDER TO THE PAGE ==================================================== TOGGLE ===========
  const onClickToggleContent = () => {
    setIsToggled(!isToggled);

    //  console.log("Button Clicked!");
  };

  return (
    <React.Fragment>
      <div className="container">
        <button className="btn btn-primary mx-2 mb-2" onClick={onClickToggleContent}>
          Toggle Friends
        </button>
        <Link to="/addFriend" className="btn btn-primary mx-2 mb-2">
          Add Friends
        </Link>
        <div className="input-group ">
          <div className="form-outline">
            <input type="search" id="form1" className="form-control " placeholder="Enter Search Term" />
          </div>
          <button type="button" className="btn btn-primary" onClick={onClickSearchFriend}>
            <i className="fas fa-search">🔍</i>
          </button>
        </div>

        <h3 onClick={onHeaderClicked}>Rendering {count} </h3>
        {/* <div className="row">{isToggled && pageData.arrayOfPeople.map(mapPerson)}</div> */}

        <div className="row">{isToggled && pageData.arrayOfPeople.map(mapPerson)}</div>
        {/* <div className="row">{isToggled && pageData.peopleComponents}</div> */}
      </div>

      <hr />
    </React.Fragment>
  );
}

export default Friends;

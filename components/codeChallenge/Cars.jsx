import React, { useState } from "react";
import SingleCar from "./SingleCar";
// import SingleCar from "./SingleCar";

function Cars() {
  const CARS_ARRAY = [
    {
      make: "Kia",
      model: "Sorento",
      year: 2020,
      id: 1,
    },
    {
      make: "Kia",
      model: "Optima",
      year: 2019,
      id: 2,
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: 2021,
      id: 3,
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2019,
      id: 4,
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2018,
      id: 5,
    },
    {
      make: "Volkswagen",
      model: "Jetta",
      year: 2021,
      id: 6,
    },
    {
      make: "Toyota",
      model: "Camry",
      year: 2021,
      id: 7,
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2019,
      id: 8,
    },
    {
      make: "Ford",
      model: "F-150",
      year: 2019,
      id: 9,
    },
    {
      make: "Toyota",
      model: "Camry",
      year: 2020,
      id: 10,
    },
    {
      make: "Ford",
      model: "F-150",
      year: 2021,
      id: 11,
    },
  ];

  const [pageData, setPageData] = useState({ arrayOfCars: CARS_ARRAY });
  const [isToggled, setIsToggled] = useState(false);

  const mapSingleCar = (aCar) => {
    return <SingleCar singleCar={aCar} key={aCar.id}></SingleCar>;
  };

  const onClickToggleContent = () => {
    setIsToggled(!isToggled);

    //  console.log("Button Clicked!", isToggled);
  };

  const filterByYear = (year) => {
    setIsToggled(true);
    //  console.log("filter fn", year);

    setPageData((prevState) => {
      const pd = { ...prevState };
      let arrCopy = CARS_ARRAY;

      let arrayOfCarsIWant = arrCopy.filter((car) => car.year === year);
      pd.arrayOfCars = arrayOfCarsIWant;

      return pd;
    });
  };

  //   ==============CAR CLICK HANDLERS===================
  const onClick2018Cars = () => {
    filterByYear(2018);

    //  console.log("2018 clicked");
  };
  const onClick2019Cars = () => {
    filterByYear(2019);

    //  console.log("2019 clicked");
  };
  const onClick2020Cars = () => {
    filterByYear(2020);

    //  console.log("2020 clicked");
  };
  const onClick2021Cars = () => {
    filterByYear(2021);

    //  console.log("2021 clicked");
  };

  return (
    <React.Fragment>
      <div className="container">
        <h3>Select A Car</h3>
        <button className="btn btn-primary mx-2 mb-2" onClick={onClickToggleContent}>
          Show Cars
        </button>

        <button id="show-2018-cars" className="btn btn-info mx-2 mb-2" onClick={onClick2018Cars}>
          2018 Cars
        </button>
        <button id="show-2019-cars" className="btn btn-info mx-2 mb-2" onClick={onClick2019Cars}>
          2019 Cars
        </button>
        <button id="show-2020-cars" className="btn btn-info mx-2 mb-2" onClick={onClick2020Cars}>
          2020 Cars
        </button>
        <button id="show-2021-cars" className="btn btn-info mx-2 mb-2" onClick={onClick2021Cars}>
          2021 Cars
        </button>

        <div className="row">{isToggled && pageData.arrayOfCars.map(mapSingleCar)}</div>
      </div>
    </React.Fragment>
  );
}

export default Cars;

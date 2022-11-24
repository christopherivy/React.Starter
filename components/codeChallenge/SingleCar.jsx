import React from "react";

function SingleCar(props) {
  const aCar = props.singleCar;
  //   console.log(aCar);

  //   console.log(aCar);

  //   const [carData] = useState({ arrayOfCars: [], carComponents: [] });
  //   console.log(carData);

  return (
    <>
      <div className="container">
        <div className="card col-md-3 m-1">
          <div className="card-body">
            <h5 className="card-title">{aCar.make}</h5>
            <h5 className="card-text">{aCar.model}</h5>
            <h5 className="card-text">{aCar.year}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCar;

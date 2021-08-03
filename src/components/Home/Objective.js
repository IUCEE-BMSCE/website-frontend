import React from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ObjectiveData from "../objective-data.json";

const Objective = (props) => {
  return (
    <Bucket>
      <SubBucket>
        <div className="row align-items-center text-align-center justify-content-center">
          <h1>IUCEE Student Chapter of BMSCE</h1>
          {ObjectiveData.map((objectivedata) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-6">
                <p className="h1">{objectivedata.Misson.title}</p>
                <p className="lead">
                {objectivedata.Misson.content}
                </p>
              </div>
            );
          })}
        </div>
      </SubBucket>
      <hr />
    </Bucket>
  );
};
const SubBucket = styled.div`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-top: 20px;
    h1 {
      font-size: 48px;
      font-weight: 800;
      color: #DA0037;
    }
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    h1 {
      font-size: 36px;
      font-weight: 800;
      color: #DA0037;
    }
  }
`;
const Bucket = styled.div`
  position: relative;
  overflow: hidden;
`;
export default Objective;

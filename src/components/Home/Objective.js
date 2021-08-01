import React from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ObjectiveData from "../objective-data.json";

const Objective = (props) => {
  return (
    <Bucket>
      <SubBucket>
        <div className="row align-items-center">
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
          {ObjectiveData.map((objectivedata) => {
            return (
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="h1">{objectivedata.Objective.title}</p>
            <p className="lead">
            {objectivedata.Objective.content}
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
      background-color: #ffffff;
      background: linear-gradient(135deg, #fc466b 45%, #3f5efb 55%);
      background-size: 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    h1 {
      font-size: 36px;
      font-weight: 800;
      background-color: #ffffff;
      background: linear-gradient(135deg, #fc466b 40%, #3f5efb 60%);
      background-size: 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
`;
const Bucket = styled.div`
  position: relative;
  overflow: hidden;
`;
export default Objective;

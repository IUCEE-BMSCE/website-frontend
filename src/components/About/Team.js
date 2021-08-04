import React from "react";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import deanAcademics from "./dean-data.json";
import facultyData from "./faculty-data.json";
import presidentData from "./president-data.json";
import teamData from "./team-data.json";
import "./Team.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Team = (props) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 mb-5 align-items-center justify-content-center text-center cardrow">
        {deanAcademics.map((data) => {
          return (
            <div className="col align-items-center justify-content-between text-center teamcardcol">
              <div className="card teamcard">
                <img
                  src={"/team/" + data.photo}
                  className="card-img-top teamcard-image"
                  alt={data.photo}
                />
                <div className="card-body teamcard-body">
                  <h5 className="card-title teamcard-title">{data.name}</h5>
                  <h6 className="card-subtitle teamcard-subtitle mb-2 text-muted">
                    {data.role}
                  </h6>

                  {data.links.linkedin !== "" &&
                  data.links.linkedin !== undefined ? (
                    <>
                      <hr className="text-dark" />
                      <a
                        href={data.links.linkedin}
                        className="card-link teamcard-link"
                      >
                        <FaLinkedin />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                  {data.links.website !== "" &&
                  data.links.website !== undefined ? (
                    <>
                      <a
                        href={data.links.website}
                        className="card-link teamcard-link"
                      >
                        <FaGlobe />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 mb-5 align-items-center justify-content-center text-center cardrow">
        {facultyData.map((data) => {
          return (
            <div className="col align-items-center justify-content-between text-center teamcardcol">
              <div className="card teamcard">
                <img
                  src={"/team/" + data.photo}
                  className="card-img-top teamcard-image"
                  alt={data.photo}
                />
                <div className="card-body teamcard-body">
                  <h5 className="card-title teamcard-title">{data.name}</h5>
                  <h6 className="card-subtitle teamcard-subtitle mb-2 text-muted">
                    {data.role}
                  </h6>

                  {data.links.linkedin !== "" &&
                  data.links.linkedin !== undefined ? (
                    <>
                      <hr className="text-dark" />
                      <a
                        href={data.links.linkedin}
                        className="card-link teamcard-link"
                      >
                        <FaLinkedin />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                  {data.links.website !== "" &&
                  data.links.website !== undefined ? (
                    <>
                      <a
                        href={data.links.website}
                        className="card-link teamcard-link"
                      >
                        <FaGlobe />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 mb-5 align-items-center justify-content-center text-center teamcardrow">
        {presidentData.map((data) => {
          return (
            <div className="col align-items-center justify-content-between text-center teamcardcol">
              <div className="card teamcard">
                <img
                  src={"/team/" + data.photo}
                  className="card-img-top teamcard-image"
                  alt={data.photo}
                />
                <div className="card-body teamcard-body">
                  <h5 className="card-title teamcard-title">{data.name}</h5>
                  <h6 className="card-subtitle teamcard-subtitle mb-2 text-muted">
                    {data.role}
                  </h6>

                  {data.links.linkedin !== "" &&
                  data.links.linkedin !== undefined ? (
                    <>
                      <hr className="text-dark" />
                      <a
                        href={data.links.linkedin}
                        className="card-link teamcard-link"
                      >
                        <FaLinkedin />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                  {data.links.website !== "" &&
                  data.links.website !== undefined ? (
                    <>
                      <a
                        href={data.links.website}
                        className="card-link teamcard-link"
                      >
                        <FaGlobe />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 g-4 mb-5 align-items-center justify-content-center text-center cardrow">
        {teamData.map((data) => {
          return (
            <div className="col align-items-center justify-content-between text-center">
              <div className="card teamcard teamcardcol">
                <img
                  src={"/team/" + data.photo}
                  className="card-img-top teamcard-image"
                  alt={data.photo}
                />
                <div className="card-body teamcard-body">
                  <h5 className="card-title teamcard-title">{data.name}</h5>
                  <h6 className="card-subtitle teamcard-subtitle mb-2 text-muted">
                    {data.role}
                  </h6>

                  {data.links.linkedin !== "" &&
                  data.links.linkedin !== undefined ? (
                    <>
                      <hr className="text-dark" />
                      <a
                        href={data.links.linkedin}
                        className="card-link teamcard-link"
                      >
                        <FaLinkedin />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                  {data.links.website !== "" &&
                  data.links.website !== undefined ? (
                    <>
                      <a
                        href={data.links.website}
                        className="card-link teamcard-link"
                      >
                        <FaGlobe />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Team;

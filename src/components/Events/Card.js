import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import eventsData from "../events-data.json";
import "../Card.css";

const Card = (props) => {
  return (
    <CardBody>
      <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 g-4 mb-5 align-items-center justify-content-center text-center cardrow">
        {eventsData.map((data) => {
          return (
            <div className="col align-items-center justify-content-between cardcol">
              <div className="event-card card h-100 text-center ">
                <div className="headerofcard card-header">
                  Type : {data.type}
                </div>

                <img
                  src={"/banners/" + data.poster}
                  className="card-img-top imageforcard"
                  alt={data.poster}
                />

                <div className="card-body bodyofcard">
                  <h4 className="card-title titleofcard">{data.name}</h4>
                  <p className="card-text descriptionofcard">
                    {data.description}
                  </p>
                  <p className="card-text prerequsitsofcard">
                    <strong>Prerequsits</strong> : {data.prerequsits}
                  </p>
                  <p className="card-text contactofcard">
                    {data.contact.contact1.name !== "" &&
                    data.contact.contact1.number !== "" ? (
                      <>
                        <strong>Contact</strong> : {data.contact.contact1.name}{" "}
                        -{" "}
                        <a
                          className="text-decoration-none contactofcard"
                          href={
                            "https://wa.me/91" +
                            data.contact.contact1.number +
                            "?text=Regarding " +
                            data.name +
                            " by IUCEE Chapter of BMSCE."
                          }
                          target="_blank"
                          without
                          rel="noreferrer"
                        >
                          <FaWhatsapp /> {data.contact.contact1.number}
                        </a>
                      </>
                    ) : (
                      <></>
                    )}

                    {data.contact.contact2.name !== "" &&
                    data.contact.contact2.number !== "" ? (
                      <>
                        <br />
                        <strong>Contact</strong> : {data.contact.contact2.name}{" "}
                        -{" "}
                        <a
                          className="text-decoration-none contactofcard"
                          href={
                            "https://wa.me/91" +
                            data.contact.contact2.number +
                            "?text=Regarding " +
                            data.name +
                            " by IUCEE Chapter of BMSCE."
                          }
                          target="_blank"
                          without
                          rel="noreferrer"
                        >
                          <FaWhatsapp /> {data.contact.contact2.number}
                        </a>
                      </>
                    ) : (
                      <></>
                    )}
                  </p>
                  <a
                    href={data.form_url}
                    target="_blank"
                    without
                    rel="noreferrer"
                    className="btn knowmore"
                  >
                    Know More
                  </a>
                </div>
                <div className="card-footer footerofcard">
                  <small>
                    <strong>Duration:</strong> {data.duration}
                  </small>
                  <br />
                  <small>
                    <strong>Platform:</strong> {data.platform}
                  </small>
                  <br />
                  <small>
                    <strong>Event Date:</strong> {data.date_time}
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </CardBody>
  );
};
const CardBody = styled.div`
  position: relative;
`;
export default Card;

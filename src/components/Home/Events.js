import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import eventsData from "../events-data.json";
import "./Events.css";

const Events = (props) => {
  return (
    <>
      <Bucket>
        <SubBucket>
          <h1>Upcoming Events</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 align-items-center">
            {eventsData.map((data) => {
              if (
                data.important === false ||
                data.important === "" ||
                data.important === undefined
              ) {
              } else {
                return (
                  <div className="col align-items-center">
                    <div className="card h-100 text-center event-card">
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
                              <strong>Contact</strong> :{" "}
                              {data.contact.contact1.name} -{" "}
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
                              <strong>Contact</strong> :{" "}
                              {data.contact.contact2.name} -{" "}
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
              }
            })}
          </div>
          <EventsButton>
            <a href="/events">
              <span>All Events</span>
            </a>
          </EventsButton>
        </SubBucket>
        <hr />
      </Bucket>
    </>
  );
};
const EventsButton = styled.div`
  a {
    color: #fff;
    background: linear-gradient(90deg, #fc466b 10%, #3f5efb 90%);
    margin: 10px;
    text-decoration: none !important;
    padding: 15px 10px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 100% auto;
    border-radius: 5px;
    white-space: nowrap;

    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 800;
    &:hover {
      background: linear-gradient(270deg, #fc466b 10%, #3f5efb 90%);
      color: #fff;
    }
  }
`;
const SubBucket = styled.div`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-top: 20px;
    h1 {
      font-size: 72px;
      font-weight: 800;
      background-color: #ffffff;
      background: linear-gradient(90deg, #fc466b 45%, #3f5efb 55%);
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
      font-size: 48px;
      font-weight: 700;
      background-color: #ffffff;
      background: linear-gradient(90deg, #fc466b 40%, #3f5efb 60%);
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
export default Events;

import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import eventsData from "../events-data.json";
import "../Card.css";

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
              ) { return("");
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
    text-decoration: none;
    align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #da0037;
      border: none;
      border-radius: 50px;
      padding 15px 30px;
      font-size: 24px;
      font-weight: 700;
      color: #ededed;
      &:hover {
        background-color: #121212;
        color: #ededed;
      }
  }
`;
const SubBucket = styled.div`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-top: 20px;
    h1 {
      font-size: 42px;
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
      font-size: 32px;
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
export default Events;

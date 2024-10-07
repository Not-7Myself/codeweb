import React from "react";
import "./Results.css"; // Import the CSS file

const Results = () => {
  const resultsData = [
    {
      eventName: "Ideathon",
      firstPlace: {
        schoolName: "Delhi Public School Mathura Road",
        schoolCode: "C2615",
      },
      secondPlace: {
        schoolName: "Delhi Public School Ghaziabad, Meerut Road",
        schoolCode: "C2614",
      },
      thirdPlace: {
        schoolName: "Vasant Valley School, Vasant Kunj",
        schoolCode: "C2637",
      },
    },
    {
      eventName: "DCrypt",
      firstPlace: {
        schoolName: "Somerville School, Noida",
        schoolCode: "C2631",
      },
      secondPlace: { schoolName: "NA", schoolCode: "" },
      thirdPlace: { schoolName: "NA", schoolCode: "" },
    },
    {
      eventName: "PyCODE",
      firstPlace: {
        schoolName: "Indraprastha World School, Paschim Vihar",
        schoolCode: "C2621",
      },
      secondPlace: { schoolName: "Mayoor School, Noida", schoolCode: "C2624" },
      thirdPlace: {
        schoolName: "Somerville School, Noida",
        schoolCode: "C2631",
      },
    },
    {
      eventName: "Group Discussion",
      firstPlace: {
        schoolName: "Somerville School, Noida",
        schoolCode: "C2631",
      },
      secondPlace: {
        schoolName: "Ryan International School, Mayur Vihar",
        schoolCode: "C2628",
      },
      thirdPlace: {
        schoolName: "Mayoor School, Noida",
        schoolCode: "C2624",
      },
    },
    {
      eventName: "Photography",
      firstPlace: {
        schoolName: "K.L.INTERNATIONAL SCHOOL Meerut",
        schoolCode: "C2622",
      },
      secondPlace: {
        schoolName: "Vishwa Bharati Public School Noida",
        schoolCode: "C2638",
      },
      thirdPlace: {
        schoolName: "SRDAV Public School, Dayanand Vihar ",
        schoolCode: "C2632",
      },
    },
    {
      eventName: "Music Matrix",
      firstPlace: {
        schoolName: "Ryan International School, Mayur Vihar",
        schoolCode: "C2628",
      },
      secondPlace: {
        schoolName: "Indraprastha World School, Paschim Vihar",
        schoolCode: "C2621",
      },
      thirdPlace: {
        schoolName: "Seth Anandram Jaipuria School, Ghaziabad",
        schoolCode: "C2630",
      },
    },
    {
      eventName: "Quiz",
      firstPlace: {
        schoolName: "The Shri Ram School, Moulsari",
        schoolCode: "C2636",
      },
      secondPlace: {
        schoolName: "Vishwa Bharati Public School Noida",
        schoolCode: "C2638",
      },
      thirdPlace: {
        schoolName: "Somerville School, NOIDA",
        schoolCode: "C2631",
      },
    },
    {
      eventName: "Robowars",
      firstPlace: {
        schoolName: "Delhi Public School, R.K Puram",
        schoolCode: "C2617",
      },
      secondPlace: {
        schoolName: "Seth Anandram Jaipuria School, Ghaziabad",
        schoolCode: "C2630",
      },
      thirdPlace: {
        schoolName: "Bal Bharati Public School, Noida",
        schoolCode: "C2608",
      },
    },
  ];

  return (
    <div className="results-container">
      <h1 className="title">CODE 2K24 Results</h1>
      <h2 className="day">Day 1</h2>

      {resultsData.map((event, index) => (
        <div className="event-result" key={index}>
          <h3 className="event-name">{event.eventName}</h3>
          <ul className="event-places">
            <li>
              <strong style={{ color: "#FFD700" }}>First Place: </strong>
              &nbsp;&nbsp;&nbsp;
              {event.firstPlace.schoolName} &nbsp;
              <span className="school-code">
                ({event.firstPlace.schoolCode})
              </span>
            </li>

            {event.eventName !== "DCrypt" && (
              <>
                <li>
                  <strong style={{ color: "#C0C0C0" }}>Second Place: </strong>
                  &nbsp;&nbsp;&nbsp;
                  {event.secondPlace.schoolName} &nbsp;
                  <span className="school-code">
                    ({event.secondPlace.schoolCode})
                  </span>
                </li>
                <li>
                  <strong style={{ color: "#CD7F32" }}>Third Place: </strong>
                  &nbsp;&nbsp;&nbsp;
                  {event.thirdPlace.schoolName} &nbsp;
                  <span className="school-code">
                    ({event.thirdPlace.schoolCode})
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Results;

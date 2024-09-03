import React, { useEffect, useState } from "react";
import "./Brochure.css";

const Brochure = () => {
  const externalUrl =
    "https://drive.google.com/file/d/1jePr6EnTcY9-OPSjQLY6qITv0w6a82bR/view?usp=sharing";
  const redirectDelay = 3;
  const [count, setCount] = useState(redirectDelay);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(countdown);
          window.location.href = externalUrl;
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [externalUrl, redirectDelay]);

  return (
    <div className="redirect-container">
      <div className="redirect-content">
        <div className="spinner"></div>
        <h2>Redirecting to our Brochure in {count}...</h2>
        <p>
          If you are not redirected automatically,{" "}
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Brochure;

import * as React from 'react'


type Props = {
  name: string;
  }

const Infomation: React.FC<Props> = ({name}) => {
  return (
    <div>
      {name}!
      <div style={{ columnCount: "2" }}>
        <strong>Portfolio Page</strong>
        <h1>Portfolio Page2</h1>
      </div>
      <div style={{ columnCount: "2" }}>
        <strong>First Name:</strong>
        <h1>John</h1>
      </div>
      <div style={{ columnCount: "2" }}>
        <strong>Last Name:</strong>
        <h1>John</h1>
      </div>

      <div style={{ columnCount: "2" }}>
        <strong>Address</strong>
        <h1>1234 Elm Street, Springfield, IL</h1>
      </div>
      <div style={{ columnCount: "2" }}>
        <strong>Phone</strong>
        <h1>(123) 456-7890</h1>
      </div>
      <div style={{ columnCount: "2" }}>
        <strong>Email</strong>
        <h1>john.doe@example.com</h1>
      </div>
      <div style={{ columnCount: "2" }}>
        <strong>LinkedIn:</strong>{" "}
        <h1>
          <a
            href="https://www.linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/johndoe
          </a>
        </h1>
      </div>
    </div>
  );
};
export default Infomation;

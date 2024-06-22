import * as React from "react";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <div>
      <div style={{ columnCount: "5" }}>
        <div>
          <button > <a href="./">Home</a></button>
        </div>
        <div>
          <button><a href="./ResumeAndCV">Resume/CV</a></button>
        </div>
        <div>
          <button><a href="./Learn">Learn</a></button>
        </div>
        <div>
          <button><a href="./Project">Project</a></button>
        </div>
        <div>
          <button><a href="./CareerPath">CareerPath</a></button>
        </div>
      </div>
    </div>
  );
};
export default Header;

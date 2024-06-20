import * as React from "react";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <div>
      <div style={{ columnCount: "5" }}>
        <div>
          <button>Home</button>
        </div>
        <div>
          <button>Resume/CV</button>
        </div>
        <div>
          <button>School</button>
        </div>
        <div>
          <button>Project</button>
        </div>
        <div>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
};
export default Header;

import * as React from "react";

type Props = {
  name: string;
};

const Project: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <div class="border-4" style={{padding:20}}>
        <box>Project:1</box>
        <h1>Title : asdasdasdasdasd</h1>
        <p>description</p>
        <p>Github: </p>
      </div>

      <div class="border-4">
        <box>Project:2</box>
        <h1>Title</h1>
        <p>description</p>
        <p>Github </p>
      </div>


    </div>
  );
};
export default Project;

import React from "react";
import { Userlist } from "./Userlist";

export function Directory(props) {
  return (
    <div class="directory">
      <Userlist
        usernames={["Stella", "Harper", "Rocky", "Yadi", "Rupert"]}
        onChoose={props.onChoose}
      />
    </div>
  );
}

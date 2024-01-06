import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const ProjectsIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
    </SvgIcon>
  );
};

export default ProjectsIcon;

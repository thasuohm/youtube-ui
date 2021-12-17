import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
type PropType = {
  title: string;
  darkMode: Boolean;
  changeToDarkMode: Function;
};

function MenuItem({ title, changeToDarkMode }: PropType) {
  const [showInside, setShowInside] = useState(false);

  return (
    <>
      {showInside ? (
        <>
          <div onClick={() => setShowInside(false)} className="menu-header">
            <ArrowBackIcon /> <span>ธีมของแอป</span>{" "}
          </div>

          <div onClick={() => changeToDarkMode(true)}>ธีมมืด </div>
          <div onClick={() => changeToDarkMode(false)}>ธีมสว่าง </div>
        </>
      ) : (
        <div onClick={() => setShowInside(true)}>{title}</div>
      )}
    </>
  );
}

export default MenuItem;

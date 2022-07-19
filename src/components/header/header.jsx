import React from "react";
import MenuItem from "../../UIKit/element/MenuItem/MenuItem";
import Line from "../../UIKit/layout/Line/Line";

const Header = () => {
  return (
    <div className="header">
      <Line>
        <MenuItem icon="sticky-note" title={"Notes App"}></MenuItem>
      </Line>
    </div>
  );
};

export default Header;

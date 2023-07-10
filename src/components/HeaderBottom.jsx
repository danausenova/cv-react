import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const HeaderBottom = () => {
  return (
    <MDBFooter
      bgColor="dark"
      color="white"
      className="text-center text-lg-left"
    >
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        e-mail:
        <a
          className="text-light"
          target="_blank"
          href="https://mail.google.com//"
        >
          aidana99969@gmail.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default HeaderBottom;

import Header from "../component/header";
import Vision from "../component/vision";
import Case from "../component/case";
import Asset from "../component/asset";
import React from "react";

export default function TestNewLanding() {
  return (
    <>
      {/* header */}
      <div className="mifi-web-background">
        <div className="mifi-layout-margin">
          <Header />
          <Vision/>
          <Case/>
          <Asset/>
        </div>
      </div>
    </>
  );
}

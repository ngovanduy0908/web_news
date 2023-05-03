import React from "react";
import { TwitterShareButton } from "react-share";

function ShareTwitter(props) {
  const { title, url } = props;

  return (
    <TwitterShareButton
      url={url}
      title={title}
      hashtags={["nguoihaiduongtoi", "nguoihanamtoi"]}
    >
      Twitter
    </TwitterShareButton>
  );
}

export default ShareTwitter;

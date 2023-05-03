import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

function ShareFaceBook({ url, title }) {
  return (
    <div>
      <FacebookShareButton url={url} quote={title} hashtag="#dungHNduyHD">
        {/* <FacebookIcon size={32} round={true} /> */}Chia sẻ
      </FacebookShareButton>
    </div>
  );
}

export default ShareFaceBook;

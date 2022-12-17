import React from "react";
import TextTruncate from "react-text-truncate";

const CardBody = ({ title, description }) => {
  return (
    <div class="space-y-4 pr-2">
      <h4 class="text-md font-semibold text-cyan-900 text-justify">{title}</h4>
      <TextTruncate
        line={2}
        element="span"
        truncateText="…"
        text={description}
        textTruncateChild={<a href="#">Read on</a>}
      />
    </div>
  );
};

export default CardBody;

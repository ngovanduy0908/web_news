import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import Toggle from "../../../components/Toggle/Toggle";

const UserManager = () => {
  const [isPublic, setIsPublic] = useState(false);
  return (
    <div>
      <Card title={"Thông tin chung"} className="overflow-visible">
        <Card.Content>
          <h3>I Love You So Much</h3>
          <Toggle
            label="Công khai"
            value={!!isPublic}
            onChange={(e) => setIsPublic(e)}
          />
        </Card.Content>
      </Card>
    </div>
  );
};

export default UserManager;

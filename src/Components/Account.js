import React, { useContext } from "react";
import { Table, Card } from "antd";
import { useParams } from "react-router-dom";
import { AccountContext } from "./Context/Context";
import "antd/dist/antd.css";

const Account = () => {
  const { accounts } = React.useContext(AccountContext);

  const { id } = useParams();
  const info = accounts.find((element) => element.id == id);
  return (
    <div>
      <Card title={info.id} style={{ width: 300 }}>
        <p>{info.createdAt}</p>
        <p>{info.owner}</p>
        <p>{info.updatedAt}</p>
      </Card>
    </div>
  );
};

export default Account;

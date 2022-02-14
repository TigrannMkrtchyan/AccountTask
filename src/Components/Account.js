import React, { useContext, useMemo } from "react";
import { Table, Card } from "antd";
import { useParams } from "react-router-dom";
import { AccountContext } from "./Context/Context";
import "antd/dist/antd.css";

const Account = () => {
  const { accounts } = useContext(AccountContext);

  const { id } = useParams();
  const info = useMemo(()=> accounts.find((element) => element.id == id),[element] );
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

import React, { useContext } from "react";
import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";
import { useParams } from "react-router-dom";
import { contextComp } from "./Context";

const { Column } = Table;

const Account = () => {
  const information = React.useContext(contextComp);

  const params = useParams();
  const info = [information.info.find((Element) => Element.id == params.id)];
  return (
    <div>
      <Table dataSource={info}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="Name" key="Name" />
        <Column title="Created On" dataIndex="createdAt" key="createdAt" />
        <Column title="Owner" dataIndex="owner" key="owner" />
        <Column title="Updated On" dataIndex="CreatedAt" key="createdAt" />
      </Table>
    </div>
  );
};

export default Account;

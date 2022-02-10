import React from "react";
import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";
import { useParams } from "react-router-dom";

const Account = ({ data }) => {
  const Column = Table;
  const params = useParams();
  const info = [data.find((Element) => Element.id == params.id)];
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

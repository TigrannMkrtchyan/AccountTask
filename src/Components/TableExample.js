import React from "react";
import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { contextComp } from "./Context";
import { useContext } from "react";

const { Column } = Table;

const TableExample = () => {
  const information = React.useContext(contextComp);

  return (
    <div>
      <Table dataSource={information.accounts}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="Name" key="Name" />
        <Column title="Created On" dataIndex="createdAt" key="createdAt" />
        <Column title="Owner" dataIndex="owner" key="owner" />

        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Link to={`/Account/${record.id}`}>View</Link>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default TableExample;

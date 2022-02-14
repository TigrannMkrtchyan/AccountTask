import React, { useContext } from "react";
import { Table, Space } from "antd";
import { Link } from "react-router-dom";
import { AccountContext } from "./Context/Context";
import "antd/dist/antd.css";

const { Column } = Table;

const TableExample = () => {
  const information = useContext(AccountContext);

  return (
    <div>
      <Table dataSource={information.accounts}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="Name" key="Name" />
        <Column title="Created On" dataIndex="createdAt" key="createdAt" />
        <Column title="Owner" dataIndex="owner" key="owner" />=
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

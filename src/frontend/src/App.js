import { getAllStudents } from "./client";
import { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Table, Spin, Empty  } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LoadingOutlined 
} from "@ant-design/icons";

import "./App.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
];

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  //destructuring, it is coming from useState hook : initial state
  const [students, setStudents] = useState([]);
  const[fetching, setFetching] = useState(true);

  const fetchStudents = () =>
    getAllStudents()
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setFetching(false);
      });
  //run the function when component loads. invoke this method once
  useEffect(() => {
    fetchStudents();
  }, []); //empty square bracket means 0 deps

  const renderStudents = () => {
    if(fetching){
     return <Spin indicator={antIcon} /> 
    }
    if (students.length <= 0) {
      return <Empty />;
    }
    return <Table rowKey={(student) => student.id} dataSource={students} columns={columns}  bordered
    pagination={{ pageSize: 50 }} scroll={{ y: 240 }}
    title={() => 'Students'}/>;
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            key={students.id}
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {renderStudents()}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Developed By Rezaul H Reza
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;

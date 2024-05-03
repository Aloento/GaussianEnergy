import { InboxOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { Header } from "./Header";

function Home() {
  return (
    <div className="flex flex-col px-6 pt-4 pb-6 w-full max-w-screen-lg min-w-96 bg-white shadow rounded-md gap-y-4">
      <Header />

      <Divider className="!m-0" />

      <div className="flex">
        <Dragger action="/api" accept=".log">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag log file to this area to upload
          </p>
        </Dragger>
      </div>
    </div>
  );
}

export default Home;

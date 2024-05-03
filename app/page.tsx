import { ExperimentOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function Home() {
  return (
    <div className="flex flex-col px-6 pt-4 pb-6 w-full max-w-screen-lg min-w-96 bg-white shadow rounded-md gap-y-4">

      <header className="flex h-12 items-center gap-x-4">
        <ExperimentOutlined className="!text-cyan-500 !text-3xl" />

        <h1 className="text-2xl font-medium text-slate-600">
          Gaussian Free Energy Reader
        </h1>
      </header>

      <Divider className="!m-0" />

      123
    </div>
  );
}

export default Home;

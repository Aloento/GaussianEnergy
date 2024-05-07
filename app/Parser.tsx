"use client";

import { InboxOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";

export function Parser() {
  const [name, setName] = useState<string>("Pending...");
  const [energy, setEnergy] = useState<number>(0);

  return <div className="flex gap-x-7">
    <Dragger
      action="/api"
      accept=".log"
      maxCount={1}
      className="h-fit"
      onChange={({ file }) => {
        if (file.status === "done") {
          setName(file.name);
          setEnergy(file.response.energy);
        }
      }}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag log file to this area to upload
      </p>
    </Dragger>

    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl font-medium">File Name : {name}</h2>
      <h2 className="text-xl font-medium">Energy : {energy}</h2>
    </div>
  </div>;
}

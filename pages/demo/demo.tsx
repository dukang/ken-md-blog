import { useEffect } from "react";
import * as Engine from "@eirvana/engine-core";

export type DemoProps = {
  name?: string;
};

const Demo = ({ name }: DemoProps) => {
  useEffect(() => {
    const canvas = document.querySelector(".canvas");
    const demo = new Engine[name](canvas);
    demo.makeDemo();
    return () => {
      demo.dispose()
    }
  });
  return <div className="canvas"></div>;
};

export default Demo;

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

const InputPasswordComp = () => {
  return (
      <Input.Password
        size="default md:large md:py-2 "
        placeholder="************"
        className="flex-row-reverse  text-left  w-full  border border-gray-400 rounded-md placeholder:font-irSans placeholder:font-light cursor-pointer "
        dir="ltr"
        iconRender={(visible) =>
          visible ? <EyeTwoTone/> : <EyeInvisibleOutlined />
        }
      />
  );
};
export {InputPasswordComp}

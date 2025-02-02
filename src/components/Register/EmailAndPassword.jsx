import { EyeInvisibleOutlined, EyeTwoTone, MailOutlined } from "@ant-design/icons";
import Input from "rc-input";

const EmailAndPassword = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-semibold mb-2  sm:text-base  font-irSans   xs:text-[14px]  text-black">
            ایمیل
          </p>
          <Input
            size="large xs:default"
            placeholder="Reaction@gmail.com"
            prefix={<MailOutlined className="text-gray-400" />}
            className=" w-full border border-gray-400 rounded-md placeholder:font-sans sm:placeholder:font-light  xs:placeholder:text-[8px]"
            dir="ltr"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold  mb-2   font-irSans sm:text-base  xs:text-[14px] text-black">
          پسورد
        </p>
        <Input.Password
          size="large  xs:default"
          placeholder="******************"
          className="w-full flex-row-reverse  border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light placeholder:align-middle "
          dir="ltr"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>
    </>
  );
};
export { EmailAndPassword };

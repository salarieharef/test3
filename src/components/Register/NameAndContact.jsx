import { InputContact } from "./InputContact";
import { Input } from "antd";
const NameAndContact = () => {
  return (
    <>
      <div className=" w-full flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full ">
          <p className="font-semibold mb-2 whitespace-nowrap  font-irSans  sm:text-base  xs:text-[14px] text-black">
            نام و نام خانوادگی
          </p>
          <Input
            size="large  xs:default"
            placeholder="somayeh"
            className="text-center  border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light"
          />
        </div>
        <div className="flex flex-col  w-full">
          <p className="font-semibold mb-2 whitespace-nowrap  font-irSans  sm:text-base  xs:text-[14px] text-black">
            شماره تماس
          </p>
          <InputContact
            size="large  xs:default"
            className="text-center border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light"
            disabled="false"
          />
        </div>
      </div>
    </>
  );
};
export { NameAndContact };

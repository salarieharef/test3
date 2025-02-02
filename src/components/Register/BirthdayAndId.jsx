import { DatePickerPersian } from "./DatePickerPersian"
import { NumericInput } from "./NumericInput"

const BirthdayAndId=()=>{
    <div className="w-full flex justify-between flex-col lg:flex-row gap-4">
    <div className="flex flex-col  w-full ">
      <p className="font-semibold mb-2 whitespace-nowrap   font-irSans  sm:text-base  xs:text-[14px] text-black">
        شماره ملی
      </p>
      <NumericInput
        className="text-center  border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light"
        size="large xs:default"
      />
    </div>
    <div className="flex flex-col  w-full">
      <p className="font-semibold mb-2 whitespace-nowrap  font-irSans  sm:text-base  xs:text-[14px] text-black">
        {" "}
        تاریخ تولد
      </p>
      <DatePickerPersian size="large xs:default" />
    </div>
  </div>
}
export{BirthdayAndId}
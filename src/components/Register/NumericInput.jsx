import React, { useState } from 'react';
import { Input, Tooltip } from 'antd';
const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const {value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };
  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'لطفا  عدد 10 رقمی وارد کنید'
  );
  return (
    <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="2181531034"
        maxLength={10}
        dir="ltr" 
           
      />
    </Tooltip>
  );
};
const App = () => {
  const [value, setValue] = useState('');
  return (
    <NumericInput
      style={{
        width: 120,
      }}
      value={value}
      onChange={setValue}
    />
  );

};
export {NumericInput};



// /* to prevent the arrow overflow the popup container,
// or the height is not enough when content is empty */
// .numeric-input .ant-tooltip-inner {
//     min-width: 32px;
//     min-height: 37px;
//   }
  
//   .numeric-input .numeric-input-title {
//     font-size: 14px;
//   }
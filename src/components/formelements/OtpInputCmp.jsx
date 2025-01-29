/* eslint-disable react/prop-types */
import { useState } from 'react';
import OtpInput from 'react-otp-input';

const OtpInputCmp = ({ field }) => {

  const [otp, setOtp] = useState(field.state.value || '');

  const handleChange = (newValue) => {
    setOtp(newValue);
    field.handleChange(newValue);
  };

  const handlePaste = (event) => {
    const data = event.clipboardData.getData('text');
    console.log(data)
  };

  return (
    <OtpInput
      value={otp}
      onChange={handleChange}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      inputStyle={{ padding: '.625rem', width: '2.5rem', height: '2.5rem', borderRadius: '.375rem', border: '1px solid #ccc', fontSize: '1.5rem', margin: '0 .25rem' }}
      containerStyle={{ display: 'flex', justifyContent: 'center' }}
      onBlur={field.handleBlur}
      onPaste={handlePaste}
    />
  );
}
export default OtpInputCmp;
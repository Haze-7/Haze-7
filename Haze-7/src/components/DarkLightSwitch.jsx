import React from 'react';
 
const DarkLightSwitch = ({ isOn, handleToggle, onBgColor, onCircleColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="dl-switch-checkbox"
        id={`dl-switch-new`}
        type="checkbox"
      />
      <label
        style={{background: isOn && onBgColor}}
        className="dl-switch-label"
        htmlFor={`dl-switch-new`}
      >
        <span 
          className={`dl-switch-button`}
          style={{ background: isOn ? onCircleColor : "var(--color-akaroa)"  }}
         />
      </label>
    </>
  );
};

export default DarkLightSwitch;
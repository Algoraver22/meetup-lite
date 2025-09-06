import { EuiComboBox, EuiFormRow } from "@elastic/eui";
import React from "react";
import { useAppSelector } from "../../app/hooks";

function MeetingUserField({
  label,
  isInvalid,
  error,
  options,
  onChange,
  selectedOptions,
  singleSelection = false,
  isClearable,
  placeholder,
}: {
  label: string;
  isInvalid: boolean;
  error: Array<string>;
  options: any;
  onChange: any;
  selectedOptions: any;
  singleSelection?: { asPlainText: boolean } | boolean;
  isClearable: boolean;
  placeholder: string;
}) {
  const isDarkTheme = useAppSelector((zoomApp) => zoomApp.auth.isDarkTheme);
  
  return (
    <EuiFormRow 
      label={<span style={{ color: isDarkTheme ? '#ffffff' : '#0b5cff', fontWeight: 'bold', fontSize: '16px' }}>{label}</span>} 
      isInvalid={isInvalid} 
      error={error}
    >
      <EuiComboBox
        options={options}
        onChange={onChange}
        selectedOptions={selectedOptions}
        singleSelection={singleSelection}
        isClearable={isClearable}
        placeholder={placeholder}
        isInvalid={isInvalid}
      />
    </EuiFormRow>
  );
}

export default MeetingUserField;

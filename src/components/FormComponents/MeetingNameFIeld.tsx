import { EuiFieldText, EuiFormRow } from "@elastic/eui";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import ThemeSelector from "../ThemeSelector";

function MeetingNameField({
  label,
  isInvalid,
  error,
  placeholder,
  value,
  setMeetingName,
}: {
  label: string;
  isInvalid: boolean;
  error: Array<string>;
  placeholder: string;
  value: string;
  setMeetingName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const isDarkTheme = useAppSelector((zoomApp) => zoomApp.auth.isDarkTheme);
  
  return (
    <ThemeSelector>
      <EuiFormRow 
        label={<span style={{ color: isDarkTheme ? '#ffffff' : '#0b5cff', fontWeight: 'bold', fontSize: '16px' }}>{label}</span>} 
        isInvalid={isInvalid} 
        error={error}
      >
        <EuiFieldText
          placeholder={placeholder}
          value={value}
          onChange={(e) => setMeetingName(e.target.value)}
          isInvalid={isInvalid}
        />
      </EuiFormRow>
    </ThemeSelector>
  );
}

export default MeetingNameField;

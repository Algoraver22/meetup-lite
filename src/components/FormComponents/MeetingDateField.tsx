import { EuiDatePicker, EuiFormRow } from "@elastic/eui";
import moment from "moment";
import React from "react";
import { useAppSelector } from "../../app/hooks";

function MeetingDateField({
  selected,
  setStartDate,
}: {
  selected: moment.Moment;
  setStartDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
}) {
  const isDarkTheme = useAppSelector((zoomApp) => zoomApp.auth.isDarkTheme);
  
  return (
    <EuiFormRow 
      label={<span style={{ color: isDarkTheme ? '#ffffff' : '#0b5cff', fontWeight: 'bold', fontSize: '16px' }}>Set Meeting Date</span>}
    >
      <EuiDatePicker
        selected={selected}
        onChange={(date) => setStartDate(date!)}
      />
    </EuiFormRow>
  );
}

export default MeetingDateField;

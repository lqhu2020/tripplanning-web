import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInDays } from "date-fns";
import { Space, message } from "antd";

const today = new Date();

function DateInput({ dateInput, handleDateChange, children, minDate }) {
  return (
    <div>
      <Space direction="horizontal" size={12}>
        Start Date
        <DatePicker
          selectsStart
          selected={dateInput.startDate}
          onChange={(date) => handleDateChange("startDate", date)}
          startDate={dateInput.startDate}
          minDate={minDate === null ? today : minDate}
        />
        End Date
        <DatePicker
          selectsEnd
          selected={dateInput.endDate}
          onChange={(date) => handleDateChange("endDate", date)}
          endDate={dateInput.endDate}
          startDate={dateInput.startDate}
          minDate={minDate === null ? today : minDate}
        />
        {children}
      </Space>
    </div>
  );
}

export default DateInput;

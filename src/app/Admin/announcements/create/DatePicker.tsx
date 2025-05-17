import React from 'react'
import { Calendar } from "@/components/ui/calendar";

const DatePicker = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md bg-black text-blue-400"
    />
  )

}

export default DatePicker
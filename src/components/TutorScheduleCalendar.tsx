"use client"

import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { vi } from "date-fns/locale/vi"
import "react-big-calendar/lib/css/react-big-calendar.css"

type Props = {
  availability: Record<string, string[]>
}

const locales = {
  vi: vi,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export default function TutorScheduleCalendar({ availability }: Props) {
  // Convert availability to events
  const events = Object.entries(availability).flatMap(([date, slots]) => {
    return slots.map((time) => {
      const [hour, minute] = time.split(":").map(Number)
      const start = new Date(`${date}T${pad(hour)}:${pad(minute)}:00`)
      const end = new Date(start.getTime() + 30 * 60 * 1000) // giả định 45 phút

      return {
        title: `Khung giờ khả dụng`,
        start,
        end,
      }
    })
  })

  return (
    <div className="h-[600px] w-full bg-white rounded-md shadow-md p-4 border">
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={Views.WEEK}
        views={["week", "day"]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        messages={{
          week: "Tuần",
          day: "Ngày",
          today: "Hôm nay",
          previous: "Trước",
          next: "Tiếp",
        }}
      />
    </div>
  )
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}
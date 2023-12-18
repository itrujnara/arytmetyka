import { Button } from "./ui/button"

export default function TimeButton({
  timeValue,
  timeState,
  timeText,
  setTime,
}: {
  timeValue: number
  timeState: number
  timeText: string
  setTime: (a: number) => void
}) {
  return (
    <Button
      className={timeState === timeValue ? "ring ring-offset-2" : ""}
      onClick={() => setTime(timeValue)}
    >
      {timeText}
    </Button>
  )
}

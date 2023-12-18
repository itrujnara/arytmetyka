import { useTimer } from "react-timer-hook"
import { Progress } from "./ui/progress"

export default function ChallengeTimer({
  timeLimit,
  onExpire,
}: {
  timeLimit: number
  onExpire: () => void
}) {
  const expiryDate = new Date(Date.now() + timeLimit * 1000)
  const { minutes, seconds, totalSeconds } = useTimer({
    expiryTimestamp: expiryDate,
    onExpire: onExpire,
    autoStart: true,
  })

  function getTimeString() {
    return (
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0")
    )
  }

  function getTimerColor() {
    const progress = totalSeconds / timeLimit
    if (progress > 0.5) return "bg-correct"
    else if (progress > 0.2) return "bg-mid"
    else return "bg-wrong"
  }

  return (
    <>
      <div className={totalSeconds <= 10 ? "text-wrong" : ""}>
        {getTimeString()}
      </div>
      <Progress
        value={(totalSeconds / timeLimit) * 100}
        indicatorColor={getTimerColor()}
      />
    </>
  )
}

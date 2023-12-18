import { Progress } from "./ui/progress"

export default function AccuracyBar({ accuracy }: { accuracy: number }) {
  const indColor =
    accuracy > 70 ? "bg-correct" : accuracy > 30 ? "bg-mid" : "bg-wrong"
  return (
    <>
      <div className="text-center">Dokładność</div>
      <Progress value={accuracy} indicatorColor={indColor} />
      <div className="text-center">{accuracy}%</div>
    </>
  )
}

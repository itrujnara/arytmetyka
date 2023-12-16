export default function ScoreCounter({
  score,
  type,
}: {
  score: number
  type: string
}) {
  return (
    <div
      className={
        "py-2 px-4 rounded-md text-white " +
        (type === "correct" ? "bg-correct" : "bg-wrong")
      }
    >
      {score}
    </div>
  )
}

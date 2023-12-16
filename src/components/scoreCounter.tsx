export default function ScoreCounter({
  score,
  color,
}: {
  score: number
  color: string
}) {
  return (
    <div className={"py-2 px-4 rounded-md text-white bg-[" + color + "]"}>
      {score}
    </div>
  )
}

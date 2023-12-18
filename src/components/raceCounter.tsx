export default function RaceCounter({
  correct,
  target,
}: {
  correct: number
  target: number
}) {
  return (
    <div className="bg-correct px-4 py-2 text-lg rounded-md w-max mx-auto">
      {correct} / {target}
    </div>
  )
}

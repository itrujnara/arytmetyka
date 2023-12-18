import { Button } from "./ui/button"

export default function TargetButton({
  targetValue,
  targetState,
  setTarget,
}: {
  targetValue: number
  targetState: number
  setTarget: (a: number) => void
}) {
  return (
    <Button
      className={targetValue === targetState ? "ring ring-offset-2" : ""}
      onClick={() => setTarget(targetValue)}
    >
      {targetValue}
    </Button>
  )
}

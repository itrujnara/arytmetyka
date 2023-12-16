import { Input } from "@/components/ui/input"
import { ChangeEventHandler } from "react"

export default function AnswerInput({
  value,
  onChange,
  ansState,
}: {
  value: string
  onChange: ChangeEventHandler
  ansState: number
}) {
  return (
    <Input
      value={value}
      onChange={onChange}
      className={
        "text-center border-4 border-gray-300 ring-offset-2 " +
        (ansState === 0
          ? ""
          : ansState === 1
          ? "ring ring-correct"
          : "ring ring-wrong")
      }
    />
  )
}

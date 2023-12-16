import { Input } from "@/components/ui/input"
import { Dispatch, SetStateAction } from "react"

export default function AnswerInput({
  value,
  onChange,
  ansState,
}: {
  value: string
  onChange: Dispatch<SetStateAction<string>>
  ansState: number
}) {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={
        "text-center border-4 " +
        (ansState === 0
          ? "border-gray-300"
          : ansState === 1
          ? "border-[#5EF349]"
          : "border-[#C70039]")
      }
    ></Input>
  )
}

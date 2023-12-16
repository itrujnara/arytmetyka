import { MouseEventHandler, ReactNode } from "react"
import { Button } from "./ui/button"

export default function ActionButton({
  op,
  ownOp,
  onClick,
  children,
}: {
  op: string
  ownOp: string
  onClick: MouseEventHandler
  children: ReactNode
}) {
  return (
    <Button
      className={op === ownOp ? "ring ring-offset-2" : ""}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

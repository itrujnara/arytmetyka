import { MouseEventHandler, ReactNode } from "react"
import { Button } from "./ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

export default function ActionButton({
  op,
  ownOp,
  shuf,
  tooltipName,
  onClick,
  children,
}: {
  op: string
  ownOp: string
  shuf: boolean
  tooltipName: string
  onClick: MouseEventHandler
  children: ReactNode
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={
              (op === ownOp && !shuf) || (ownOp === "all" && shuf)
                ? "ring ring-offset-2"
                : ""
            }
            onClick={onClick}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

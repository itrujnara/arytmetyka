import { Dispatch, SetStateAction } from "react"
import ActionButton from "./actionButton"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Divide, Dot, Minus, Plus } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function SettingsPanel({
  opState,
  handleSetOp,
  maxNumState,
  setMaxNumState,
}: {
  opState: string
  handleSetOp: (a: string) => void
  maxNumState: number
  setMaxNumState: Dispatch<SetStateAction<number>>
}) {
  function clearScores() {
    localStorage.setItem("correct", "0")
    localStorage.setItem("wrong", "0")
    window.location.reload()
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="settings">
        <AccordionTrigger>Ustawienia</AccordionTrigger>
        <AccordionContent className="mx-2 flex flex-col items-center justify-center">
          <div className="mb-2">Działanie</div>
          <div className="flex flex-row gap-2">
            <ActionButton
              op={opState}
              ownOp="add"
              onClick={() => handleSetOp("add")}
            >
              <Plus />
            </ActionButton>
            <ActionButton
              op={opState}
              ownOp="sub"
              onClick={() => handleSetOp("sub")}
            >
              <Minus />
            </ActionButton>
            <ActionButton
              op={opState}
              ownOp="mul"
              onClick={() => handleSetOp("mul")}
            >
              <Dot />
            </ActionButton>
            <ActionButton
              op={opState}
              ownOp="div"
              onClick={() => handleSetOp("div")}
            >
              <Divide />
            </ActionButton>
          </div>
          <div className="my-2">Maksymalna liczba</div>
          <Input
            value={maxNumState}
            onChange={(e) => setMaxNumState(parseInt(e.target.value))}
          />
          <Button variant="destructive" onClick={clearScores} className="mt-3">
            Wyczyść wyniki
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

import { Dispatch, SetStateAction } from "react"
import ActionButton from "./actionButton"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Divide, Dot, Minus, Plus, Shuffle } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function SettingsPanel({
  opState,
  handleSetOp,
  shufState,
  handleSetShuf,
  maxNumState,
  setMaxNumState,
}: {
  opState: string
  handleSetOp: (a: string) => void
  shufState: boolean
  handleSetShuf: (a: boolean) => void
  maxNumState: number
  setMaxNumState: Dispatch<SetStateAction<number>>
}) {
  function clearScores() {
    localStorage.removeItem("correct")
    localStorage.removeItem("wrong")
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
              shuf={shufState}
              tooltipName="Dodawanie"
              onClick={() => {
                handleSetOp("add")
                handleSetShuf(false)
              }}
            >
              <Plus />
            </ActionButton>
            <ActionButton
              op={opState}
              ownOp="sub"
              shuf={shufState}
              tooltipName="Odejmowanie"
              onClick={() => {
                handleSetOp("sub")
                handleSetShuf(false)
              }}
            >
              <Minus />
            </ActionButton>
            <ActionButton
              op={opState}
              ownOp="mul"
              shuf={shufState}
              tooltipName="Mnożenie"
              onClick={() => {
                handleSetOp("mul")
                handleSetShuf(false)
              }}
            >
              <Dot />
            </ActionButton>
            <ActionButton
              op={opState}
              ownOp="div"
              shuf={shufState}
              tooltipName="Dzielenie"
              onClick={() => {
                handleSetOp("div")
                handleSetShuf(false)
              }}
            >
              <Divide />
            </ActionButton>
            <ActionButton
              op={opState}
              ownOp="all"
              shuf={shufState}
              tooltipName="Mieszane"
              onClick={() => {
                handleSetOp("add")
                handleSetShuf(true)
              }}
            >
              <Shuffle />
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

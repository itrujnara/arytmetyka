import { useState, useRef, useEffect } from "react"
import AnsInput from "@/components/ansInput"
import { Button } from "@/components/ui/button"
import { RefreshCw, Check } from "lucide-react"
import MathDisplay from "@/components/mathDisplay"
import SettingsPanel from "@/components/settingsPanel"
import ScoreCounter from "@/components/scoreCounter"
import { useStopwatch } from "react-timer-hook"

export default function Training() {
  const aRef = useRef(Math.ceil(Math.random() * 10))
  const bRef = useRef(Math.ceil(Math.random() * 10))
  const [inputState, setInputState] = useState("")
  const [shuffle, setShuffle] = useState(false)
  const [opState, setOpState] = useState("add")
  const [maxNumState, setMaxNumState] = useState(100)
  const [ansState, setAnsState] = useState(0)
  const [res, setRes] = useState(evalResult())
  const { minutes, seconds, start } = useStopwatch()

  const correctRef = useRef(parseInt(localStorage.getItem("correct") || "0"))
  const wrongRef = useRef(parseInt(localStorage.getItem("wrong") || "0"))

  console.log(minutes, seconds)

  const activeRef = useRef(true)

  useEffect(() => start(), [])

  // key listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [inputState])

  // operation change
  useEffect(() => {
    handleRefresh()
  }, [opState, shuffle])

  function getTimeString() {
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key != "Enter") return

    if (!inputState) return

    if (activeRef.current) handleVerify()
    else handleRefresh()
  }

  function randomInRange(min: number, max: number) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function evalResult() {
    if (opState === "add") {
      return aRef.current + bRef.current
    } else if (opState === "sub") {
      return aRef.current - bRef.current
    } else if (opState === "mul") {
      return aRef.current * bRef.current
    } else if (opState === "div") {
      return aRef.current / bRef.current
    } else return 0
  }

  function resetValues() {
    if (opState === "add") {
      aRef.current = randomInRange(1, maxNumState)
      bRef.current = randomInRange(1, maxNumState - aRef.current)
    } else if (opState === "sub") {
      aRef.current = randomInRange(1, maxNumState)
      bRef.current = randomInRange(1, aRef.current)
    } else if (opState === "mul") {
      aRef.current = randomInRange(1, Math.floor(Math.sqrt(maxNumState)))
      bRef.current = randomInRange(1, Math.floor(Math.sqrt(maxNumState)))
    } else if (opState === "div") {
      bRef.current = randomInRange(1, Math.floor(Math.sqrt(maxNumState)))
      aRef.current =
        bRef.current * randomInRange(1, Math.floor(Math.sqrt(maxNumState)))
    }
    setRes(evalResult())
  }

  function handleRefresh() {
    setAnsState(0)
    if (shuffle) {
      const ops = ["add", "sub", "mul", "div"]
      const idx = randomInRange(0, 3)
      setOpState(ops[idx])
    }
    activeRef.current = true
    resetValues()
    setInputState("")
  }

  function handleVerify() {
    if (inputState === "") return
    if (parseInt(inputState) === res) {
      setAnsState(1)
      if (activeRef.current) {
        correctRef.current += 1
        activeRef.current = false
      }
    } else {
      setAnsState(-1)
      if (activeRef.current) {
        wrongRef.current += 1
        activeRef.current = false
      }
    }
    localStorage.setItem("correct", correctRef.current.toString())
    localStorage.setItem("wrong", wrongRef.current.toString())
  }

  function handleSetOp(newOp: string) {
    setOpState(newOp)
  }

  function handleSetShuf(newShuf: boolean) {
    setShuffle(newShuf)
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value)
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div>{getTimeString()}</div>
      <div className="flex items-center justify-center gap-2">
        <ScoreCounter score={correctRef.current} type="correct" />
        <ScoreCounter score={wrongRef.current} type="wrong" />
      </div>
      <MathDisplay a={aRef.current} b={bRef.current} op={opState} />
      <AnsInput
        value={inputState}
        onChange={handleInputChange}
        ansState={ansState}
      />
      <div className="flex items-center justify-center gap-2">
        <Button onClick={handleRefresh}>
          <RefreshCw size={16} />
        </Button>
        <Button onClick={handleVerify}>
          <Check size={16} />
        </Button>
      </div>
      <SettingsPanel
        opState={opState}
        handleSetOp={handleSetOp}
        shufState={shuffle}
        handleSetShuf={handleSetShuf}
        maxNumState={maxNumState}
        setMaxNumState={setMaxNumState}
      />
    </div>
  )
}

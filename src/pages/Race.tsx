import AccuracyBar from "@/components/accuracyBar"
import ActionButton from "@/components/actionButton"
import AnswerInput from "@/components/ansInput"
import MathDisplay from "@/components/mathDisplay"
import RaceCounter from "@/components/raceCounter"
import TargetButton from "@/components/targetButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Divide, Dot, Minus, Plus, Shuffle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useStopwatch } from "react-timer-hook"

export default function Race() {
  const [stage, setStage] = useState(0)
  const [target, setTarget] = useState(10)

  const [opState, setOpState] = useState("add")
  const [shuffle, setShuffle] = useState(false)
  const [maxNumState, setMaxNumState] = useState(100)

  const aRef = useRef(Math.ceil(Math.random() * 10))
  const bRef = useRef(Math.ceil(Math.random() * 10))
  const [res, setRes] = useState(0)

  const correctRef = useRef(0)
  const wrongRef = useRef(0)

  const [inputState, setInputState] = useState("")

  const { minutes, seconds, start, reset, pause } = useStopwatch()

  console.log(shuffle)

  // initialization
  useEffect(() => {
    setStage(0)
  }, [])

  // click listener
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

  function getOpName() {
    if (shuffle) return "Różne działania"
    else if (opState == "add") return "Dodawanie"
    else if (opState == "sub") return "Odejmowanie"
    else if (opState == "mul") return "Mnożenie"
    else return "Dzielenie"
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key == "Enter" && inputState) handleVerify()
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
    if (shuffle) {
      const ops = ["add", "sub", "mul", "div"]
      const idx = randomInRange(0, 3)
      setOpState(ops[idx])
    }
    resetValues()
    setInputState("")
  }

  function handleVerify() {
    if (inputState === "") return
    if (parseInt(inputState) === res) {
      correctRef.current += 1
      if (correctRef.current >= target) {
        setStage(2)
        pause()
        return
      }
    } else {
      wrongRef.current += 1
    }
    handleRefresh()
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputState(event.target.value)
  }

  function handleStart() {
    correctRef.current = 0
    wrongRef.current = 0
    setInputState("")
    setStage(1)
    resetValues()
    reset()
    start()
  }

  function RaceCreator() {
    return (
      <>
        <h2 className="text-lg font-bold mb-2">Utwórz wyścig</h2>
        <div className="mb-2">Działanie</div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <ActionButton
            op={opState}
            ownOp="add"
            shuf={shuffle}
            tooltipName="Dodawanie"
            onClick={() => {
              setOpState("add")
              setShuffle(false)
            }}
          >
            <Plus />
          </ActionButton>
          <ActionButton
            op={opState}
            ownOp="sub"
            shuf={shuffle}
            tooltipName="Odejmowanie"
            onClick={() => {
              setOpState("sub")
              setShuffle(false)
            }}
          >
            <Minus />
          </ActionButton>
          <ActionButton
            op={opState}
            ownOp="mul"
            shuf={shuffle}
            tooltipName="Mnożenie"
            onClick={() => {
              setOpState("mul")
              setShuffle(false)
            }}
          >
            <Dot />
          </ActionButton>
          <ActionButton
            op={opState}
            ownOp="div"
            shuf={shuffle}
            tooltipName="Dzielenie"
            onClick={() => {
              setOpState("div")
              setShuffle(false)
            }}
          >
            <Divide />
          </ActionButton>
          <ActionButton
            op={opState}
            ownOp="all"
            shuf={shuffle}
            tooltipName="Mieszane"
            onClick={() => {
              setOpState("add")
              setShuffle(true)
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
        <div className="my-2">Cel</div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <TargetButton
            targetValue={10}
            targetState={target}
            setTarget={setTarget}
          />
          <TargetButton
            targetValue={25}
            targetState={target}
            setTarget={setTarget}
          />
          <TargetButton
            targetValue={50}
            targetState={target}
            setTarget={setTarget}
          />
          <TargetButton
            targetValue={100}
            targetState={target}
            setTarget={setTarget}
          />
        </div>
        <Button className="my-4" onClick={() => handleStart()}>
          Start
        </Button>
      </>
    )
  }

  function RaceResults() {
    const accuracy = Math.round(
      (correctRef.current / (correctRef.current + wrongRef.current)) * 100
    )
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold my-2">Wyniki wyścigu</h2>
        <h3>
          {getOpName()} do {maxNumState}, {target} poprawnych
        </h3>
        <div className="bg-time text-3xl px-4 py-2 rounded-md mx-auto">
          {getTimeString()}
        </div>
        <AccuracyBar accuracy={accuracy} />
        <Button onClick={handleStart} className="w-max mx-auto">
          Spróbuj ponownie
        </Button>
        <Button onClick={() => setStage(0)} className="w-max mx-auto">
          Nowy wyścig
        </Button>
      </div>
    )
  }

  return (
    <div>
      {stage === 0 ? (
        <RaceCreator />
      ) : stage === 1 ? (
        <div className="flex flex-col gap-4">
          <div>{getTimeString()}</div>
          <RaceCounter correct={correctRef.current} target={target} />
          <MathDisplay a={aRef.current} b={bRef.current} op={opState} />
          <div className="flex flex-row gap-3">
            <AnswerInput
              value={inputState}
              onChange={handleInputChange}
              ansState={0}
            />
            <Button onClick={handleVerify}>
              <Check size={16} />
            </Button>
          </div>
        </div>
      ) : (
        <RaceResults />
      )}
    </div>
  )
}

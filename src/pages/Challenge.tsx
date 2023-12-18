import ActionButton from "@/components/actionButton"
import AnswerInput from "@/components/ansInput"
import ChallengeTimer from "@/components/challengeTimer"
import MathDisplay from "@/components/mathDisplay"
import ScoreCounter from "@/components/scoreCounter"
import TimeButton from "@/components/timeButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Check, Divide, Dot, Minus, Plus, Shuffle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Challenge() {
  const [stage, setStage] = useState(0)
  const [timeLimit, setTimeLimit] = useState(300)

  const [opState, setOpState] = useState("add")
  const [shuffle, setShuffle] = useState(false)
  const [maxNumState, setMaxNumState] = useState(100)

  const aRef = useRef(Math.ceil(Math.random() * 10))
  const bRef = useRef(Math.ceil(Math.random() * 10))
  const [res, setRes] = useState(0)

  const correctRef = useRef(0)
  const wrongRef = useRef(0)

  const [inputState, setInputState] = useState("")

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

  useEffect(() => {
    handleRefresh()
  }, [opState, shuffle])

  function getOpName() {
    if (shuffle) return "Różne działania"
    else if (opState == "add") return "Dodawanie"
    else if (opState == "sub") return "Odejmowanie"
    else if (opState == "mul") return "Mnożenie"
    else return "Dzielenie"
  }

  function getPace() {
    const paceNum = timeLimit / (correctRef.current + wrongRef.current)
    return (+paceNum.toFixed(2)).toString()
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
    setStage(1)
    resetValues()
  }

  function handleTimeUp() {
    console.log("Time Up")
    setStage(2)
  }

  function ChallengeCreator() {
    return (
      <>
        <h2 className="text-lg font-bold mb-2">Utwórz wyzwanie</h2>
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
        <div className="my-2">Limit czasu</div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <TimeButton
            timeValue={60}
            timeState={timeLimit}
            timeText="1 minuta"
            setTime={setTimeLimit}
          />
          <TimeButton
            timeValue={180}
            timeState={timeLimit}
            timeText="3 minuty"
            setTime={setTimeLimit}
          />
          <TimeButton
            timeValue={300}
            timeState={timeLimit}
            timeText="5 minut"
            setTime={setTimeLimit}
          />
          <TimeButton
            timeValue={600}
            timeState={timeLimit}
            timeText="10 minut"
            setTime={setTimeLimit}
          />
        </div>
        <Button className="my-4" onClick={() => handleStart()}>
          Start
        </Button>
      </>
    )
  }

  function ChallengeResults() {
    const accuracy = Math.round(
      (correctRef.current / (correctRef.current + wrongRef.current)) * 100
    )
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold my-2">Wyniki wyzwania</h2>
        <h3>
          {getOpName()} do {maxNumState}
        </h3>
        <div className="flex flex-row gap-4 items-center justify-center">
          <div>Poprawne odpowiedzi</div>
          <div className="bg-correct px-4 py-2 rounded-md text-lg">
            {correctRef.current}
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <div>Błędne odpowiedzi</div>
          <div className="bg-wrong px-4 py-2 rounded-md text-lg">
            {wrongRef.current}
          </div>
        </div>
        <div className="text-center">Dokładność</div>
        <Progress value={accuracy} indicatorColor="bg-primary" />
        <div className="text-center">{accuracy}%</div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <div>Tempo</div>
          <div className="bg-secondary px-4 py-2 rounded-md text-lg">
            {getPace()}s
          </div>
        </div>
        <Button onClick={handleStart} className="w-max mx-auto">
          Spróbuj ponownie
        </Button>
        <Button onClick={() => setStage(0)} className="w-max mx-auto">
          Nowe wyzwanie
        </Button>
      </div>
    )
  }

  return (
    <div>
      {stage === 0 ? (
        <ChallengeCreator />
      ) : stage === 1 ? (
        <div className="flex flex-col gap-4">
          <ChallengeTimer timeLimit={timeLimit} onExpire={handleTimeUp} />
          <div className="flex items-center justify-center gap-2">
            <ScoreCounter score={correctRef.current} type="correct" />
            <ScoreCounter score={wrongRef.current} type="wrong" />
          </div>
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
        <ChallengeResults />
      )}
    </div>
  )
}

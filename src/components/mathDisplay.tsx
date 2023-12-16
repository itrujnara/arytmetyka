function getSymbol(op: string) {
  if (op === "add") return "+"
  if (op === "sub") return "–"
  if (op === "mul") return "·"
  if (op === "div") return ":"
  return "ERROR"
}

export default function MathDisplay({
  a,
  b,
  op,
}: {
  a: number
  b: number
  op: string
}) {
  return (
    <div className="text-4xl">
      {a} {getSymbol(op)} {b}
    </div>
  )
}

import { ReactNode } from "react"
import { NavLink, useResolvedPath, useMatch } from "react-router-dom"

export default function Navigation({ ...props }) {
  return (
    <ul
      className={
        "flex flex-row gap-4 text-lg items-center justify-center " +
        props.className
      }
    >
      <NavEntry to="/">Trening</NavEntry>
      <NavEntry to="/challenge">Wyzwanie</NavEntry>
      <NavEntry to="/race">Wyścig</NavEntry>
      <NavEntry to="/about">Informacje</NavEntry>
    </ul>
  )
}

function NavEntry({
  to,
  children,
  ...props
}: {
  to: string
  children: ReactNode
}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active underline" : ""}>
      <NavLink to={to} className="text-primary" {...props}>
        {children}
      </NavLink>
    </li>
  )
}

import { render } from "@testing-library/react"
import { Hello } from "./Hello"

test("hello", ()=>{
  render(<Hello />)
  const text = screen.getByText("Hello");
  expect(text).toBeInTheDocument()
})
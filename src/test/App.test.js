import { render } from "@testing-library/react"
import App from "../App"

describe('Test component App', () => {
    it('show render without crash', () => {
        render(<App />)
    })
})
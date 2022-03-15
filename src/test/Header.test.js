import { render } from "@testing-library/react";
import Header from "../components/Header/Header";

describe("Header", () => {
  it("Header is render", () => {
    render(<Header />);
  });
});

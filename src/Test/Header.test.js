import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";

describe("Test the Header Component", () => {
  test("Render the header with logout button", async () => {
    render(<Header />);

    const buttonList = await screen.findAllByRole("button");

    expect(buttonList).toHaveLength(1);
  });
});

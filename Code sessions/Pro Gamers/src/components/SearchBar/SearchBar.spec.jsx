import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("should contain the correct value when written to", () => {
    const onChange = jest.fn();

    render(<SearchBar value="Test" onChange={onChange} />);

    const input = screen.getByLabelText("Search");
    const newEvent = { target: { value: "New test" } };

    fireEvent.change(input, newEvent);

    expect(screen.getByDisplayValue("Test")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith("New test");
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import { Subscribe } from "./Subscribe";

describe("Subscribe", () => {
  it("should display the correct values based on inputted values", () => {
    render(<Subscribe />);

    const fullName = screen.getByLabelText("Full name");
    const email = screen.getByLabelText("Email address");
    const telephone = screen.getByLabelText("Telephone");

    fireEvent.change(fullName, { target: { value: "Arnar Leifsson" } });
    fireEvent.change(email, { target: { value: "arnarl@ru.is" } });
    fireEvent.change(telephone, { target: { value: "8235194" } });

    expect(fullName).toHaveValue("Arnar Leifsson");
    expect(email).toHaveValue("arnarl@ru.is");
    expect(telephone).toHaveValue("8235194");
  });

  it("should contain an error if the form is invalid", () => {
    render(<Subscribe />);

    fireEvent.submit(screen.getByTestId("form"));

    expect(screen.getByText("Full name is required.")).toBeInTheDocument();
    expect(
      screen.getByText("Email is not properly formatted.")
    ).toBeInTheDocument();
    expect(screen.getByText("Telephone is not correct.")).toBeInTheDocument();
  });

  it("should successfully submit the form if the data is valid", () => {
    render(<Subscribe />);

    const fullName = screen.getByLabelText("Full name");
    const email = screen.getByLabelText("Email address");
    const telephone = screen.getByLabelText("Telephone");

    fireEvent.change(fullName, { target: { value: "Arnar Leifsson" } });
    fireEvent.change(email, { target: { value: "arnarl@ru.is" } });
    fireEvent.change(telephone, { target: { value: "8235194" } });

    fireEvent.submit(screen.getByTestId("form"));

    expect(screen.getByText("Successfully subscribed!")).toBeInTheDocument();
  });
});

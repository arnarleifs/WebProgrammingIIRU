import { fireEvent, render, screen } from "@testing-library/react";
import { Subscribe } from "./Subscribe";

describe("Subscribe", () => {
  it("should display the correct values based on the inputted values", () => {
    render(<Subscribe />);

    const fullName = screen.getByLabelText("Full name");
    const email = screen.getByLabelText("Email address");
    const telephone = screen.getByLabelText("Telephone");
    const address = screen.getByLabelText("Address");

    fireEvent.change(fullName, { target: { value: "Arnar Leifsson" } });
    fireEvent.change(email, { target: { value: "arnarl@ru.is" } });
    fireEvent.change(telephone, { target: { value: "8235194" } });
    fireEvent.change(address, { target: { value: "Menntavegur 1" } });

    expect(fullName).toHaveValue("Arnar Leifsson");
    expect(email).toHaveValue("arnarl@ru.is");
    expect(telephone).toHaveValue("8235194");
    expect(address).toHaveValue("Menntavegur 1");
  });

  it("should contain an error if the form is invalid", () => {
    render(<Subscribe />);

    fireEvent.submit(screen.getByTestId("form"));

    expect(screen.getByText("Full name is required.")).toBeInTheDocument();
    expect(
      screen.getByText("Email is not properly formatted.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Telephone is not properly formatted.")
    ).toBeInTheDocument();
    expect(screen.getByText("Address is required.")).toBeInTheDocument();
  });

  it("should successfully submit the form if the data is valid", () => {
    render(<Subscribe />);

    const fullName = screen.getByLabelText("Full name");
    const email = screen.getByLabelText("Email address");
    const telephone = screen.getByLabelText("Telephone");
    const address = screen.getByLabelText("Address");

    fireEvent.change(fullName, { target: { value: "Arnar Leifsson" } });
    fireEvent.change(email, { target: { value: "arnarl@ru.is" } });
    fireEvent.change(telephone, { target: { value: "8235194" } });
    fireEvent.change(address, { target: { value: "Menntavegur 1" } });

    fireEvent.submit(screen.getByTestId("form"));

    expect(screen.getByText("Successfully subscribed!")).toBeInTheDocument();
  });
});

import { App } from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

// Mock the socket.io-client library, because we don't really want to communicate with the server
var mockEmit;
jest.mock("socket.io-client", () => {
  mockEmit = jest.fn();
  return jest.fn(() => ({
    emit: mockEmit,
    on: jest.fn(),
    off: jest.fn(),
  }));
});

describe("App", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should send a valid message", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Enter your message..");
    const button = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "A new message" } });
    fireEvent.click(button);

    expect(mockEmit).toHaveBeenCalledWith("message", "A new message");
  });
});

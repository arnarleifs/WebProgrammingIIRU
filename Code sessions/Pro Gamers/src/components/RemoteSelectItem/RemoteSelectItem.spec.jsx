import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { RemoteSelectItem } from "./RemoteSelectItem";

describe("RemoteSelectItem", () => {
  it("should render RemoteSelectItem correctly", async () => {
    render(<RemoteSelectItem value="" label="Country" getOptions={() => []} />);
    await waitFor(() => {
      const fullName = screen.getByLabelText("Country");
      expect(fullName).toBeInTheDocument();
    });
  });

  it("should render RemoteSelectItem options", async () => {
    render(
      <RemoteSelectItem
        value=""
        label="Country"
        getOptions={async () => [
          {
            value: 1,
            label: "zup",
          },
          {
            value: 2,
            label: "yo",
          },
        ]}
      />
    );
    fireEvent.mouseDown(screen.getByRole("button"));

    await waitFor(() => {
      screen.getAllByRole("option");
    });

    expect(screen.getAllByRole("option")).toHaveLength(2);
  });
});

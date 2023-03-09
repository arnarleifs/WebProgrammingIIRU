import { RemoteSelectItem } from "./RemoteSelectItem";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("RemoteSelectItem", () => {
  it("should render RemoteSelectItem correctly", () => {
    render(<RemoteSelectItem value="" label="Country" getOptions={() => []} />);

    const label = screen.getByLabelText("Country");
    expect(label).toBeInTheDocument();
  });

  it("should render RemoteSelectItem options", async () => {
    render(
      <RemoteSelectItem
        value=""
        label="Country"
        getOptions={async () => [
          {
            value: 1,
            label: "First item",
          },
          {
            value: 2,
            label: "Second item",
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

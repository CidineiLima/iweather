import { render, screen, fireEvent } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should  be return city details selected.", () => {
    const data = [
      { id: "1", name: "Cotia", latitude: 123, longitude: 456 },
      { id: "2", name: "Osasco", latitude: 789, longitude: 987 },
      { id: "3", name: "Vila Maria", latitude: 429, longitude: 907 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/Vila/i);
    fireEvent.press(selectedCity);
    expect(onPress).toHaveBeenCalledWith(data[2]);
  });

  it("Not should de show options when data props is emply.", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});

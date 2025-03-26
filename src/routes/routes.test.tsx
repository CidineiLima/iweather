import { act, screen, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "@routes/index";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { render } from "@mocks/utils/customRender";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@mocks/api/mockWeatherAPIResponse";

describe("Routes", () => {
  it("should be render Search screen when not city selecte", async () => {
    render(<Routes />);
    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });
});

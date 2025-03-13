import { getNextDays } from "./getNextDays"

describe("getNextDays", () => {
    it("retorna os próximos cinco dias fixos", () => {
        const days = getNextDays();
        expect(days.length).toBe(5);
    });
});
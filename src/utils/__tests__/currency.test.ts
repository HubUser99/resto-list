import { parseCurrencyToSymbol, parsePriceToString } from "../currency";

describe("parses currency to a symbol", () => {
    it("parses EUR to symbol", () => {
        const actual = parseCurrencyToSymbol("EUR");
        const expected = "€";

        expect(actual).toEqual(expected);
    });

    it("parses USD to symbol", () => {
        const actual = parseCurrencyToSymbol("USD");
        const expected = "$";

        expect(actual).toEqual(expected);
    });
});

describe("parses price integer to price string", () => {
    it("parses to EUR price string", () => {
        const actual = parsePriceToString(390, "EUR");
        const expected = "3.90 €";

        expect(actual).toEqual(expected);
    });

    it("parses to USD price string", () => {
        const actual = parsePriceToString(590, "USD");
        const expected = "5.90 $";

        expect(actual).toEqual(expected);
    });
});

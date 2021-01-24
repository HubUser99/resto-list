import { Currency } from "../types/types";

export const parseCurrencyToSymbol = (currency: Currency) => {
    switch (currency) {
        case "EUR":
            return "€";
        case "USD":
            return "$";
    }
};

export const parsePriceToString = (price: number, currency: Currency) => {
    const currencySymbol = parseCurrencyToSymbol(currency);
    const priceString = (price / 100).toFixed(2);

    return `${priceString} ${currencySymbol}`;
};

import { Restaurant } from "../../types/types";
import { sortRestaurantsByName } from "../sort";

test("sorts restaurants by name", () => {
    const restaurants: Restaurant[] = [
        {
            blurhash: "UUKJMXv|x]oz0gtRM{V@AHRQwvxZXSs9s;o0",
            city: "Helsinki",
            currency: "EUR",
            delivery_price: 390,
            description: "Asenneburgeri",
            image:
                "https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90",
            location: [24.941325187683105, 60.169938852212965],
            name: "Social Burgerjoint Citycenter",
            online: false,
            tags: ["hamburger", "fries"],
        },
        {
            blurhash: "U8INy*D+KjIW%3pZ$yx[5T0Lv|_1.3m,0z9h",
            city: "Helsinki",
            currency: "EUR",
            delivery_price: 390,
            description: "Japanilaista ramenia parhaimmillaan",
            image:
                "https://prod-wolt-venue-images-cdn.wolt.com/5d108aa82e757db3f4946ca9/d88ebd36611a5e56bfc6a60264fe3f81",
            location: [24.941786527633663, 60.169934599421396],
            name: "Momotoko Citycenter",
            online: false,
            tags: ["ramen", "risotto"],
        },
        {
            blurhash: "UXJHswsy-n%0~T%Ka%NLNFjFxvNe%MRjM|ax",
            city: "Helsinki",
            currency: "EUR",
            delivery_price: 390,
            description: "Modernia gourmet-kebabia ",
            image:
                "https://prod-wolt-venue-images-cdn.wolt.com/5abcf2d270aae6000deacff0/9c21840f97e01f5c293eae0993b4faa2",
            location: [24.94184732393478, 60.16993168083865],
            name: "D\u00f6ner Harju City",
            online: true,
            tags: ["kebab", "d\u00f6ner"],
        },
    ];

    const actual = sortRestaurantsByName(restaurants);
    const expected = [
        {
            blurhash: "UXJHswsy-n%0~T%Ka%NLNFjFxvNe%MRjM|ax",
            city: "Helsinki",
            currency: "EUR",
            delivery_price: 390,
            description: "Modernia gourmet-kebabia ",
            image:
                "https://prod-wolt-venue-images-cdn.wolt.com/5abcf2d270aae6000deacff0/9c21840f97e01f5c293eae0993b4faa2",
            location: [24.94184732393478, 60.16993168083865],
            name: "D\u00f6ner Harju City",
            online: true,
            tags: ["kebab", "d\u00f6ner"],
        },
        {
            blurhash: "U8INy*D+KjIW%3pZ$yx[5T0Lv|_1.3m,0z9h",
            city: "Helsinki",
            currency: "EUR",
            delivery_price: 390,
            description: "Japanilaista ramenia parhaimmillaan",
            image:
                "https://prod-wolt-venue-images-cdn.wolt.com/5d108aa82e757db3f4946ca9/d88ebd36611a5e56bfc6a60264fe3f81",
            location: [24.941786527633663, 60.169934599421396],
            name: "Momotoko Citycenter",
            online: false,
            tags: ["ramen", "risotto"],
        },
        {
            blurhash: "UUKJMXv|x]oz0gtRM{V@AHRQwvxZXSs9s;o0",
            city: "Helsinki",
            currency: "EUR",
            delivery_price: 390,
            description: "Asenneburgeri",
            image:
                "https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90",
            location: [24.941325187683105, 60.169938852212965],
            name: "Social Burgerjoint Citycenter",
            online: false,
            tags: ["hamburger", "fries"],
        },
    ];

    expect(actual).toStrictEqual(expected);
});

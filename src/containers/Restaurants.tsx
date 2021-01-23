import { Restaurant } from "../types/types";

interface Props {
    restaurants: Restaurant[];
}

const Restaurants = ({ restaurants }: Props) => {
    const hasRestaurants = restaurants.length > 0;

    return hasRestaurants ? (
        <div>
            {restaurants.map((item) => (
                <div key={item.name}>{item.name}</div>
            ))}
        </div>
    ) : null;
};

export default Restaurants;

import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchRestaurants } from "./comm/api";
import Restaurants from "./containers/Restaurants";
import { Restaurant } from "./types/types";

function App() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        const handleFetchRestaurants = async () => {
            const data = await fetchRestaurants();
            if (data) {
                setRestaurants(data.restaurants);
            }
        };

        handleFetchRestaurants();
    }, []);

    return (
        <div className="App">
            <Restaurants restaurants={restaurants} />
        </div>
    );
}

export default App;

export const fetchRestaurants = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json"
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

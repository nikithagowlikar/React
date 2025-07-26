// pages/api/restaurants.js

export default async function handler(req, res) {
  const swiggyUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const response = await fetch(swiggyUrl);
    console.log("reeeeee", response);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log("e", error);
    res.status(500).json({ message: "Failed to fetch", error });
  }
}

import { useState } from "react";
import resObj from "../utils/mock";
import Card from "./Card";
//  {
//     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     info: {
//       id: "17105",
//       name: "KFC",
//       cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5cd9018c-0e72-4cbd-8b53-4e0495282338_17105.JPG",
//       locality: "Mehdipatnam",
//       areaName: "Mehdipatnam",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
//       avgRating: 4.1,
//       parentId: "547",
//       avgRatingString: "4.1",
//       totalRatingsString: "35K+",
//       sla: {
//         deliveryTime: 33,
//         lastMileTravel: 2.6,
//         serviceability: "SERVICEABLE",
//         slaString: "30-35 mins",
//         lastMileTravelString: "2.6 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-07-06 00:30:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "Rxawards/_CATEGORY-Burger.png",
//             description: "Delivery!",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Delivery!",
//                   imageId: "Rxawards/_CATEGORY-Burger.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹59",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "4.1",
//           ratingCount: "5.9K+",
//         },
//         source: "GOOGLE",
//         sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-a1395f6d-753d-40c1-8bec-a406e050956e",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/hyderabad/kfc-mehdipatnam-rest17105",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
const RestaurantContainer = () => {
  const [filter, setFilter] = useState(resObj);
  console.log("usesS", useState());
  return (
    <>
      <div className="search-bar">
        <button
          className="search-button"
          onClick={() => {
            const filterData = resObj.filter((i) => {
              return i?.info?.avgRating >= 4.3;
            });
            setFilter(filterData);
          }}
        >
          Filter top rated restaurants
        </button>
      </div>
      <div className="RestaurantContainer">
        {filter.map((item) => {
          return <Card key={item?.info?.id} data={item} />;
        })}
      </div>
    </>
  );
};
export default RestaurantContainer;

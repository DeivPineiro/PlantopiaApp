import { Loader } from "@googlemaps/js-api-loader";

export const apiKey = import.meta.env.VITE_APP_API_KEY_MAP;
const loader = new Loader({
  apiKey: apiKey,
  version: "3.46",
  libraries: ["geometry", "places"],
});

export default loader;
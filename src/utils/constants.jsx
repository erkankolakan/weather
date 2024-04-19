// to dynamically retrieve weather icons
import clearD from "../../assets/weather-icons/Clear_Day.png";
import clearN from "../../assets/weather-icons/Clear_Night.png";
import cloudyD from "../../assets/weather-icons/Cloudy_Day.png";
import cloudyN from "../../assets/weather-icons/Cloudy_Night.png";
import fewCloudsD from "../../assets/weather-icons/Few-Clouds_Day.png";
import fewCloudsN from "../../assets/weather-icons/Few-Clouds_Night.png";
import rainD from "../../assets/weather-icons/Rain_Day.png";
import rainN from "../../assets/weather-icons/Rain_Night.png";
import stormD from "../../assets/weather-icons/Storm_Day.png";
import stormN from "../../assets/weather-icons/Storm_Night.png";
import snowy from "../../assets/weather-icons/Snowy.png";
import mist from "../../assets/weather-icons/Mist.png";

// to dynamically retrieve weather backgrounds
import bgClearD from "../../assets/bg-images/Clear_Day.jpg";
import bgClearN from "../../assets/bg-images/Clear_Night.jpg";
import bgCloudyD from "../../assets/bg-images/Cloudy_Day.jpg";
import bgCloudyN from "../../assets/bg-images/Cloudy_Night.jpg";
import bgFewCloudsD from "../../assets/bg-images/Few-Clouds_Day.jpg";
import bgFewCloudsN from "../../assets/bg-images/Few-Clouds_Night.jpg";
import bgRainD from "../../assets/bg-images/Rain_Day.jpg";
import bgRainN from "../../assets/bg-images/Rain_Night.jpg";
import bgStormD from "../../assets/bg-images/Storm_Day.jpg";
import bgStormN from "../../assets/bg-images/Storm_Night.jpg";
import bgMist from "../../assets/bg-images/Mist.jpg";
import bgSnowy from "../../assets/bg-images/Snowy.jpg";

export const iconUrls = {
  "01d": clearD,
  "01n": clearN,
  "02d": fewCloudsD,
  "02n": fewCloudsN,
  "03d": cloudyD,
  "03n": cloudyN,
  "04d": cloudyD,
  "04n": cloudyN,
  "09d": rainD,
  "09n": rainN,
  "10d": rainD,
  "10n": rainN,
  "11d": stormD,
  "11n": stormN,
  "13d": snowy,
  "13n": snowy,
  "50d": mist,
  "50n": mist,
};

export const bgUrls = {
  "01d": bgClearD,
  "01n": bgClearN,
  "02d": bgFewCloudsD,
  "02n": bgFewCloudsN,
  "03d": bgCloudyD,
  "03n": bgCloudyN,
  "04d": bgCloudyD,
  "04n": bgCloudyN,
  "09d": bgRainD,
  "09n": bgRainN,
  "10d": bgRainD,
  "10n": bgRainN,
  "11d": bgStormD,
  "11n": bgStormN,
  "50d": bgMist,
  "50n": bgMist,
  "13d": bgSnowy,
  "13n": bgSnowy,
};

import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, {
  G,
  Path,
  Use,
  Defs,
  Symbol,
  Ellipse,
  Rect
} from "react-native-svg";

function Trophy() {
  return (
    <Fragment>
      <Symbol id="trophy" data-name="Trophy" viewBox="0 0 100.38 120">
        <Path
          d="M97.39 12.1c-3.06-2.49-8.22-3-16-1.73L82.15 0H18.92l.75 10.52C11.49 9 6.14 9.51 3 12.06a8.09 8.09 0 00-3 6.71c.15 9 2 15.05 4.39 22a27.3 27.3 0 006.48 11 15.63 15.63 0 0011.38 4.54h2.3a34.59 34.59 0 005.72 10.19 26.15 26.15 0 0014.48 9.07v9.49a22.18 22.18 0 00-15.17 13.67l-.5 1.27h-4.33a7.5 7.5 0 00-7.5 7.5v5a7.5 7.5 0 007.5 7.5h50a7.5 7.5 0 007.5-7.5v-5a7.5 7.5 0 00-7.5-7.5h-4.06l-.5-1.27A22.17 22.17 0 0054.75 85v-9.12a25.91 25.91 0 0016-9.33 34.61 34.61 0 005.73-10.19h1.75a16.33 16.33 0 0011.65-4.5 27.44 27.44 0 006.7-11 62.49 62.49 0 003.75-22 8.15 8.15 0 00-2.94-6.76zM16.07 46.42a20.46 20.46 0 01-4.59-8.05c-2.25-6.56-3.85-11.82-4-19.72 0-.59.12-.69.19-.75s1-.73 3.93-.73A39.35 39.35 0 0119 18l2 27.8c.1 1.06.25 2.07.43 3a8 8 0 01-5.36-2.38zm73.49-8.11a20.43 20.43 0 01-4.75 8.06 8.62 8.62 0 01-5.9 2.48c.19-1 .34-2 .47-3.07L81.48 18c8.62-1.64 10.81-.34 11.18 0 .09.07.23.19.22.8-.14 7.94-.98 12.88-3.32 19.51z"
          fill="#fd9757"
        />
        <Path
          d="M62.52 100H37.25a14.3 14.3 0 0112.63-8.09A14.31 14.31 0 0162.52 100zm-37.77 7.5v5h50v-5zM38 60.14a16 16 0 0025.18 0 27.53 27.53 0 005.73-14L71.42 10H29.66l2.56 36.15A27.45 27.45 0 0038 60.14z"
          fill="#ff6607"
        />
      </Symbol>
    </Fragment>
  );
}

export default Trophy;

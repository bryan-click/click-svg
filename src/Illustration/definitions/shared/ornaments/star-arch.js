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

import Star from "./star";

function StarArch() {
  return (
    <Fragment>
      <Star />
      <Symbol id="star-arch-1" data-name="Star Arch 1" viewBox="0 0 34.8 12.7">
        <Use
          width={9.53}
          height={8.69}
          transform="matrix(1 0 0 1.01 12.66 0)"
          xlinkHref="#star"
        />
        <Use
          width={9.53}
          height={8.69}
          transform="translate(25.27 4.01)"
          xlinkHref="#star"
        />
        <Use
          width={9.53}
          height={8.69}
          transform="translate(0 3.97)"
          xlinkHref="#star-active"
        />
      </Symbol>
      <Symbol id="star-arch-2" data-name="Star Arch 2" viewBox="0 0 34.8 12.7">
        <Use
          width={9.53}
          height={8.69}
          transform="matrix(1 0 0 1.01 12.66 0)"
          xlinkHref="#star-active"
        />
        <Use
          width={9.53}
          height={8.69}
          transform="translate(25.27 4.01)"
          xlinkHref="#star"
        />
        <Use
          width={9.53}
          height={8.69}
          transform="translate(0 3.97)"
          xlinkHref="#star-active"
        />
      </Symbol>
      <Symbol id="star-arch-3" data-name="Star Arch 3" viewBox="0 0 34.8 12.7">
        <Use
          width={9.53}
          height={8.69}
          transform="matrix(1 0 0 1.01 12.66 0)"
          xlinkHref="#star-active"
        />
        <Use
          width={9.53}
          height={8.69}
          transform="translate(25.27 4.01)"
          xlinkHref="#star-active"
        />
        <Use
          width={9.53}
          height={8.69}
          transform="translate(0 3.97)"
          xlinkHref="#star-active"
        />
      </Symbol>
    </Fragment>
  );
}

export default StarArch;

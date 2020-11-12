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

import BLOB_COLOR, { BG_COLOR } from "./colors";

function Blobs() {
  return (
    <Fragment>
      <Symbol id="blob1" data-name="Blob 1" viewBox="0 0 293 184">
        <Path
          d="M189.42 176.39C269.66 152.28 327 44.81 270 9.79S149.57 44.94 96.4 44.94 0 57.88 0 111s109.17 89.51 189.42 65.39z"
          fill={BLOB_COLOR}
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="blob2" data-name="Blob 2" viewBox="0 0 327 169">
        <Path
          data-name="Blob 2"
          d="M212.32 6.5c89.94 27.07 144.45 100.09 97.4 141s-110.43 10.69-170 10.69S0 161.21 0 101.56 122.38-20.57 212.32 6.5z"
          fill={BLOB_COLOR}
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="blob3" data-name="Blob 3" viewBox="0 0 255.4 211.93">
        <Path
          data-name="Blob 3"
          d="M199.34 70.93c40.38 0 60.07 33.41 55.38 66.84s-31.4 74.16-108.78 74.16-72.94-69.47-29.43-89.18S159 70.93 199.34 70.93zM71.32 7.82C144-14.65 149.61 16 142.74 40.75s-21.5 44.85-53 61S32 94.7 10.16 74.62-1.35 30.29 71.32 7.82z"
          fill={BLOB_COLOR}
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="blob4" data-name="Blob 4" viewBox="0 0 282 205">
        <Path
          data-name="Blob 4"
          d="M222.92 188.31c68.7-40.08 70.86-73.58 40.13-116.36S167.2 38.38 116.57 7.77 0 41.87 0 117.41s154.21 110.98 222.92 70.9z"
          fill={BLOB_COLOR}
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="blob5" data-name="Blob 5" viewBox="0 0 232.17 185.29">
        <Path
          data-name="Blob 5"
          d="M58.52 26.61C-1.66 65.47-23.4 167.72 31.69 183.16c31.4 8.8 56.42-11.1 80.23-32.16l3.74-3.33 3.74-3.33 2.48-2.2c14.47-12.81 28.74-24.59 44-29 43.68-12.54 76.12-33.43 63.57-77.3S118.7-12.24 58.52 26.61z"
          fill={BLOB_COLOR}
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="blob6" data-name="Blob 6" viewBox="0 0 315 199.05">
        <Path
          d="M111.36 8.23C25.1 34.32-36.58 150.57 24.74 188.46s129.46-38 186.62-38S315 136.43 315 78.93 197.63-17.86 111.36 8.23z"
          fill={BLOB_COLOR}
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="blob7" data-name="Blob 7" viewBox="0 0 282.25 202.24">
        <Path
          d="M.57 118.7c-6.4-40 42.49-36.08 76-16.38s54.09 18.67 75.37 47.42-18.57 53.89-52.68 52.44S7 158.71.57 118.7zM172.94 0C217 0 282.25 21.23 282.25 90.11S182 155 153.53 116.31s-101.45-55.58-88.34-81S128.84 0 172.94 0z"
          fill={BLOB_COLOR}
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="blob8" data-name="Blob 7" viewBox="0 0 282.25 202.24">
        <Path
          d="M.57 118.7c-6.4-40 42.49-36.08 76-16.38s54.09 18.67 75.37 47.42-18.57 53.89-52.68 52.44S7 158.71.57 118.7zM172.94 0C217 0 282.25 21.23 282.25 90.11S182 155 153.53 116.31s-101.45-55.58-88.34-81S128.84 0 172.94 0z"
          fill={BLOB_COLOR}
          fillRule="evenodd"
        />
      </Symbol>
    </Fragment>
  );
}

export default Blobs;

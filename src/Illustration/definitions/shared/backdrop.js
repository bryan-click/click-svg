import React, { Fragment } from 'react';
import { View } from 'react-native';
import Svg, {
  G,
  Path,
  Use,
  Defs,
  Symbol,
  Ellipse,
  Rect,
} from 'react-native-svg';

import BLOB_COLOR, { BG_COLOR } from './colors';

function Backdrop() {
  return (
    <Fragment>
      <Symbol id="backdrop" data-name="Backdrop" viewBox="0 0 327 218">
        <Rect
          data-name="Backdrop"
          width={327}
          height={218}
          rx={8}
          fill={BG_COLOR}
        />
      </Symbol>
    </Fragment>
  );
}

export default Backdrop;

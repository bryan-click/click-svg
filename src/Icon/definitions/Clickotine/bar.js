import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Bar({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M21,11.08H19V9.71a3.86,3.86,0,0,0,1-2.57,4,4,0,0,0-3.23-3.89,4.1,4.1,0,0,0-4-3h0a4.21,4.21,0,0,0-2.75,1A4.16,4.16,0,0,0,7.25.2a4.09,4.09,0,0,0-4,3.05A4,4,0,0,0,0,7.14,3.86,3.86,0,0,0,1,9.71v11a2.92,2.92,0,0,0,1.37,2.42A5,5,0,0,0,5.2,24h9.6a5,5,0,0,0,2.84-.85A2.92,2.92,0,0,0,19,20.71V20h2a3,3,0,0,0,3-3v-3A3,3,0,0,0,21,11.08ZM17,11v9.76a1,1,0,0,1-.52.79A3,3,0,0,1,14.8,22H5.2a3,3,0,0,1-1.68-.48A1,1,0,0,1,3,20.71V10.92a4,4,0,0,0,1,.16h.09a4.18,4.18,0,0,0,2.43-.87,5.21,5.21,0,0,0,2.76.87h1.36a5.21,5.21,0,0,0,2.76-.87,4.21,4.21,0,0,0,2.44.87H16a4.34,4.34,0,0,0,1-.16Zm.42-2.45a.27.27,0,0,0-.08.07,2.55,2.55,0,0,1-.52.33L16.68,9l-.38.11a2.86,2.86,0,0,1-.42,0h0a2.23,2.23,0,0,1-1.64-.71.23.23,0,0,0-.07-.07l-.08-.06h0l-.08,0h0l-.09-.05h0l-.09,0a.16.16,0,0,0-.09,0h0l-.24,0a1,1,0,0,0-.66.24,3.24,3.24,0,0,1-1,.6.61.61,0,0,0-.13,0,3.29,3.29,0,0,1-1,.17H9.33a3.49,3.49,0,0,1-1.16-.2h0l-.25-.12a2.44,2.44,0,0,1-.28-.14,2.94,2.94,0,0,1-.47-.34L7.1,8.25h0L7,8.2H7l-.08,0h0l-.09,0-.07,0h0l-.09,0h-.3l-.1,0h0a1,1,0,0,0-.48.3,2.2,2.2,0,0,1-1.63.71h0l-.42,0a2.55,2.55,0,0,1-.55-.19,2.67,2.67,0,0,1-.48-.32L2.58,8.5A1.92,1.92,0,0,1,2,7.14a2,2,0,0,1,2.12-2h0a1,1,0,0,0,1-1,2,2,0,0,1,2.12-2,2.19,2.19,0,0,1,1.6.67,1,1,0,0,0,.68.33l.32,0h.32c.11,0,.21,0,.32,0a1,1,0,0,0,.68-.33,2.19,2.19,0,0,1,1.6-.67,2,2,0,0,1,2.12,2,1,1,0,0,0,1,1h0a2,2,0,0,1,2.12,2A1.92,1.92,0,0,1,17.42,8.5ZM22,17a1,1,0,0,1-1,1H19V13.08h2a1,1,0,0,1,1,1Zm-6.6-3.13v4a1,1,0,0,1-2,0v-4a1,1,0,0,1,2,0Zm-9-1a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0v-4A1,1,0,0,0,6.4,12.91Zm4,0a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0v-4A1,1,0,0,0,10.4,12.91Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Bar;

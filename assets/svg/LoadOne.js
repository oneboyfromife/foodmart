import * as React from "react"
import Svg, { Rect, Circle } from "react-native-svg"
const LoadOne = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={8}
    fill="none"
    {...props}
  >
    <Rect width={32} height={8} x={0.5} fill="#2C42AC" rx={4} />
    <Circle cx={44.5} cy={4} r={4} fill="#BFC7EB" />
    <Circle cx={60.5} cy={4} r={4} fill="#BFC7EB" />
  </Svg>
)
export default LoadOne

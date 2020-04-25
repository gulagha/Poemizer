import * as React from 'react';

import Svg, { Circle, Line } from 'react-native-svg';

export default () => (
  <Svg width="32" height="32">
    <Circle cx="15" cy="15" r="5" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
    <Line x1="15" x2="15" y1="5" y2="3" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
    <Line x1="15" x2="15" y1="27" y2="25" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
    <Line x1="5" x2="3" y1="15" y2="15" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
    <Line x1="27" x2="25" y1="15" y2="15" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
    <Line x1="7.93" x2="6.51" y1="22.07" y2="23.49" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
    <Line x1="23.49" x2="22.07" y1="6.51" y2="7.93" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
    <Line x1="22.07" x2="23.49" y1="22.07" y2="23.49" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
    <Line x1="6.51" x2="7.93" y1="6.51" y2="7.93" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
  </Svg>
);

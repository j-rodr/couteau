import { Svg, Path } from 'react-native-svg';

export default function XIcon() {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} fill='none'>
      <Path
        stroke='#FFFFFF'
        strokeLinecap='square'
        strokeLinejoin='round'
        strokeWidth={2.5}
        d='M16 2 2 16M2 2l14 14'
      />
    </Svg>
  );
}

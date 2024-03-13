import { Svg, Path } from 'react-native-svg';

export default function HamburgerMenuIcon() {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width={18} height={12} fill='none'>
      <Path
        stroke='#191919'
        strokeLinecap='square'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M1 11h16M1 6h16M1 1h16'
      />
    </Svg>
  );
}

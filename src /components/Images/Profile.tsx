import LevelSrc from 'assets/images/profile/level.png';
import PointsSrc from 'assets/images/profile/points.png';
import CoinsSrc from 'assets/images/profile/coins.png';

import { createImageComponent } from 'utils/createImageComponent';

export const Level = createImageComponent({ src: LevelSrc, alt: 'level' });
export const Points = createImageComponent({ src: PointsSrc, alt: 'points' });
export const Coints = createImageComponent({ src: CoinsSrc, alt: 'coints' });

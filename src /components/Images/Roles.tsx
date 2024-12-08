import AdventurerSrc from 'assets/images/roles/adventurer.png';
import AvatarSrc from 'assets/images/roles/avatar.png';
import KingdomSrc from 'assets/images/roles/kingdom.png';

import { createImageComponent } from 'utils/createImageComponent';

export const Adventurer = createImageComponent({ src: AdventurerSrc, alt: 'adventurer' });
export const Avatar = createImageComponent({ src: AvatarSrc, alt: 'avatar' });
export const Kingdom = createImageComponent({ src: KingdomSrc, alt: 'kingdom' });

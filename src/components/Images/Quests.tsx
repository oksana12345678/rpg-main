import AdventureSrc from 'assets/images/quests/adventure.png';
import BasicSrc from 'assets/images/quests/basic.png';
import MiniBossSrc from 'assets/images/quests/mini_boss.png';
import ReusableSrc from 'assets/images/quests/reusable.png';
import RoutineSrc from 'assets/images/quests/routine.png';
import TeamSrc from 'assets/images/quests/team.png';

import { createImageComponent } from 'utils/createImageComponent';

export const Adventure = createImageComponent({ src: AdventureSrc, alt: 'adventure' });
export const Basic = createImageComponent({ src: BasicSrc, alt: 'basic' });
export const MiniBoss = createImageComponent({ src: MiniBossSrc, alt: 'mini_boss' });
export const Reusable = createImageComponent({ src: ReusableSrc, alt: 'reusable' });
export const Routine = createImageComponent({ src: RoutineSrc, alt: 'routine' });
export const Team = createImageComponent({ src: TeamSrc, alt: 'team' });

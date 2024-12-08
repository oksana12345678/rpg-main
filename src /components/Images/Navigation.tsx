import AcademySrc from 'assets/images/navigation/academy.png';
import InventorySrc from 'assets/images/navigation/inventory.png';
import KingdomSrc from 'assets/images/navigation/kingdom.png';
import LeaderboardSrc from 'assets/images/navigation/leaderboard.png';
import ProfileSrc from 'assets/images/navigation/profile.png';
import QuestsSrc from 'assets/images/navigation/quests.png';
import SettingsSrc from 'assets/images/navigation/settings.png';

import { createImageComponent } from 'utils/createImageComponent';

export const Academy = createImageComponent({ src: AcademySrc, alt: 'academy' });
export const Inventory = createImageComponent({ src: InventorySrc, alt: 'inventory' });
export const Kingdom = createImageComponent({ src: KingdomSrc, alt: 'kingdom' });
export const Leaderboard = createImageComponent({ src: LeaderboardSrc, alt: 'leaderboard' });
export const Profile = createImageComponent({ src: ProfileSrc, alt: 'profile' });
export const Quests = createImageComponent({ src: QuestsSrc, alt: 'quests' });
export const Settings = createImageComponent({ src: SettingsSrc, alt: 'settings' });

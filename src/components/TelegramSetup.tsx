import {
  useBackButton,
  useClosingBehavior,
  useMiniApp,
  useSwipeBehavior,
  useViewport,
  postEvent,
} from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

const TelegramSetup = () => {
  const miniApp = useMiniApp();
  const viewport = useViewport();
  const backButton = useBackButton();

  const swipeBehavior = useSwipeBehavior();
  const closingBehavior = useClosingBehavior();

  useEffect(() => {
    if (miniApp) {
      miniApp.ready();
      // miniApp.setBgColor('#141415'); // do not work at the moment
      miniApp.setHeaderColor('#141415');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      postEvent('web_app_set_bottom_bar_color' as any, { color: '#141415' }); // used new variable from recent telegram update https://core.telegram.org/bots/webapps which type does not exist on the postEvent method https://docs.telegram-mini-apps.com/platform/methods#web-app-request-theme
    }

    if (viewport) {
      viewport.expand();
    }

    if (swipeBehavior) {
      swipeBehavior.disableVerticalSwipe();
    }

    if (closingBehavior) {
      closingBehavior.enableConfirmation();
    }

    if (backButton) {
      backButton.hide();
    }
  }, [miniApp, viewport, swipeBehavior, closingBehavior, backButton]);

  return null;
};

export default TelegramSetup;

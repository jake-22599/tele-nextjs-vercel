'use client';

import { useLaunchParams } from '@telegram-apps/sdk-react';
import { Cell, Image, List } from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link';

import { DisplayData } from '@/components/DisplayData/DisplayData';

import backArrowSvg from '../_assets/back-arrow.svg';

export default function LaunchParamsPage() {
  const lp = useLaunchParams();

  return (
    <List>
      <Link href='../'>
        <Cell
            before={<Image src={backArrowSvg.src} style={{ backgroundColor: '#007AFF' }}/>}
            subtitle='Return to previous page'>
            Back
          </Cell>
      </Link>

      <DisplayData
        rows={[
          { title: 'tgWebAppPlatform', value: lp.platform },
          { title: 'tgWebAppShowSettings', value: lp.showSettings },
          { title: 'tgWebAppVersion', value: lp.version },
          { title: 'tgWebAppBotInline', value: lp.botInline },
          { title: 'tgWebAppStartParam', value: lp.startParam },
          { title: 'tgWebAppData', type: 'link', value: '/init-data' },
          { title: 'tgWebAppThemeParams', type: 'link', value: '/theme-params' },
        ]}
      />
    </List>
  );
};

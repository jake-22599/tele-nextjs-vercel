'use client';

import { useThemeParams } from '@telegram-apps/sdk-react';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { Cell, Image, List } from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link';

import { DisplayData } from '@/components/DisplayData/DisplayData';

import backArrowSvg from '../_assets/back-arrow.svg';

export default function ThemeParamsPage() {
  const themeParams = useThemeParams();

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
        rows={
          Object
            .entries(themeParams.getState())
            .map(([title, value]) => ({
              title: title
                .replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)
                .replace(/background/, 'bg'),
              value,
            }))
        }
      />
    </List>
  );
};

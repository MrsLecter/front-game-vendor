'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import s from './Security.module.scss';
import { Section } from 'components/common/profile/Section';
import { BackButton } from 'components/common/profile/BackButton';

interface SecurityProps {
  isTwoFactorEnabled?: boolean;
}

export const CurrentReport: FC<SecurityProps> = ({ isTwoFactorEnabled }) => {
  const t = useTranslations('ProfilePage.CurrentReport');
  return (
    <Section>
      <Section.FlexHeader>
        <BackButton />
        <h3>{t('title')}</h3>
      </Section.FlexHeader>
      <Section.Body>
        <div>current report</div>
      </Section.Body>
    </Section>
  );
};

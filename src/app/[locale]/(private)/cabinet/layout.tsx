import { ReactNode } from 'react';
import { EnumRoles } from 'types/enums';

import { Container } from 'ui/components/Container';
import { Header } from 'components/header';
import { ProfileSidebar } from './components/ProfileSidebar';

import { buyerConfig } from './sidebar-configs/buyer-config';

import s from './Cabinet.module.scss';
import { IUser } from 'types/userTypes';

export interface ISidebarConfig {
  items: {
    icon: ReactNode;
    lightIcon?: ReactNode;
    title: string;
    href: string;
  }[];
  footerContent?: ReactNode;
}

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  let currentConfig: ISidebarConfig = buyerConfig;
  ///TODO: delete mock user
  const user: IUser = {
    achievements: [],
    address: {
      city: 'Kharkiv',
      phoneNumber: '0000',
      street: 'SomeStreet',
      zipCode: '1111',
    },
    avatarURL: '../../../../assets/avatar.png',
    backgroundColor: '',
    backgroundImage: '',
    banned: false,
    bonuses: 2,
    confidentLvl: 8,
    email: 'Jane@gmail.com',
    emailConfirmDate: '12.11.20',
    experience: 2,
    id: '12312',
    isTwoFactorEnabled: false,
    level: 8,
    qrCode: '1231',
    ratingsStats: { entries: [] },
    role: EnumRoles.BUYER,
    stripeId: '123',
    subscribed: false,
    userName: 'Jane Cooper',
  };

  return (
    <>
      <Header />
      <main className={s.profile}>
        <Container>
          <div className={s.profile_wrapper}>
            <ProfileSidebar config={currentConfig} user={user} />
            {children}
          </div>
        </Container>
      </main>
    </>
  );
}

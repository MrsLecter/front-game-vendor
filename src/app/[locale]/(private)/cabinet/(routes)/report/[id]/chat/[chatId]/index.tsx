'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import s from './CurrentChat.module.scss';

import { Section } from 'components/common/profile/Section';
import { BackButton } from 'components/common/profile/BackButton';
import { useParams } from 'next/navigation';
import { ChatMessages } from 'components/common/ChatMessages';

import avatar from '../../../../../../../../../assets/avatar.jpg';
import { IChat } from 'types/chatTypes';
import { EnumPlatforms } from 'types/enums';
import { IProduct } from 'types/shopTypes';
import { SecondaryButton } from 'ui/components/Button';
import { ReportChat } from 'app/[locale]/(private)/cabinet/components/ReportChat';

interface IDetailsForm {
  answered_status: string;
}

export const CurrentChat: FC = () => {
  const t = useTranslations('ProfilePage.Chat');
  const params = useParams();

  const chat = [
    {
      createdAt: '12.11.2023',
      id: '123',
      lastMessage: {
        content: 'sdfafsdf',
        createdAt: '12.12.23',
        id: '12212',
        seenBy: [
          {
            avatarURL: '../../../../../../../../../assets/avatar.jpg',
            createdAt: '11.05.23',
            email: 'some@gmail.com',
            userName: 'User1',
          },
        ],
        sender: {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'sender@gmail.com',
          userName: 'Sender',
        },
        updatedAt: '11.05.23',
      },
      members: [
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member1@gmail.com',
          userName: 'Member11',
        },
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member2@gmail.com',
          userName: 'Member2',
        },
      ],
      updatedAt: '12.05.23',
    },
    {
      createdAt: '12.11.2023',
      id: '123',
      lastMessage: {
        content: 'sdfafsdf',
        createdAt: '12.12.23',
        id: '12212',
        seenBy: [
          {
            avatarURL: '../../../../../../../../../assets/avatar.jpg',
            createdAt: '11.05.23',
            email: 'some@gmail.com',
            userName: 'User1',
          },
        ],
        sender: {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'sender@gmail.com',
          userName: 'Sender',
        },
        updatedAt: '11.05.23',
      },
      members: [
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member1@gmail.com',
          userName: 'Member11',
        },
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member2@gmail.com',
          userName: 'Member2',
        },
      ],
      updatedAt: '12.05.23',
    },
    {
      createdAt: '12.11.2023',
      id: '123',
      lastMessage: {
        content: 'sdfafsdf',
        createdAt: '12.12.23',
        id: '12212',
        seenBy: [
          {
            avatarURL: '../../../../../../../../../assets/avatar.jpg',
            createdAt: '11.05.23',
            email: 'some@gmail.com',
            userName: 'User1',
          },
        ],
        sender: {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'sender@gmail.com',
          userName: 'Sender',
        },
        updatedAt: '11.05.23',
      },
      members: [
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member1@gmail.com',
          userName: 'Member11',
        },
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member2@gmail.com',
          userName: 'Member2',
        },
      ],
      updatedAt: '12.05.23',
    },
    {
      createdAt: '12.11.2023',
      id: '123',
      lastMessage: {
        content: 'sdfafsdf',
        createdAt: '12.12.23',
        id: '12212',
        seenBy: [
          {
            avatarURL: '../../../../../../../../../assets/avatar.jpg',
            createdAt: '11.05.23',
            email: 'some@gmail.com',
            userName: 'User1',
          },
        ],
        sender: {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'sender@gmail.com',
          userName: 'Sender',
        },
        updatedAt: '11.05.23',
      },
      members: [
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member1@gmail.com',
          userName: 'Member11',
        },
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member2@gmail.com',
          userName: 'Member2',
        },
      ],
      updatedAt: '12.05.23',
    },
    {
      createdAt: '12.11.2023',
      id: '123',
      lastMessage: {
        content: 'sdfafsdf',
        createdAt: '12.12.23',
        id: '12212',
        seenBy: [
          {
            avatarURL: '../../../../../../../../../assets/avatar.jpg',
            createdAt: '11.05.23',
            email: 'some@gmail.com',
            userName: 'User1',
          },
        ],
        sender: {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'sender@gmail.com',
          userName: 'Sender',
        },
        updatedAt: '11.05.23',
      },
      members: [
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member1@gmail.com',
          userName: 'Member11',
        },
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member2@gmail.com',
          userName: 'Member2',
        },
      ],
      updatedAt: '12.05.23',
    },

    {
      createdAt: '12.11.2023',
      id: '123',
      lastMessage: {
        content: 'sdfafsdf',
        createdAt: '12.12.23',
        id: '12212',
        seenBy: [
          {
            avatarURL: '../../../../../../../../../assets/avatar.jpg',
            createdAt: '11.05.23',
            email: 'some@gmail.com',
            userName: 'User1',
          },
        ],
        sender: {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'sender@gmail.com',
          userName: 'Sender',
        },
        updatedAt: '11.05.23',
      },
      members: [
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member1@gmail.com',
          userName: 'Member11',
        },
        {
          avatarURL: '../../../../../../../../../assets/avatar.jpg',
          createdAt: '11.05.23',
          email: 'member2@gmail.com',
          userName: 'Member2',
        },
      ],
      updatedAt: '12.05.23',
    },
  ] as IChat[];

  const handleSelectChat = () => {};

  const product = {
    categoryName: 'category',
    createdAt: '12.09.23',
    id: '123456',
    createdBy: {
      avatarURL: '../../../../../../../../../assets/avatar.jpg',
      email: 'someemail@gmail.com',
      id: '123456',
      payPalInfo: {
        paypalId: '1231',
        confirmed: '54546',
      },
      ratingsStats: {
        entries: [
          {
            key: '445',
            value: '464',
          },
          {
            key: '445',
            value: '464',
          },
          {
            key: '445',
            value: '464',
          },
          {
            key: '445',
            value: '464',
          },
          {
            key: '445',
            value: '464',
          },
        ],
      },
      stripeId: '546564',
      userName: 'Darrell Steward',
    },
    imageUrl: '../../../../../../../../../assets/avatar.jpg',
    platform: EnumPlatforms.PC,
    price: 123,
    quantity: '12',
    sectionName: 'namesection',
    shortDescription: {
      sh: 'string',
      pt: 'string',
      ru: 'string',
      en: 'sdfasdfasdf',
      ar: 'string',
      es: 'string',
    },
    description: {
      sh: 'string',
      pt: 'string',
      ru: 'string',
      en: 'fgdfgdfgd',
      ar: 'string',
      es: 'string',
    },
    sold: false,
    stripePriceId: '4654',
  } as IProduct;

  const handleCloseReport = () => {};

  return (
    <Section>
      <Section.FlexHeader>
        <BackButton />
        <h3>{'Nareerat Sakuna'}</h3>
        <SecondaryButton onClick={handleCloseReport} className={s.chat_button}>
          <span>{t('close_report')}</span>
        </SecondaryButton>
      </Section.FlexHeader>
      <Section.Body>
        <ReportChat product={product} />
      </Section.Body>
    </Section>
  );
};

import { FC } from 'react';
import { StaticImageData } from 'next/image';

import s from './ParticipantCard.module.scss';
import { UserAvatarWithCredentials } from 'components/common/UserAvatar';
import { SecondaryButton } from 'ui/components/Button';
import { ColumnTemplate } from '../ColumnTemplate/ColumnTemplate';

import { ChatIcon } from 'components/icons/ChatIcon';

interface ICard {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

interface ParticipantCardProps {
  user: {
    avatarURL: string;
    name: string;
    email: string;
  };
  header: string;
  banButtonLabel: string;
  className?: string;
  handleParticipantBan: () => void;
}

export const ParticipantCard: FC<ParticipantCardProps> = ({
  user,
  className,
  header,
  banButtonLabel,
  handleParticipantBan,
}) => {
  return (
    <ColumnTemplate headerLabel={header} className={s.card}>
      <div className={s.card_wrapper}>
        <UserAvatarWithCredentials
          avatarURL={user.avatarURL}
          userName={user.name}
          userEmail={user.email}
          size={48}
        />
        <SecondaryButton
          className={s.card_button}
          onClick={handleParticipantBan}
        >
          {banButtonLabel}
        </SecondaryButton>
        <SecondaryButton className={s.card_button} type="submit">
          <ChatIcon />
        </SecondaryButton>
      </div>
    </ColumnTemplate>
  );
};

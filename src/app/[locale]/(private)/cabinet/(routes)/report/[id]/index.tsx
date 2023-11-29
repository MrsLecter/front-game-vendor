'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import s from './CurrentReport.module.scss';

import { Section } from 'components/common/profile/Section';
import { BackButton } from 'components/common/profile/BackButton';
import { useForm } from 'react-hook-form';
import { UpdateForm } from 'components/common/forms/UpdateForm';
import { ReportInfo } from '../../../components/ReportInfo';
interface IDetailsForm {
  answered_status: string;
}

export const CurrentReport: FC = () => {
  const t = useTranslations('ProfilePage.CurrentReport');
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm<IDetailsForm>();

  const handleUpdateForm = () => {};
  const handleReporterBan = () => {};
  const handleSuspectBan = () => {};
  const handleDownloadAttachment = () => {};

  const responseInfoProps = {
    reporter: {
      name: 'Nareerat Sakuna',
      email: 'smallpaul@me.com',
      avatarURL: '../.././report',
      chatHref: '456123',
    },
    suspect: {
      name: 'Bessie Cooper',
      email: 'smallpaul@me.com',
      avatarURL: '../.././report',
      chatHref: '342432',
    },
    dataAndTime: '4 Sep 2023  14:30',
    sectionName: 'Alternative guidance councilor',
    lastUpdate: '4 Sep 2023 15:30',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
    attachmentFileName: 'Screenshot45902.png',
    handleReporterBan,
    handleSuspectBan,
    handleDownloadAttachment,
  };

  return (
    <Section>
      <Section.FlexHeader>
        <BackButton />
        <h3>{t('title')}</h3>
      </Section.FlexHeader>
      <Section.Body className={s.body}>
        <ReportInfo {...responseInfoProps} />
      </Section.Body>
      <div className={s.formWrapper}>
        <UpdateForm
          onUpdate={handleUpdateForm}
          fields={[{ name: 'answered', placeholder: t('answered') }]}
          submitLabel={t('update_status')}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
    </Section>
  );
};

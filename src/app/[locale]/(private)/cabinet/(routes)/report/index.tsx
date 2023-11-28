'use client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';

import { Section } from 'components/common/profile/Section';
import { SeachForm } from 'components/common/forms/SeacrhForm';
import { Table } from 'components/common/Table';
import { getReportColumns } from 'utils/getReportColumns';
import s from './Report.module.scss';
import { EnumReportStatus } from 'types/enums';
import avatar from '../../../../../../assets/avatar.jpg';

interface ISettingsForm {
  search_input: string;
}

export interface IReports {
  id: string;
  report: {
    code: string;
    text: string;
    date: string;
    status: EnumReportStatus;
  };
  reporter: {
    name: string;
    email: string;
    avatarUrl: string;
  };
  offers: string;
}

export const Report: FC = () => {
  const t = useTranslations('ProfilePage.Report');
  const tableTranslate = useTranslations('ProfilePage.Report.Table');
  const [reports, setReports] = useState([]);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<ISettingsForm>();

  const handleSearch = () => {};
  //TODO:delete mock reports
  const mockReports = [
    {
      id: '123',
      report: {
        code: '58842',
        text: 'Penny Drop Report',
        date: '19/06/20, 11:30',
        status: EnumReportStatus.ANSWERED,
      },
      reporter: {
        name: 'Cody Fisher',
        email: 'michael.mitc@example.com',
        avatarUrl: avatar,
      },
      offers: {
        id: '234',
      },
    },
    {
      id: '123',
      report: {
        code: '58842',
        text: 'Penny Drop Report',
        date: '19/06/20, 11:30',
        status: EnumReportStatus.WAITING,
      },
      reporter: {
        name: 'Cody Fisher',
        email: 'michael.mitc@example.com',
        avatarUrl: avatar,
      },
      offers: {
        id: '234',
      },
    },
    {
      id: '123',
      report: {
        code: '58842',
        text: 'Penny Drop Report',
        date: '19/06/20, 11:30',
        status: EnumReportStatus.CLOSED,
      },
      reporter: {
        name: 'Cody Fisher',
        email: 'michael.mitc@example.com',
        avatarUrl: avatar,
      },
      offers: {
        id: '234',
      },
    },
  ];

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body>
        <SeachForm
          search={{
            label: t('search_label'),
            name: 'name',
            placeholder: t('search_placeholder'),
          }}
          fields={{
            label: t('report_date_label'),
            items: [
              {
                name: t('report_date_from'),
                placeholder: t('report_date_from'),
              },
              {
                name: t('report_date_to'),
                placeholder: t('report_date_to'),
              },
            ],
          }}
          withoutFilter={true}
          onSearch={handleSearch}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
        />
        <div className={s.reports}>
          {mockReports?.length ? (
            <Table
              data={mockReports}
              columns={getReportColumns({ href: 'report' })}
              translateFn={tableTranslate}
            />
          ) : (
            <div className={s.report_noResults}>{t('Table.no_results')}</div>
          )}
        </div>
      </Section.Body>
    </Section>
  );
};

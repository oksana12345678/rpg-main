/* eslint-disable prettier/prettier */
import { AcademyImages } from 'components/Images';
import { JobTitle } from 'types/avatar';

export const academyOptions = [
  {
    label: 'Курси',
    Icon: AcademyImages.Courses,
    shadowType: 'drop-shadow-courses',
    shadowTypeHover: 'drop-shadow-courses_hover',
  },
  {
    label: 'Коучинг',
    Icon: AcademyImages.Coaching,
    shadowType: 'drop-shadow-couch',
    shadowTypeHover: 'drop-shadow-couch_hover',
  },
  {
    label: 'Наставництво',
    Icon: AcademyImages.Mentoring,
    shadowType: 'drop-shadow-mentoring',
    shadowTypeHover: 'drop-shadow-mentoring_hover',
  },
];

export const jobTitleColorClasses = {
  [JobTitle.FrontEnd]: 'drop-shadow-front_end',
  [JobTitle.BackEnd]: 'drop-shadow-backend',
  [JobTitle.UXUIDesign]: 'drop-shadow-ux_ui_design',
  [JobTitle.QA]: 'drop-shadow-QA',
  [JobTitle.PM]: 'drop-shadow-PM',
  [JobTitle.FullStack]: 'drop-shadow-fullStack',
  [JobTitle.HR]: 'drop-shadow-HR',
  [JobTitle.BA]: 'drop-shadow-BA',
  [JobTitle.DevOps]: 'drop-shadow-devOps',
};

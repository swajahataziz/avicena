import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Project Dashboard',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Project Collaboration',
    icon: 'nb-star',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Measures',
    icon: 'nb-compose',
    link: '/pages/forms/inputs',
  },
  {
    title: 'Cohort Definitions',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
  },
  {
    title: 'Cohorts',
    icon: 'nb-layout-default',
    link: '/pages/modal-overlays/dialog',
  },
  {
    title: 'Analysis Plan',
    icon: 'nb-gear',
    children: [
      {
        title: '1. Basics',
        link: '/pages/bootstrap/inputs',
      },
      {
        title: '2. Covariates',
        link: '/pages/bootstrap/buttons',
      },
      {
        title: '3. Subgroups',
        link: '/pages/bootstrap/modal',
      },
      {
        title: '4. Advanced Models',
        link: '/pages/bootstrap/modal',
      },
      {
        title: '5. Statistical Plans',
        link: '/pages/bootstrap/modal',
      },
      {
        title: '6. Run Analysis',
        link: '/pages/bootstrap/modal',
      },
    ],
  },
  {
    title: 'Code List Management',
    icon: 'nb-location',
    children: [
      {
        title: 'Coding List Browser',
        link: '/pages/code-list/diagnosis/diagnosis-table',
      },
      {
        title: 'Code List Mappings',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Code List to Transaction Mapping',
        link: '/pages/maps/bubble',
      },
    ],
  },
  {
    title: 'Visualizations',
    icon: 'nb-bar-chart',
    link: '/pages/charts/d3',
  },
  {
    title: 'Reports',
    icon: 'nb-tables',
    link: '/pages/tables/smart-table',
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];

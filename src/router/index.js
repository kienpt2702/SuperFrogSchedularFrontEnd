import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

import NotFound from '@/views/common/NotFound.vue';

import FrontPage from '@/layout/FrontPage.vue';
import DirectorPage from '@/layout/DirectorPage.vue';

import newStudent from '@/views/tabs/newStudent.vue';
import allStudents from '@/views/tabs/AllStudents.vue';
import newRequest from '@/views/tabs/newRequest.vue';
import allRequests from '@/views/tabs/allRequests.vue';
import modifyRequest from '@/views/tabs/modifyRequest.vue';
import signupRequest from '@/views/tabs/signupRequest.vue';
import paymentReport from '@/views/tabs/Reports/paymentReport.vue';
import performanceReport from '@/views/tabs/Reports/performanceReport.vue';
import addPaymentReport from '@/views/tabs/Reports/addPaymentReport.vue';
import addPerformanceReport from '@/views/tabs/Reports/addPerformanceReport.vue';






const router = createRouter({
  history: createWebHistory(), // createWebHistory('tcu')
  routes: [
    {
      path: '/front',
      component: FrontPage, // FrontOffice will be rendered in App's <vue-router />
      children: [
        // children will be rendered in Front component's <vue-router />
        { path: '/', name: 'home', component: Home },
      ],
    },
    {
      path: '/director',
      name: 'director',
      component: DirectorPage, // Membership will be rendered in App's <vue-router />
      redirect: { name: 'newStudent' },
      children: [
        {
          path: 'newStudent',
          name: 'newStudent',
          component: newStudent,
        },
        {
          path: 'allStudents',
          name: 'allStudents',
          component: allStudents,
        },
        {
          path: 'newRequest',
          name: 'newRequest',
          component: newRequest,
        },
        {
          path: 'allRequests',
          name: 'allRequests',
          component: allRequests,
        },
        {
          path: 'modifyRequest',
          name: 'modifyRequest',
          component: modifyRequest,
        },
        {
          path: 'signupRequest',
          name: 'signupRequest',
          component: signupRequest,
        },
        {
          path: 'addPaymentReport',
          name: 'addPaymentReport',
          component: addPaymentReport,
        },
        {
          path: 'addPerformanceReport',
          name: 'addPerformanceReport',
          component: addPerformanceReport,
        },
        {
          path: 'paymentReport',
          name: 'paymentReport',
          component: paymentReport,
        },
        {
          path: 'performanceReport',
          name: 'performanceReport',
          component: performanceReport,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)', // any character, zero or more
      component: NotFound, // NotFound will be rendered in App's <vue-router />
    },
  ],
});

export default router;



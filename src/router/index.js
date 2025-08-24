import HomeView from '@/views/HomeView.vue';
import HelpView from '@/views/HelpView.vue';
import HelpGettingStartedView from '@/views/HelpGettingStartedView.vue';
import HelpManagingAppointmentsView from '@/views/HelpManagingAppointmentsView.vue';
import HelpCreateAppointmentView from '@/views/HelpCreateAppointmentView.vue';
import HelpUpdateAppointmentView from '@/views/HelpUpdateAppointmentView.vue';
import HelpCancelAppointmentView from '@/views/HelpCancelAppointmentView.vue';
import HelpAppointmentRequestsView from '@/views/HelpAppointmentRequestsView.vue';
import HelpStaffManagementView from '@/views/HelpStaffManagementView.vue';
import HelpAdministrationView from '@/views/HelpAdministrationView.vue';
import HelpCreateDoctorView from '@/views/HelpCreateDoctorView.vue';
import HelpCreateProcedureView from '@/views/HelpCreateProcedureView.vue';
import HelpPromoteDoctorView from '@/views/HelpPromoteDoctorView.vue';
import HelpTransferOwnershipView from '@/views/HelpTransferOwnershipView.vue';
import HelpBillingView from '@/views/HelpBillingView.vue';
import HelpAddingProfileView from '@/views/HelpAddingProfileView.vue';
import HelpAddingWorkingHoursView from '@/views/HelpAddingWorkingHoursView.vue';
import HelpManagingTimeOffView from '@/views/HelpManagingTimeOffView.vue';
import HelpSubscriptionManagementView from '@/views/HelpSubscriptionManagementView.vue';
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';
import TermsOfServiceView from '@/views/TermsOfServiceView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    // Home View Routes
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      redirect: { name: 'home' }
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView,
    },
    {
      path: '/help/getting-started',
      name: 'help-getting-started',
      component: HelpGettingStartedView,
    },
    {
      path: '/help/managing-appointments',
      name: 'help-managing-appointments',
      component: HelpManagingAppointmentsView,
    },
    {
      path: '/help/managing-appointments/create-appointment',
      name: 'help-create-appointment',
      component: HelpCreateAppointmentView,
    },
    {
      path: '/help/managing-appointments/update-appointment',
      name: 'help-update-appointment',
      component: HelpUpdateAppointmentView,
    },
    {
      path: '/help/managing-appointments/cancel-appointment',
      name: 'help-cancel-appointment',
      component: HelpCancelAppointmentView,
    },
    {
      path: '/help/managing-appointments/appointment-control',
      name: 'help-appointment-requests',
      component: HelpAppointmentRequestsView,
    },

    {
      path: '/help/staff-management',
      name: 'help-staff-management',
      component: HelpStaffManagementView,
    },
    {
      path: '/help/administration',
      name: 'help-administration',
      component: HelpAdministrationView,
    },
    {
      path: '/help/administration/create-doctor',
      name: 'help-create-doctor',
      component: HelpCreateDoctorView,
    },
    {
      path: '/help/administration/create-procedure',
      name: 'help-create-procedure',
      component: HelpCreateProcedureView,
    },
    {
      path: '/help/administration/promote-doctor',
      name: 'help-promote-doctor',
      component: HelpPromoteDoctorView,
    },
    {
      path: '/help/administration/transfer-ownership',
      name: 'help-transfer-ownership',
      component: HelpTransferOwnershipView,
    },
    {
      path: '/help/billing',
      name: 'help-billing',
      component: HelpBillingView,
    },
    {
      path: '/help/staff-management/adding-profile',
      name: 'help-adding-profile',
      component: HelpAddingProfileView,
    },
    {
      path: '/help/staff-management/adding-working-hours',
      name: 'help-adding-working-hours',
      component: HelpAddingWorkingHoursView,
    },
    {
      path: '/help/staff-management/managing-time-off',
      name: 'help-managing-time-off',
      component: HelpManagingTimeOffView,
    },
    {
      path: '/help/billing/subscription-management',
      name: 'help-subscription-management',
      component: HelpSubscriptionManagementView,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfServiceView,
    }
  ],
});

// Navigation guard to scroll to top when navigating to help page and policy pages
router.beforeEach((to, from, next) => {
  if (to.name === 'help' || to.name === 'privacy-policy' || to.name === 'terms-of-service') {
    // Scroll to top after navigation
    next();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  } else {
    next();
  }
});

export default router;
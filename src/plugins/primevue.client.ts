import { ToastService, Tooltip } from 'primevue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.directive('tooltip', Tooltip);
});

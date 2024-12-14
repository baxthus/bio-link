import type { ToastServiceMethods } from 'primevue';

export default async function (toast: ToastServiceMethods, content: string, detail?: string) {
  await navigator.clipboard.writeText(content);
  toast.add({
    summary: 'Copied to clipboard',
    detail: detail ?? 'It\'s in your clipboard now!',
    severity: 'success',
    life: 2000,
  });
}

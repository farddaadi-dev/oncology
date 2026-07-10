export function formatDate(
  date: Date,
  options?: Intl.DateTimeFormatOptions
): string {

  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  }).format(date);

}
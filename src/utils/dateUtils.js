const MONTH_ORDER = {
  'januari': 1, 'jan': 1,
  'februari': 2, 'feb': 2,
  'mars': 3, 'mar': 3,
  'april': 4, 'apr': 4,
  'maj': 5, 'may': 5,
  'juni': 6, 'jun': 6,
  'juli': 7, 'jul': 7,
  'augusti': 8, 'aug': 8,
  'september': 9, 'sep': 9,
  'oktober': 10, 'okt': 10, 'oct': 10,
  'november': 11, 'nov': 11,
  'december': 12, 'dec': 12,
};

export function formatDate(isoDate) {
  if (!isoDate) return null;
  const date = new Date(isoDate + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatDateRange(startDate, endDate) {
  if (!startDate && !endDate) return 'Date TBD';
  if (!endDate || startDate === endDate) return formatDate(startDate);
  const start = new Date(startDate + 'T00:00:00');
  const end = new Date(endDate + 'T00:00:00');
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${end.getDate()}, ${end.getFullYear()}`;
  }
  return `${formatDate(startDate)} – ${formatDate(endDate)}`;
}

export function isPastEvent(event) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (event.endDate) {
    return new Date(event.endDate + 'T00:00:00') < today;
  }
  if (event.startDate) {
    return new Date(event.startDate + 'T00:00:00') < today;
  }
  // No dates — use month to estimate (last day of that month in 2026)
  if (event.month) {
    const monthNum = MONTH_ORDER[event.month.toLowerCase()];
    if (monthNum) {
      const eventApproxDate = new Date(2026, monthNum, 0); // last day of month
      return eventApproxDate < today;
    }
  }
  return false;
}

export function getSortDate(event) {
  if (event.startDate) return event.startDate;
  if (event.month) {
    const monthNum = MONTH_ORDER[event.month.toLowerCase()];
    if (monthNum) return `2026-${String(monthNum).padStart(2, '0')}-01`;
  }
  return '2026-12-31';
}

export function getMonthOrder(monthName) {
  if (!monthName) return 99;
  return MONTH_ORDER[monthName.toLowerCase()] || 99;
}

export function getMonthFromEvent(event) {
  if (event.month) return event.month;
  if (event.startDate) {
    const date = new Date(event.startDate + 'T00:00:00');
    const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
    return months[date.getMonth()];
  }
  return 'Unknown';
}

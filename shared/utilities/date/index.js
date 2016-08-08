import moment from 'moment-timezone';

const timezone = 'Europe/London';

export function formatDate(datetime, format = 'HH:mm') {
  if (datetime) {
    return moment(datetime.iso || datetime)
      .tz(timezone)
      .format(format);
  }
}

export function isBefore(date1, date2) {
  const firstDate = (date1 && date1.iso) || date1;
  const secondDate = (date2 && date2.iso) || date2;
  return moment(firstDate).tz(timezone).isBefore(moment(secondDate).tz(timezone));
}

export function isAfter(date1, date2) {
  return isBefore(date2, date1);
}

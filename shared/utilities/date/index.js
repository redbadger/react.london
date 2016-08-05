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
  return moment(date1).tz(timezone).isBefore(moment(date2).tz(timezone));
}

export function isAfter(date1, date2) {
  return isBefore(date2, date1);
}

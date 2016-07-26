import moment from 'moment-timezone';

export function formatDate(datetime, format = 'HH:mm') {
  if (datetime) {
    return moment(datetime.iso || datetime)
      .tz('Europe/London')
      .format(format);
  }
}

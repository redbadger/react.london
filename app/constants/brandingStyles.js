export const colors = {
  redBadger: '#D2091E',
  events: '#CDE5B3',
  events_faded: '#F2FAEC',
  conference: '#C6DDE7',
  grey: '#4A4A4A',
  white: '#FFFFFF',
};

export const patterns = {
  solid_border: '3px solid $grey',
  dash_border: '3px dashed $grey',
};

export const maximumContentWidth = '980px';

export const layout = {
  block: {
    width: '100vw',
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
  },
  content: {
    padding: '0px 20px',
    width: maximumContentWidth,
  },
  contentWithSpaceBetween: {
    padding: '0px 20px',
    width: maximumContentWidth,
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

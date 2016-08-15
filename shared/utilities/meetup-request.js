function isMeetupRequest(req) {
  return req.hostname.indexOf('meetup') === 0;
}

export default isMeetupRequest;

const namePattern = /^event::(.+)$/;

export function formNameToEventID(name) {
  const match = namePattern.exec(name);
  if (match) { return match[1]; }
}

export function eventIDToFormName(id) {
  return `event::${id}`;
}

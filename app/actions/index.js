export const callGetContent = () => ({ type: 'GET_CONTENT_REQUESTED' });
export const callPutContent = content => ({ type: 'SAVE_CONTENT_REQUESTED', content });
export const callSyncDb = url => ({ type: 'SYNC_DB_REQUESTED', url });

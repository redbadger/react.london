let nextTextId = 0;

export const addText = (userText) => ({
  type: 'ADD_TEXT',
  id: nextTextId++,
  userText,
});

let nextTextId = 0;

export const addText = (userText) => ({
  type: 'ADD_TEXT',
  id: nextTextId++,
  userText,
});

export const updateText = (userText) =>({
  type: 'UPDATE_TEXT',
  ...userText,
});

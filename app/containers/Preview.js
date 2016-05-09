import { connect } from 'react-redux';
import {stateToHTML} from 'draft-js-export-html';
import {convertFromRaw} from 'draft-js';
import PreviewComponent from '../components/Preview/Preview.js';

const convertFromRawToHTML = (content) => stateToHTML(convertFromRaw(content));

const isDraftBlock = (value) => typeof value === 'object' && 'blocks' in value;

const readyToRender = (stateTree) => {
  if ('values' in stateTree) {
    const newState = {};

    Object.keys(stateTree.values).forEach((value, index) => {
      let content = stateTree.values[value];
      newState[value] = isDraftBlock(content) ? convertFromRawToHTML(content) : content;
    });

    return newState;
  };

  return {};
};

const mapStateToProps = (state) => ({
  text: readyToRender(state.form.editor),
});

export default connect(mapStateToProps, null)(PreviewComponent);

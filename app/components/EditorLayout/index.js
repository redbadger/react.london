import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const EditorLayout = ({ children }) => (
  <div>
    {children}
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>
);

EditorLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default EditorLayout;

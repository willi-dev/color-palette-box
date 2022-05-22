import _pt from "prop-types";
import styled from '@emotion/styled';
import * as React from 'react';
const WrapperColorGroup = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 0 40px;
  .title {
    font-size: 14px;
    font-weight: 700;
    color: rgba(51,51,51,0.4);
    margin: 0;
    margin-bottom: 10px;
  }
  .grouping-list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 10px;
  }
`;
/**
 * ColorPaletteGroup
 * @param param0 
 * @returns 
 */

export const ColorPaletteGroup = ({
  title,
  children
}) => {
  return /*#__PURE__*/React.createElement(WrapperColorGroup, null, typeof title !== 'undefined' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "grouping-list"
  }, children));
};
ColorPaletteGroup.propTypes = {
  title: _pt.string,
  children: _pt.node
};
//# sourceMappingURL=index.js.map
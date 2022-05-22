import _pt from "prop-types";
import styled from '@emotion/styled';
import * as React from 'react';
const WrapperColorGroupItem = styled.div`
  box-sizing: border-box;
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 135px;
  font-size: 12px;
  border-radius: 4px;
  overflow: hidden;
  .color-box, .color-desc {
    height: 100px;
    box-sizing: border-box;
  }
  .color-desc {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 3px 0;
    background: #FFFFFF;
  }
  .color-name, .color-code, .desc {
    color: rgba(51,51,51,0.6);
    padding: 4px;
  }
  .color-name {
    font-weight: 600;
  }
  .color-code {
    font-size: 11px;
    text-align: center;
  }
`;
/**
 * ColorPaletteGroupItem
 * @param param0 
 * @returns 
 */

export const ColorPaletteGroupItem = ({
  name,
  bgColor,
  desc
}) => {
  return /*#__PURE__*/React.createElement(WrapperColorGroupItem, null, /*#__PURE__*/React.createElement("div", {
    className: "color-box",
    style: {
      background: `${bgColor}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "color-desc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "color-name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "color-code"
  }, bgColor), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, desc)));
};
ColorPaletteGroupItem.propTypes = {
  name: _pt.string.isRequired,
  bgColor: _pt.string.isRequired,
  desc: _pt.string.isRequired
};
//# sourceMappingURL=index.js.map
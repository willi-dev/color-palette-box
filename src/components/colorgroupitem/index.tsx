import styled from '@emotion/styled'
import * as React from 'react'

type ColorProps = {
  name: string,
  bgColor: string,
  desc: string
}

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
`
/**
 * ColorPaletteGroupItem
 * @param param0 
 * @returns 
 */
export const ColorPaletteGroupItem: React.FC<ColorProps> = ({ name, bgColor, desc }: ColorProps) => {
  return (
    <WrapperColorGroupItem>
      <div className="color-box" style={{ background: `${bgColor}` }}></div>
      <div className="color-desc">
        <div className="color-name">
          {name}
        </div>
        <div className="color-code">
          {bgColor}
        </div>
        <div className="desc">
          {desc}
        </div>
      </div>
    </WrapperColorGroupItem>
  )
}
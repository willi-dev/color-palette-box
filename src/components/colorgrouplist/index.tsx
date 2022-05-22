import styled from '@emotion/styled'
import * as React from 'react'

type ColorGroupProps = {
  title?: string,
  children?: React.ReactNode
}

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
`


/**
 * ColorPaletteGroup
 * @param param0 
 * @returns 
 */
export const ColorPaletteGroup: React.FC<ColorGroupProps> = ({ title, children }: ColorGroupProps) => {
  return (
    <WrapperColorGroup>
      {
        typeof title !== 'undefined' && (
          <>
            <h3 className="title">{title}</h3>
          </>
        )
      }
      <div className="grouping-list">
        {children}
      </div>
    </WrapperColorGroup>
  )
}

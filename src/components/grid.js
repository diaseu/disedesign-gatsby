import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: ${props => `repeat($props.column}, lfr)`};
`

const Grid = ({columns, children, style}) => {
  return(
    <GridWrapper columns={columns} style={style}>
      {children}
    </GridWrapper>
  )
}

export default Grid;
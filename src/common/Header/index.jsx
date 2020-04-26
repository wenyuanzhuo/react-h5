
import React from 'react'
import { jsx, css } from '@emotion/core'
import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled';
import './index.scss'

function Header ({ height = 0, maxHeight = 0 }) {
  // const defaultHeight = 80
  const Nav = styled.nav(
    {
      width: '100%',
      display: 'flex',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, .6)',
      color: '#fff',
    },
    (props) => ({ height: props.height })
  )
  const ScrollDiv = styled.div`
    width: 100%;
    height: 0px;
    position: absolute;
    top: 0;
    background-color: #fff;
    ${({ height, maxHeight }) => height && css`
      height: ${Math.min(height, maxHeight)}px;
    `}
  `
  const Top = styled.div`
    width: 100%;
    height: 20px;
    background-color: #fff;
  `
  return (
    <header className="header">
      <div css={css`
         height: 20px;
      `}>111111111111111</div>
      <Top></Top>
      <ScrollDiv height={height} maxHeight={maxHeight}>
      </ScrollDiv>
      <Nav height={maxHeight}>
      </Nav>
    </header>
  )
}
export default Header
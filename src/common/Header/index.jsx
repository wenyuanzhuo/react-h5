
import React from 'react'
import { jsx, css } from '@emotion/core'
import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled';
import './index.scss'

function Header ({ height = 10, maxHeight = 0 }) {
  // const defaultHeight = 80
  const Main = styled.nav(
    {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, .6)',
      color: '#fff',
      position: 'absolute',
      top: '20',
      zIndex: '10',
    },
    (props) => ({ height: props.height })
  )
  const ScrollDiv = styled.div`
    width: 100%;
    height: 0px;
    position: absolute;
    top: 20;
    background-color: #ccc;
    /* ${({ height = 0, maxHeight }) => height && css`
      height: ${Math.min(height, maxHeight)}px;
    `} */
  `
  return (
    <header className="header">
      <section className="header-prefix ignore"></section>
      <section className="header-main">
        <Main height={maxHeight}>
          <img className="main-img ignore"/>
          <div className="main-nav">
            <ul>
              <li className="ignore">1</li>
              <li className="ignore">2</li>
            </ul>
          </div>
        </Main>
        <ScrollDiv height={height} maxHeight={maxHeight} style={{ height: `${Math.min(height, maxHeight)}px` }}>
        </ScrollDiv>
      </section>
    </header>
  )
}
export default Header
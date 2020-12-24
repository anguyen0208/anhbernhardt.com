import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { colors, fonts, media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  display: inline-flex;
  pointer-events: none;
  padding-left: 49%;
  background: ${colors.black700};
  z-index:1;
  ${getOuterSpace('padding')};
  
  ul:last-child li {
    a {
      transition: color .4s ease;
      will-change: color;
      position: relative;
      
      &::before {
        position: absolute;
        left: -1.1rem;
        top: 50%;
        background: ${colors.yellow500};
        border-radius: 100%;
        content: '';
        display: flex;
        height: .3rem;
        width: .3rem;
        transition: transform .3s cubic-bezier(.45, 0, .1, 1), opacity .1s ease;
        will-change: transform, opacity;
      }

      &:not(.active)::before {
        opacity: 0;
        transform: translate(-1rem, -50%);
      }

      &:hover {
        color: #fff;
        
        &::before {
          transform: translate(0, -50%);
          opacity: 1;
        }
      }
    }
  }
  
  ${media.ipadpro`
    position: static;
    padding: 0;
  `}
  ${media.md`
    position: static;
    padding: 0;
  `}
`

export const Nav = styled.ul`
  list-style: none;
  padding: 0 0 0 32%;;
  margin: 0;
  width: 100%;
  display: inline-flex;
  align-item: flex-end;
`

export const NavItem = styled.li`
  list-style: none;
  padding: .5rem 0;
  line-height: .9em;
  margin-left: 3.5rem;
  
  ${media.mon27`
      padding: .7rem 0;
  `}
  
  ${media.mon24`
      padding: .5rem 0;
  `}
  
  ${media.mac13`
      padding: .4rem 0;
  `}
  
  ${media.ipadpro`
      padding: .5rem 0;
  `}
  
  ${media.md`
      padding: .6rem 0;
  `}

  a {
    font-size: 1.2rem;
    font-family: ${fonts.mono};
    text-transform: uppercase;
    pointer-events: all;
    transition: color .1s ease;
    line-height: .9em;
    ${props => props.highlight
    ? css`
        color: ${colors.yellow500};
        
        &:hover::before {
          display: none !important;
        }
      `
    : css`
        color: ${colors.gray700};
      `}
      
      
    ${media.mon27`
      font-size: 1.2rem;
      line-height: 1rem;
  `}
  
  ${media.mon24`
      font-size: .8rem;
      line-height: .7rem;
  `}
   ${media.mac13`
      font-size: 1.2rem;
      line-height: .8em;
  `}
  ${media.lg`
      font-size: .8rem;
      line-height: .8em;
  `}
  ${media.ipadpro`
      font-size: .9rem;
      line-height: 1em;
  `}
  ${media.md`
      font-size: .8rem;
      line-height: .8em;
  `}
  }
`

export const NavLink = styled(Link).attrs({
    activeClassName: 'active'
})`
  &.active {
    color: #fff;
    
    &::before {
      transform: translate(0, -50%);
      opacity: 1;
    }
  }
`

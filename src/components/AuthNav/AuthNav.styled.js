import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px;
  /* font-weight: 700; */
  font-weight: 400;
  color: #2a363b;
  &.active {
    color: #e84a5f;
  }
`;

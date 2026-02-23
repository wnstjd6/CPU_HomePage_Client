import styled from 'styled-components';

// ── Layout ────────────────────────────────────────────────
export const Page = styled.div`
  background-color: #111;
  min-height: 100vh;
  width: 100%;
  font-family: 'Pretendard', sans-serif;
`;

// ── Navbar ────────────────────────────────────────────────
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 60px;
  height: 64px;
  position: relative;
`;

export const Logo = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

export const NavLinks = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 78px;
  align-items: center;
`;

export const NavItem = styled.span`
  font-size: 16px;
  color: ${({ $active }) => ($active ? '#fff' : '#939396')};
  font-weight: ${({ $active }) => ($active ? '500' : '400')};
  cursor: pointer;
  font-family: Pretendard;
  transition: color 0.2s;
  line-height: normal;

  &:hover {
    color: #FFF;
  }
`;

export const NavButton = styled.button`
  padding: 12px 32px;
  background-color: #19d0a3;
  border: none;
  border-radius: 24px;
  color: #000;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #14b991;
    transform: translateY(-2px);
    box-shadow: 0px 8px 16px rgba(25, 208, 163, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

// ── Container ────────────────────────────────────────────
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
`;

export const Text = styled.p`
  font-size: 32px;
  color: #19d0a3;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
`;

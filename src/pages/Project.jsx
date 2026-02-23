import { useNavigate } from 'react-router-dom';
import cpuLogo from '../assets/cpu-logo.png';
import { Page, Nav, Logo, NavLinks, NavItem, Container, Text } from '../styles/commonStyles';

export default function Project() {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <Page>
      <Nav>
        <Logo src={cpuLogo} alt="CPU 로고" />
        <NavLinks>
          <NavItem onClick={() => handleNavClick('/')}>Home</NavItem>
          <NavItem onClick={() => handleNavClick('/member')}>멤버소개</NavItem>
          <NavItem $active onClick={() => handleNavClick('/project')}>Project</NavItem>
          <NavItem onClick={() => handleNavClick('/question')}>Q&A</NavItem>
          <NavItem onClick={() => handleNavClick('/apply')}>지원하기</NavItem>
        </NavLinks>
      </Nav>
      <Container>
        <Text>project 화면입니다</Text>
      </Container>
    </Page>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import cpuLogo from '../assets/cpu-logo.png';
import chevron from '../assets/chevron.svg';

const faqs = [
  {
    id: 1,
    question: '질문',
    answer: '어쩌고 저쩌고\n어쩌고 저쩌고',
  },
  {
    id: 2,
    question: '질문',
    answer: '어쩌고 저쩌고\n어쩌고 저쩌고',
  },
  {
    id: 3,
    question: '질문',
    answer: '어쩌고 저쩌고\n어쩌고 저쩌고',
  },
  {
    id: 4,
    question: '질문',
    answer: '어쩌고 저쩌고\n어쩌고 저쩌고',
  },
];

// ── Layout ────────────────────────────────────────────────
const Page = styled.div`
  background-color: #111;
  min-height: 100vh;
  width: 100%;
  font-family: 'Pretendard', sans-serif;
`;

// ── Navbar ────────────────────────────────────────────────
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 60px;
  height: 64px;
  position: relative;
`;

const Logo = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

const NavLinks = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 78px;
`;

const NavItem = styled.span`
  font-size: 16px;
  color: ${({ $active }) => ($active ? '#fff' : '#939396')};
  font-weight: ${({ $active }) => ($active ? '500' : '400')};
  cursor: pointer;
  font-family: Pretendard;
  &:hover {
    color: #FFF;
  }
`;

// ── Hero ──────────────────────────────────────────────────
const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  gap: 20px;
`;

const Title = styled.h1`
  font-family: 'NEXON Lv2 Gothic OTF', sans-serif;
  font-size: 96px;
  font-weight: 700;
  color: #19d0a3;
  margin: 0;
  line-height: normal;
`;

const Subtitle = styled.p`
  font-family: 'NEXON Lv2 Gothic OTF', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #cdcdcd;
  margin: 0;
`;

const AskButton = styled.button`
  margin-top: 12px;
  padding: 18px 80px;
  background-color: #19d0a3;
  border: 1px solid #fff;
  border-radius: 12px;
  color: #fff;
  font-family: 'Gmarket Sans TTF', sans-serif;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #14b991;
  }
`;

// ── FAQ List ──────────────────────────────────────────────
const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1224px;
  width: 90%;
  margin: 60px auto 80px;
`;

const FaqItem = styled.div`
  background-color: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  padding: ${({ $open }) => ($open ? '24px 40px 36px' : '24px 40px')};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
  transition: padding 0.2s;
`;

const FaqHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Question = styled.p`
  font-family: 'Gmarket Sans TTF', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.4;
`;

const ChevronIcon = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.25s ease;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  margin: 20px 0;
`;

const Answer = styled.div`
  font-family: 'Gmarket Sans TTF', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  line-height: 1.9;
  white-space: pre-line;
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? '500px' : '0')};
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  transition: max-height 0.3s ease, opacity 0.25s ease;
`;

// ── Component ─────────────────────────────────────────────
export default function QuestionHome() {
  const [openId, setOpenId] = useState(null);
  const navigate = useNavigate()

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

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
          <NavItem onClick={() => handleNavClick('/project')}>Project</NavItem>
          <NavItem $active>Q&A</NavItem>
          <NavItem onClick={() => handleNavClick('/apply')}>지원하기</NavItem>
        </NavLinks>
      </Nav>

      <Hero>
        <Title>Q&A</Title>
        <Subtitle>CPU에 대한 궁금증을 질문하세요</Subtitle>
        <AskButton type="button" onClick={() => navigate('/question2')}>질문하기</AskButton>
      </Hero>

      <FaqList>
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <FaqItem key={faq.id} $open={isOpen}>
              <FaqHeader onClick={() => toggle(faq.id)}>
                <Question>{faq.question}</Question>
                <ChevronIcon src={chevron} alt="펼치기" $open={isOpen} />
              </FaqHeader>
              {isOpen && <Divider />}
              <Answer $open={isOpen}>{faq.answer}</Answer>
            </FaqItem>
          );
        })}
      </FaqList>
    </Page>
  );
}

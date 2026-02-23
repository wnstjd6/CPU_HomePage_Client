import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import cpuLogo from '../assets/cpu-logo.png';

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
  &:hover {
    color: #fff;
  }
`;

// ── Hero ──────────────────────────────────────────────────
const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  gap: 16px;
`;

const Title = styled.h1`
  font-family: 'NEXON Lv2 Gothic OTF', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #19d0a3;
  margin: 0;
  line-height: normal;
`;

const Subtitle = styled.p`
  font-family: 'NEXON Lv2 Gothic OTF', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #cdcdcd;
  margin: 0;
  line-height: 1.67;
`;

// ── Form ──────────────────────────────────────────────────
const FormSection = styled.section`
  max-width: 1180px;
  width: 90%;
  margin: 48px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Label = styled.p`
  font-family: 'NEXON Lv2 Gothic OTF', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0;
  width: 70%;

  span {
    font-size: 16px;
    color: #fff;
  }
`;

const Textarea = styled.textarea`
  width: 70%;
  height: 200px;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  padding: 20px 24px;
  box-sizing: border-box;
  color: #e8e8e8;
  font-family: 'NEXON Lv2 Gothic OTF', sans-serif;
  font-size: 16px;
  line-height: 1.875;
  resize: none;
  outline: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
  display: block;

  &::placeholder {
    color: #e8e8e8;
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.9);
  }
`;

// ── Submit Button ─────────────────────────────────────────
const SubmitButton = styled.button`
  display: block;
  margin: 48px auto 80px;
  padding: 28px 120px;
  background-color: ${({ $filled }) =>
    $filled ? '#19d0a3' : 'rgba(25, 208, 163, 0.20)'};
  border: 1px solid #fff;
  border-radius: 12px;
  color: #fff;
  font-family: 'Gmarket Sans TTF', sans-serif;
  font-size: 28px;
  font-weight: 700;
  cursor: ${({ $filled }) => ($filled ? 'pointer' : 'default')};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ $filled }) =>
      $filled ? '#14b991' : 'rgba(25, 208, 163, 0.20)'};
  }
`;

// ── Component ─────────────────────────────────────────────
export default function Question2() {
  const [content, setContent] = useState('');
  const navigate = useNavigate()

  return (
    <Page>
      <Nav>
        <Logo src={cpuLogo} alt="CPU 로고" />
        <NavLinks>
          <NavItem onClick={() => navigate('/')}>Home</NavItem>
          <NavItem onClick={() => navigate('/member')}>멤버소개</NavItem>
          <NavItem onClick={() => navigate('/project')}>Project</NavItem>
          <NavItem $active>Q&A</NavItem>
          <NavItem onClick={() => navigate('/apply')}>지원하기</NavItem>
        </NavLinks>
      </Nav>

      <Hero>
        <Title>Q&A</Title>
        <Subtitle>CPU에 대한 궁금증을 질문하세요</Subtitle>
      </Hero>

      <FormSection>
        <Label>질문<span>*</span></Label>
        <Textarea
          placeholder="질문을 작성해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </FormSection>

      <SubmitButton
        type="button"
        $filled={content.trim().length > 0}
        onClick={() => {
          if (content.trim().length > 0) navigate('/')
        }}
      >
        질문하기
      </SubmitButton>
    </Page>
  );
}

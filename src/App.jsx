import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MemberIntro from './pages/MemberIntro'
import Project from './pages/Project'
import QuestionHome from './pages/QuestionHome'
import Question2 from './pages/Question2'
import ApplyForm from './pages/ApplyForm'
import ApplyForm2_NoDorm from './pages/ApplyForm2_NoDorm'
import ApplyForm2_YesDorm from './pages/ApplyForm2_YesDorm'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/member" element={<MemberIntro />} />
      <Route path="/project" element={<Project />} />
      <Route path="/question" element={<QuestionHome />} />
      <Route path="/question2" element={<Question2 />} />
      <Route path="/apply" element={<ApplyForm />} />
      <Route path="/apply/no-dorm" element={<ApplyForm2_NoDorm />} />
      <Route path="/apply/yes-dorm" element={<ApplyForm2_YesDorm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

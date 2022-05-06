import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TestPage } from "./pages/TestPage";
import { MainLayout } from "./layouts/MainLayout";
import { EditProfilePage } from "./pages/EditProfilePage";
import { CreateArticlePage } from "./pages/CreateArticlePage";
import { ProfilePage } from "./pages/ProfilePage";
import { ArticlePage } from "./pages/ArticlePage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/create-article" element={<CreateArticlePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

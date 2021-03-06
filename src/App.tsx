import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MainLayout } from "./layouts/MainLayout";
import { EditProfilePage } from "./pages/EditProfilePage";
import { CreateArticlePage } from "./pages/CreateArticlePage";
import { ProfilePage } from "./pages/ProfilePage";
import { ArticlePage } from "./pages/ArticlePage";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import { PublicRoute } from "./components/Routes/PublicRoute";
import { MyArticlesPage } from "./pages/MyArticlesPage";
import { EditArticlePage } from "./pages/EditArticlePage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <PrivateRoute>
                <EditProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-article"
            element={
              <PrivateRoute>
                <CreateArticlePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-articles"
            element={
              <PrivateRoute>
                <MyArticlesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-article/:id"
            element={
              <PrivateRoute>
                <EditArticlePage />
              </PrivateRoute>
            }
          />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

import { Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { Route, Routes } from "react-router-dom"; // Ensure Routes is imported
import { useEffect } from "react";
import { setUser } from "./store/slices/userSlices";
import { fetchUserProfile } from "@/api/apiService";
import Blog from "./pages/Blog";
const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const NavbarComponent = lazy(() => import("./components/table/NavBarTable"));
const LabelComponent = lazy(() => import("./components/table/LabelTable"));
const BrandLogoTable = lazy(() => import("./components/table/BrandLogoTable"));
const ClientFeedbackTable = lazy(
  () => import("./components/table/ClientFeedbackTable")
);
const ClientFeedbackForm = lazy(
  () => import("./components/forms/ClientFeedbackForm")
);
const NewsLetterTable = lazy(
  () => import("./components/table/NewsLetterTable")
);
const ServiceTable = lazy(() => import("./components/table/ServiceTable"));
const InquiryTable = lazy(() => import("./components/table/InquiryTable"));
const CaseStudyTable = lazy(() => import("./components/table/CaseStudyTable"));
const CaseStudyForm = lazy(() => import("./components/forms/CaseStudyForm"));
const PortfolioTable = lazy(() => import("./components/table/PortfolioTable"));
const PortfolioForm = lazy(() => import("./components/forms/PortfolioForm"));
const SocialMediaTable = lazy(
  () => import("./components/table/SocialMediaTable")
);
const CategoryTable = lazy(() => import("./components/table/CategoryTable"));
const BlogTable = lazy(() => import("./components/table/BlogTable"));
const BlogForm = lazy(() => import("./components/forms/BlogForm"));
const ImagePage = lazy(() => import("./pages/ImagePage"));
const UserLayout = lazy(() => import("./layouts/UserLayout"));

interface User {
  role: string;
}

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(
    (state: RootState) => state.user.user as User | null
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserProfile(token)
        .then((data) => {
          dispatch(setUser(data.user));
        })
        .catch((error) => {
          console.error("Failed to fetch user profile", error);
        });
    }
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="blog/:id" element={<Blog />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {user && user.role === "admin" && (
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<NavbarComponent title="Navbar" />} />
            <Route path="navbar" element={<NavbarComponent title="Navbar" />} />
            <Route path="label" element={<LabelComponent title="Label" />} />
            <Route
              path="brand-logo"
              element={<BrandLogoTable title="Brand Logo" />}
            />
            <Route
              path="client-feedback"
              element={<ClientFeedbackTable title="Client Feedback" />}
            />
            <Route
              path="client-feedback/create"
              element={<ClientFeedbackForm />}
            />
            <Route
              path="client-feedback/:id/update"
              element={<ClientFeedbackForm />}
            />
            <Route
              path="newsletter"
              element={<NewsLetterTable title="Newsletter" />}
            />
            <Route path="service" element={<ServiceTable title="Service" />} />
            <Route path="inquiry" element={<InquiryTable title="Inquiry" />} />
            <Route
              path="case-study"
              element={<CaseStudyTable title="Case Study" />}
            />
            <Route path="case-study/create" element={<CaseStudyForm />} />
            <Route path="case-study/:id/update" element={<CaseStudyForm />} />
            <Route
              path="portfolio"
              element={<PortfolioTable title="Portfolio" />}
            />
            <Route path="portfolio/create" element={<PortfolioForm />} />
            <Route path="portfolio/:id/update" element={<PortfolioForm />} />
            <Route
              path="social-media"
              element={<SocialMediaTable title="Social Media" />}
            />
            <Route
              path="category"
              element={<CategoryTable title="Category" />}
            />
            <Route path="blog" element={<BlogTable title="Blog" />} />
            <Route path="blog/create" element={<BlogForm />} />
            <Route path="blog/:id/update" element={<BlogForm />} />
            <Route path="image" element={<ImagePage />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;

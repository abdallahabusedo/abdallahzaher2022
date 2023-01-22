import Loader from "../components/Loader";
import WelcomeComp from "../components/WelcomeComp";
import ErrorBoundary from "../ErrorBoundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <div>
        <WelcomeComp />
      </div>
    </ErrorBoundary>
  );
}

import { lazy, Suspense } from "react";
import "./page.scss";

const PrivacyContent = lazy(() => import("../components/Privacy/privacy-content"));

const Privacy = () => {
  return (
    <div className="privacy-page">
      <Suspense fallback={<div>Loading...</div>}>
        <PrivacyContent />
      </Suspense>
    </div>
  );
};

export default Privacy;

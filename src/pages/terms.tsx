import { lazy, Suspense } from "react";
import "./page.scss";

const TermsContent = lazy(() => import("../components/Terms/terms-content"));

const Terms = () => {
  return (
    <div className="terms-page">
      <Suspense fallback={<div>Loading...</div>}>
        <TermsContent />
      </Suspense>
    </div>
  );
};

export default Terms;

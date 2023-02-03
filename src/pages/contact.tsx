import { lazy, Suspense } from "react";
const Connect = lazy(() => import("../components/Contact/connect"));

const Contact = () => {
  return (
    <div className="contact-page">
      <Suspense fallback={<div>Loading...</div>}>
        <Connect />
      </Suspense>
    </div>
  );
};

export default Contact;

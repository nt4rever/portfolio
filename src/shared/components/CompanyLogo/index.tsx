import { Experience } from "../../utils/types";
import "./index.scss";

type Props = {
  company: Experience;
  size?: "sm" | "lg";
};

const CompanyLogo = ({ company, size = "sm" }: Props) => {
  if (company.logo) {
    return (
      <img
        className={`company-logo ${size}`}
        src={company.logo}
        alt={company.company}
      />
    );
  }

  return (
    <div className={`company-logo company-logo--generated ${size}`}>
      <span>{company.short}</span>
    </div>
  );
};

export default CompanyLogo;

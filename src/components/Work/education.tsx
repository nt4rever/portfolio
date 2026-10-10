import { HeaderSmall } from "../../shared/components";
import { formatPeriod, isExpired } from "../../shared/utils/format";
import { CERTIFICATES, EDUCATION } from "../../shared/utils/work";
import "./section.scss";
import "./education.scss";

const Education = () => {
  return (
    <>
      <div className="work-section">
        <div className="work-section__heading">
          <HeaderSmall text="Where has he studied?" />
          <h2>
            Education<span>.</span>
          </h2>
        </div>
        <div className="credential-grid">
          {EDUCATION.map((item) => (
            <div key={item.school} className="credential-card">
              <p className="credential-card__period">
                {formatPeriod(item.period)}
              </p>
              <h3>{item.school}</h3>
              <p>
                {item.degree} · {item.major}
              </p>
              <p>GPA: {item.gpa}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="work-section">
        <div className="work-section__heading">
          <HeaderSmall text="What has he earned?" />
          <h2>
            Certificates<span>.</span>
          </h2>
        </div>
        <div className="credential-grid">
          {CERTIFICATES.map((item) => (
            <div key={item.name} className="credential-card">
              <p className="credential-card__period">
                {formatPeriod(item.period)}
                {isExpired(item.period) && (
                  <span className="badge">Expired</span>
                )}
              </p>
              <h3>{item.name}</h3>
              <p>Issued by {item.issuer}</p>
              {item.detail && <p>{item.detail}</p>}
              {item.credential && (
                <a
                  href={item.credential}
                  target="_blank"
                  rel="noreferrer"
                  className="credential-card__link"
                >
                  Show credential ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;

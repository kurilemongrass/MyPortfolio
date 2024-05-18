import { Fragment, useEffect, useState } from "react";

const homeData = {
  skills: [
    { article: "A", title: "Data Analyst" },
    { article: "An", title: "Email Marketer" },
    { article: "A", title: "Lifelong Learner" },
  ],
};
const HeadingAnimation = ({ animationType }) => {
  const [text, setText] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < homeData.skills.length - 1 ? text + 1 : 0);
      setLoading(false);
    }, 5000);
    setTimeout(() => {
      setLoading(true);
    }, 100);

    return () => clearInterval(interval);
  });

  return (
    <Fragment>
      {animationType.includes("letter") ? (
        <span className={`cd-headline ${animationType}`}>
          <span className={`cd-words-wrapper`}>
            {homeData.skills.map((skill, i) => (
              <b key={i} className={text === i ? "is-visible" : ""}>
                {/* {skill.split("").map((s, j) => ( */}
                <i className={text === i ? "in" : "out"} key={i}>
                  <em>
                    <span className="skill-article">{skill.article}</span>{" "}
                    {skill.title}
                  </em>
                </i>
                {/* ))} */}
              </b>
            ))}
          </span>
        </span>
      ) : (
        <span className={`cd-headline ${animationType}`}>
          <span className={`cd-words-wrapper ${loading ? "is-loading" : ""}`}>
            {homeData.skills.map((skill, i) => (
              <b key={i} className={text === i ? "is-visible" : ""}>
                {skill}
              </b>
            ))}
          </span>
        </span>
      )}
    </Fragment>
  );
};
export default HeadingAnimation;

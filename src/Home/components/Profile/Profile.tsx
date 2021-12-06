import React, { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Inner,
  NameWrap,
  Skill,
  Intro,
  SkillWrap,
  IntroParagraph,
  Career,
  CareerInner,
  GitHubLinkWrap,
} from "./styles";
import { faAmazon, faGithub } from "@fortawesome/free-brands-svg-icons";
import CareerItem from "./components/CareerItem";
import { careerArr } from "./components/careerData";

const Profile: React.FC<{
  loading: boolean;
  scrollY: number;
  changeCursorState: Function;
}> = ({ loading, scrollY, changeCursorState }) => {
  return (
    <Container scrl={scrollY} aria-hidden={!loading}>
      <Inner>
        <NameWrap
          onMouseOver={() => changeCursorState("image")}
          onMouseOut={() => changeCursorState("")}
        >
          <h3 className="blind">name : 박형빈 @jake @7ransis7or</h3>
          <span>B. 1995</span>
          <br />
          <span className="name-span">
            Hyeong Bin. Paak <span className="small-span">@Jake</span>
          </span>
          <br />
          <span className="border-bottom">Front-end developer.</span>
          <br />
        </NameWrap>

        <Intro>
          <h3 className="blind">Intro</h3>

          <IntroParagraph>
            I'm Front-end developer based in Seoul, Korea
            <br />
            {/* <span>HTML5 & CSS3</span>
            <br />
            구조화와 정보전달에 목적을 둔 HTML 마크업 */}
            {/* <blockquote>(What is HTML - W3C standards HTML & CSS)</blockquote> */}
          </IntroParagraph>
        </Intro>

        <GitHubLinkWrap>
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <a
            href="https://github.com/hbpark2/"
            target="_blank"
            rel="noreferrer"
            onMouseOver={() => changeCursorState("jake")}
            onMouseOut={() => changeCursorState("")}
          >
            Go To Jake's GitHub, Let me show you how it's done
          </a>
        </GitHubLinkWrap>

        <Skill>
          <h3 className="blind">Skills</h3>

          <SkillWrap>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Node</li>
              <li>Git & Github</li>
              <li>GraphQL</li>
              <li>Apollo</li>
              <li>Prisma</li>
              <li>AWS S3</li>
              <li>Heroku</li>
              <li>Azure</li>
              <li>Netlifty</li>
            </ul>
          </SkillWrap>
        </Skill>

        <Career>
          <h3 className="blind">Project</h3>
          <CareerInner>
            {careerArr.map((item, index) => (
              <CareerItem
                key={`career${index}`}
                title={item.title}
                subTitle={item.subTitle}
                date={item.date}
              >
                {item.children.split("<br />").map((line, index) => {
                  let makeSpanKey = `line${index}`;
                  return (
                    <React.Fragment key={makeSpanKey}>
                      {line}
                      <br />
                    </React.Fragment>
                  );
                })}
              </CareerItem>
            ))}
          </CareerInner>
        </Career>
      </Inner>
    </Container>
  );
};

export default Profile;

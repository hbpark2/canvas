import { useContext } from "react";
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
  CareerItem,
  CareerParagraph,
  Line,
  GitHubLinkWrap,
} from "./styles";
import { faAmazon, faGithub } from "@fortawesome/free-brands-svg-icons";

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

        <GitHubLinkWrap>
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <a
            href="https://github.com/hbpark2/"
            target="_blank"
            rel="noreferrer"
          >
            Go To GitHub
          </a>
        </GitHubLinkWrap>

        <Intro>
          <h3 className="blind">Intro</h3>

          <IntroParagraph>
            <span>HTML5 & CSS3</span>
            <br />
            구조화와 정보전달에 목적을 둔 HTML 마크업
            {/* <blockquote>(What is HTML - W3C standards HTML & CSS)</blockquote> */}
          </IntroParagraph>
        </Intro>

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
            <CareerItem>
              <h4>
                <span className="career-title">TH-ROAD</span>
                <span className="career-subtitle">
                  디자이너 포트폴리오 ( 개인외주 )
                </span>
                <span className="date">2021.11.01 ~ 2021.12.31</span>
              </h4>
              <CareerParagraph>
                엑심베이의 반응형 웹 전자결제 모듈입니다.
                <br />
                프론트엔드 중 웹접근성을 갖춘 HTML 구조와 반응형 스타일,
                <br />
                사용자 인터렉션 위주의 자바스크립트를 담당했습니다 .<br />
                pc 우선 반응형 / 웹 접근성
              </CareerParagraph>
              <Line />
            </CareerItem>

            <CareerItem>
              <h4>
                <span className="career-title">K-MAS-2021</span>
                <span className="career-subtitle">
                  중소벤처기업부 ( 이벤트 사이트 )
                </span>
                <span className="date">2021.11.01 ~ 2021.12.31</span>
              </h4>
              <CareerParagraph>컨셉, 주요기능</CareerParagraph>
              <Line />
            </CareerItem>

            <CareerItem>
              <h4>
                <span className="career-title">화목</span>
                <span className="career-subtitle">화목 ( 개인 프로젝트 )</span>
                <span className="date">2021.11.01 ~ 2021.12.31</span>
              </h4>
              <CareerParagraph>컨셉, 주요기능</CareerParagraph>
              <Line />
            </CareerItem>

            <CareerItem>
              <h4>
                <span className="career-title">K-SALE-2021</span>
                <span className="career-subtitle">
                  동행세일 ( 이벤트 사이트 )
                </span>
                <span className="date">2021.11.01 ~ 2021.12.31</span>
              </h4>
              <CareerParagraph>컨셉, 주요기능</CareerParagraph>
              <Line />
            </CareerItem>

            <CareerItem>
              <h4>
                <span className="career-title">K-MAS-2020</span>
                <span className="career-subtitle">
                  중소벤처기업부 ( 이벤트 사이트 )
                </span>
                <span className="date">2021.11.01 ~ 2021.12.31</span>
              </h4>
              <CareerParagraph>컨셉, 주요기능</CareerParagraph>
              <Line />
            </CareerItem>

            <CareerItem>
              <h4>
                <span className="career-title">orderffrice</span>
                <span className="career-subtitle">
                  쇼핑몰 ( 사내 사이드프로젝트 )
                </span>
                <span className="date">2021.11.01 ~ 2021.12.31</span>
              </h4>
              <CareerParagraph>컨셉, 주요기능</CareerParagraph>
              <Line />
            </CareerItem>

            <CareerItem>
              <h4>
                <span className="career-title">Mutaccato</span>
                <span className="career-subtitle">
                  디자이너 포트폴리오 ( 개인외주 )
                </span>
                <span className="date">2021.11.01 ~ 2021.12.31</span>
              </h4>
              <CareerParagraph>컨셉, 주요기능</CareerParagraph>
            </CareerItem>
          </CareerInner>
        </Career>
      </Inner>
    </Container>
  );
};

export default Profile;

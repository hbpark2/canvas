import styled from "styled-components";

const Container = styled.div`
  margin: 40px 0;

  .career-title {
    font-family: ${({ theme: { defaultFont } }) => defaultFont};
    font-weight: 900;
    font-size: 42px;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.9);
  }

  .career-subtitle {
    margin-left: 10px;
    font-family: ${({ theme: { paragraphFont } }) => paragraphFont};
    color: rgba(255, 255, 255, 0.8);
  }
  .date {
    display: block;
    opacity: 0.6;
    font-size: 16px;
  }
`;

const CareerParagraph = styled.p`
  padding: 15px 0;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

const Line = styled.i`
  display: block;
  width: 70%;
  height: 1px;
  /* background-color: ${({ theme: { accentColor } }) => accentColor}; */
  background-color: ${({ theme: { bgColor1 } }) => bgColor1};
  opacity: 0.6;
`;

interface CareerItemProps {
  title: string;
  subTitle: string;
  date: string;
  children: React.ReactNode;
}

const CareerItem: React.FC<CareerItemProps> = ({
  title,
  subTitle,
  date,
  children,
}) => {
  return (
    <Container>
      <h4>
        <span className="career-title">{title}</span>
        <span className="career-subtitle">{subTitle}</span>
        <span className="date">{date}</span>
      </h4>
      <CareerParagraph>{children}</CareerParagraph>
      <Line />
    </Container>
  );
};

export default CareerItem;

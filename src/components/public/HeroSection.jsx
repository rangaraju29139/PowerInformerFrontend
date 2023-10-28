import styled from "styled-components";
import backgroundImg from "../../assets/images/home-background-2.jpg";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${backgroundImg});
`;

export default function HeroSection(props) {
  return (
    <>
      <Body>
        <div className="px-4 pt-5 vh-100 text-center border-bottom">
          <h1 className="display-4 fw-bold">
            Empowering Farmers with Real-time Insights on Electricity Supply for
            Informed Decisions
          </h1>
        </div>
      </Body>
    </>
  );
}

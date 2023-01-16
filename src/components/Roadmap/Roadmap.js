import React from "react";
import {
  RoadmapContainer,
  RoadmapWrapper,
  RoadmapRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./RoadmapElements";

const Roadmap = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description1,
  description2,
  description3,
  description4,
  description5,
  img,
  alt,
  id,
  primary,
  darkText,
}) => {
  console.log(primary);
  return (
    <>
      <RoadmapContainer lightBg={lightBg} id={id}>
        <RoadmapWrapper>
          <RoadmapRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  <span>{description1}</span>
                  <span>
                    <br />
                    <br />
                    {description2}
                  </span>
                  <span>
                    <br />
                    <br />
                    {description3}
                  </span>
                  <span>
                    <br />
                    <br />
                    {description4}
                  </span>
                  <span>
                    <br />
                    <br />
                    {description5}
                  </span>
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </RoadmapRow>
        </RoadmapWrapper>
      </RoadmapContainer>
    </>
  );
};

export default Roadmap;

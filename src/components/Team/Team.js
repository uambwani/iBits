import React, { useState } from "react";
import Modal from "../Modal/Modal";

import {
  TeamContainer,
  TeamWrapper,
  TeamRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrap,
  Img,
  ListItem,
  ListItems,
} from "./TeamElements";

const Team = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  img1,
  img2,
  img3,
  img4,
  alt,
  id,
  darkText,
  dark,
  dark2,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const teamData = [
    {
      imgURL: img1,
      description:
        "I am responsible for generating big ideas, nurturing big relationships and maintaining/driving culture",
      title: "The Visionary",
    },
    {
      imgURL: img2,
      description:
        "Creating, planning and delivering an integrated strategic vision",
      title: "The Creative",
    },
    {
      imgURL: img3,
      description:
        "I am responsible for guiding the group and keeping them on task",
      title: "The Leader",
    },
    {
      imgURL: img4,
      description:
        "Yes, we want you to be part of the team. Help us make something great!!",
      title: "You",
    },
  ];

  const toggleModal = (item) => {
    setOpenModal(!openModal);
    setSelectedImage(item.imgURL);
    setSelectedTitle(item.title);
    setSelectedDescription(item.description);
  };

  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <TeamContainer lightBg={lightBg} id={id}>
        <TeamWrapper>
          <TeamRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                {/* <Subtitle darkText={darkText}>{description}</Subtitle> */}
                <ListItems>
                  {description.map((d, index) => (
                    <ListItem className='fade-in' key={index}>
                      {d}
                    </ListItem>
                  ))}
                </ListItems>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                {teamData.map((item, index) => {
                  return (
                    <Img
                      src={item.imgURL}
                      id={index}
                      alt={item.title}
                      onClick={() => toggleModal(item)}
                    />
                  );
                })}
              </ImgWrap>
            </Column2>
          </TeamRow>
        </TeamWrapper>
      </TeamContainer>
      <Modal
        open={openModal}
        image={selectedImage}
        title={selectedTitle}
        description={selectedDescription}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default Team;

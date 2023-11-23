import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div className="card">
      <Image src={imageSrc} alt="project-icon" />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <p className="see-more-btn">
        See more <FontAwesomeIcon icon={faArrowRight} />
      </p>
    </div>
  );
};

export default Card;

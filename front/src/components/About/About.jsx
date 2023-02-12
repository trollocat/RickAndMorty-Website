import {
  ContentContainer,
  BigPhoto,
  TextContainer,
  Headline,
  Paragraph,
} from "./StyledAbout";

export const About = () => {
  return (
    <>
      <ContentContainer>
        <div>
          <BigPhoto
            src="https://drive.google.com/uc?export=view&id=15i_KdoJI07J8hDmQ5MBlZClkuRqVae70"
            alt="yo con mi gata"
          />
          <TextContainer>
            <Headline>Hola, soy Joan Gonzalez</Headline>
            {/* Paragraph>lorem20^Paragraph>lorem45^Paragraph>lorem15 */}
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi error rerum culpa numquam atque incidunt laudantium.
              Iure iste tempore amet.
            </Paragraph>
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              saepe molestias vitae voluptatibus quis maxime nostrum asperiores
              facere quia laudantium nobis iste facilis aperiam eius amet
              similique aliquid, doloremque nisi perferendis, odit pariatur
              nihil doloribus. Suscipit enim facilis, esse et perferendis
              sapiente assumenda nulla id?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              est in sint excepturi, dignissimos nihil.
            </Paragraph>
          </TextContainer>
        </div>
      </ContentContainer>
    </>
  );
};

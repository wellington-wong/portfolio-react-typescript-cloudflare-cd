import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 0rem 0 3rem;
  text-align: center;
  /*display: flex;*/
  display: block;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ImageGalleryItem = styled("img")`
  object-fit: inherit !important;
  max-height: none !important;
  max-width: 75%;
`;
export const ImageGalleryCaption = styled("div")`
  position: absolute;
  width: 50%;
  background: rgba(238, 228, 218, 0.987);
  left: 10px;
  bottom: 10px;
  padding: 1em 20px 0px 20px;
  border-radius: 10px;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media only screen and (max-width: 768px) {
    width: 90%;
    left: 5%;
    right: 5%;
  }
`;
export const ImageGalleryCaptionHeading = styled("strong")`
  display: block;
  margin-top: 25px;
  a {
    font-family: "Motiva Sans Bold";
    font-size: 21px;
  }
`;
export const ImageGalleryCaptionContent = styled("p")`
  font-size: 12px;
  margin-top: 0.5em;
`;
export const NewLink = styled("a")`
  color: rgb(53, 56, 57);
  &:hover {
    color: rgb(53, 56, 57);
  }
`;
export const ImageGalleryContainer = styled("div")`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 20px;

  
  width: 75%;
  margin: 0 auto;

  .image-slide {
    max-width: 100%;
    border-radius: 8px;

    cursor: pointer;
  }
`;

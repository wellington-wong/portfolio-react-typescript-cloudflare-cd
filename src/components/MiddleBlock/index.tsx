import { forwardRef, useState } from "react";
import { Row, Col } from "antd";
import { ArrowUpOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem } from "react-image-gallery";
import {
  MiddleBlockSection,
  Content,
  ContentWrapper,
  ImageGalleryCaptionHeading,
  ImageGalleryItem,
  NewLink
} from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  galleryItems: {
    original: string;
    link: string;
  }[];
  id: string;
  ref: React.RefObject<HTMLDivElement>;
}

export interface ReactImageGalleryItem extends GalleryItem {
  link?: string;
  mobile?: string;
}

const MiddleBlock = forwardRef<HTMLDivElement, MiddleBlockProps>(({ title, content, button, id, galleryItems }, ref) => {
  const { t } = useTranslation();
  const images2: ReactImageGalleryItem[] = galleryItems;
  const [galleryImage, setGalleryImage] = useState(images2[0]);

  return (
    <MiddleBlockSection ref={ref}>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <ImageGallery
                showPlayButton={false}
                showFullscreenButton={false}
                items={images2}
                onSlide={i=>setGalleryImage(images2[i])}
                renderItem={({original, originalTitle, link, description, thumbnail }:ReactImageGalleryItem)=><>
                  <ImageGalleryItem className="image-gallery-image" src={original}></ImageGalleryItem>
                </>}
              />
              <ImageGalleryCaptionHeading>
                <NewLink href={galleryImage.link} rel="noreferrer noopener" target="_blank">{galleryImage.originalTitle} <ArrowUpOutlined /></NewLink>
              </ImageGalleryCaptionHeading>
              <Content>{t(galleryImage.description??"")}</Content>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
});

export default (MiddleBlock);

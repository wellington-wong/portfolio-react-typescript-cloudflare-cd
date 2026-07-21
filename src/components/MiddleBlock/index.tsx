import { forwardRef, useEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem } from "react-image-gallery";
//import { GithubFilled, LinkOutlined } from '@ant-design/icons';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  MiddleBlockSection,
  Content,
  ContentWrapper,
  ImageGalleryCaptionHeading,
  ImageGalleryItem,
  NewLink,
  ImageGalleryContainer
} from "./styles";

interface WebsiteItem {
  screenshot: string;
  title: string;
  link: string;


  type: string;
  thumb: string;
}

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  galleryItems: {
    original: string;
    thumbnail: string;
    description: string;

    group: string;
    originalTitle: string;
    websites: WebsiteItem[];
  }[];
  id: string;
  ref: React.RefObject<HTMLDivElement>;
}

export interface ReactSlidesItem extends GalleryItem {


  group?: string;
  original: string;
  websites?: WebsiteItem[];

  description?: string;
  originalTitle?: string;
  thumbnail?: string;
}


const MiddleBlock = forwardRef<HTMLDivElement, MiddleBlockProps>(({ title, content, button, id, galleryItems }, ref) => {
  const { t } = useTranslation();

  
  const slides: ReactSlidesItem[] = galleryItems;
  const [galleryImage, setGalleryImage] = useState(slides[0]);

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
                items={slides}
                onBeforeSlide={i=>{
                  setGalleryImage(slides[i]);
                  document.dispatchEvent(
                    new CustomEvent("gallery-slide", { detail: slides[i].group })

                  )
                }}
                renderItem={({group, websites}: ReactSlidesItem): React.JSX.Element => <CmsCollage group={group} websites={websites} />}
              />
             <ImageGalleryCaptionHeading>
                <NewLink href={galleryImage.original} rel="noreferrer noopener" target="_blank">{galleryImage.originalTitle}</NewLink>
                {/*<NewLink href={galleryImage.original} rel="noreferrer noopener" target="_blank"><LinkOutlined /> <GithubFilled /></NewLink>*/}
              </ImageGalleryCaptionHeading>
              <Content>{t(galleryImage.description??"")}</Content>
            </Col>
          </ContentWrapper>

        </Row>
      </Slide>
    </MiddleBlockSection>
  );
});



interface CollageProps {
  group?: string;
  websites?: WebsiteItem[];
}


function CmsCollage ({group, websites}: CollageProps) {

  const collageRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {

    const handler = (e: Event) => {
      const activeGroup = (e as CustomEvent<string>).detail;
      console.log(group, activeGroup);
      if (activeGroup !== group) return;
      tl.current?.restart();
    }

    document.addEventListener("gallery-slide", handler);

    return () => document.removeEventListener("gallery-slide", handler);
  }, [group]);

  const tl = useRef<GSAPTimeline | null>(null);
  useGSAP(() => {
    const q = gsap.utils.selector(collageRef);
    tl.current = gsap.timeline({paused: true});
      
      

    tl.current.from(q(".image-slide"), {
      opacity: 0,
      scale: 0.2,

      duration: 1.1,
      stagger: 0.08,
      rotation: () => gsap.utils.random(-360, 360),

      x: () => gsap.utils.random(-700, 700),
      y: () => gsap.utils.random(-500, 500),

      ease: "back.out(1.7)"
    });

    tl.current.play();
  }, {
    scope: collageRef
  });



    //console.log(group, websites);
    const slides = websites?.map((website: WebsiteItem, i: number) => (
      <ImageGalleryItem className="image-slide" src={website.screenshot} key={i} />
    ));
    return <ImageGalleryContainer className="image-gallery-container" ref={collageRef}>{slides}</ImageGalleryContainer>

}

export default(MiddleBlock);
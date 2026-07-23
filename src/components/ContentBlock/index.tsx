import { forwardRef, memo, useRef } from "react";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { Image } from "../../common/Image";
import { Cloud } from 'react-icon-cloud';
import { GithubFilled } from '@ant-design/icons';
import ImageSlicer from "../../common/utils/imageSlicer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  NewLine,
  StyledRow,
  ButtonWrapper,
  StyledLink,
  StyledSpan,
  StyledStrong
} from "./styles";

const ContentBlock = forwardRef<HTMLDivElement, ContentBlockProps>(({
  icon,
  image,
  title,
  content,
  content2,
  cloudIcons,
  github,
  skills,
  section,
  button,
  id,
  direction
  }, ref) => {

  const { t } = useTranslation();

    
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };


  



  const icons = cloudIcons?.sort(()=>Math.random() - .8).map((logo, i) => {
   return <StyledLink href={logo.url} target="_blank" rel="noreferrer noopener" key={i}>
      <Image height="118" width="118" src={logo.path} />
    </StyledLink>
  })

    
  
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const q = gsap.utils.selector(containerRef);

    gsap.set(q(".image-tile"), {
      opacity: 0,
      scale: 0,

  



      rotation: () => gsap.utils.random(-180, 180),
      x: () => gsap.utils.random(-399, 399),
      y: () => gsap.utils.random(-299, 299),





    });

    gsap.to(q(".image-tile"), {
      opacity: 1,

      scale: 1,



      rotation: 0,
      x: 0,
      y: 0,


      duration: 1.2,
      stagger: {



        each: 0.05,
        from: "center",
      },

      ease: "back.out(1.8)",

    });



}, {
  scope: containerRef
});

  return (
    <ContentSection ref={ref}>
      <Fade triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}                 
        >
          <Col lg={11} md={11} sm={12} xs={24} className="cloud-icon">
            {id==='mission'&&icons?
              <Cloud options={{ wheelZoom: false, initial: [0.038, 0.038], outlineMethod: 'none', depth: 0.5, noMouse: true, frontSelect: true, freezeDecel: true }}>{ icons }</Cloud>:
              <ImageSlicer src={'/img/' + image} ref={containerRef} rows={6} cols={6} />
            }
            
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <Content>{content2&&t(content2)}</Content>
              {skills?.map((string, i)=>
                <NewLine key={i}><StyledStrong>{string.title}</StyledStrong>: <StyledSpan>{string.content}</StyledSpan></NewLine>
              )}
            
              {id==='mission'&&github&&<Button name="submit" onClick={() => window.open(github.link, '_blank') }>
                <GithubFilled className="github-icon" />
                {t(github.title)}
              </Button>}
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                          scrollto: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo(item.scrollto)}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            icon: string;
                            href?: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id}>
                              <StyledLink href={item.href} target="_blank" rel="noopener noreferrer">
                                <Image src={item.icon} width="68px" height="auto" />
                              </StyledLink>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
});

export default memo(ContentBlock);

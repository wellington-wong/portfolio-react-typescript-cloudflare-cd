import { useState, useContext } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import { AppContext } from "../../context/AppContext";
import {
  HeaderSection,
  LogoContainer,
  //LogoH1,
  //LogoH3,
  LogoImg,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    setVisibility(false);
  };

  const { contextData: {inViewId} } = useContext(AppContext);

  const MenuItem = () => {
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("middle")} className={(inViewId==='middle')?'active':''}>
          <Span>{t("Projects")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")} className={(inViewId==='mission')?'active':''}>
          <Span>{t("Expertise")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("about")} className={(inViewId==='about')?'active':''}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
          className={(inViewId==='contact')?'active':''}
        >
          <Span className="contact-me-container">
            <Button>{t("Contact Me")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" gutter={0}>
          <CustomNavLinkSmall onClick={() => scrollTo("intro")}>
            <LogoContainer to="/" aria-label="homepage">
              {/*<LogoH1>Wellington's</LogoH1>
              <LogoH3>Portfolio</LogoH3>*/}
              <LogoImg src="/img/wc2.png" />
            </LogoContainer>
          </CustomNavLinkSmall>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);

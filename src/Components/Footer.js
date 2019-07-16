import React, { Fragment } from "react";
import styled from "styled-components";

import "../styles.css";

import palette from "../palette";
const { yellow_vivid_400, yellow_vivid_200 } = palette;

function Footer() {
  const FooterPane = styled.div`
    padding: 20px;
    height: 50vh;
    background-color: rgba(0, 0, 0, 0.65);
  `;

  const Footer = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 0 20px;
    justify-content: space-between;
    height: 50vh;
    width: 60%;
    margin: 0 auto;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const ContainerText = styled.p`
    display: flex;
    margin: 10px 0;
    font-size: 1em;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  `;

  const ListContainer = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  const ContainerList = styled.p`
    display: flex;
    margin: 10px 0;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  `;

  const ContainerHeading = styled.h4`
    display: flex;
    margin: 0;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  `;

  return (
    <Fragment>
      <FooterPane>
        <Footer>
          <Container>
            <ContainerHeading>Um Okkur</ContainerHeading>
            <ContainerText>
              Maul ehf. var stofnað á vormánuðum 2017 og fékk inngöngu í
              viðskiptahraðal Startup Reykjavík. Við stefnum á að þjóna öllu
              höfuðborgarsvæðinu fyrir lok vetrar. Ef þú hefur einhverjar
              spurningar ekki hika við að hafa samband við okkur í maul@maul.is
              eða í síma 519-2939.
            </ContainerText>
          </Container>
          <ListContainer>
            <Container>
              <ContainerHeading>Fyrirtæki</ContainerHeading>
              <ContainerList>Valitor</ContainerList>
            </Container>
            <Container>
              <ContainerHeading>Fyrirtæki</ContainerHeading>
              <ContainerList>Valitor</ContainerList>
            </Container>
          </ListContainer>
        </Footer>
      </FooterPane>
    </Fragment>
  );
}

export default Footer;

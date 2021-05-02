import { PropsWithChildren, ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import Header, { HeaderProps } from './Header';

const Container = styled(animated.div)`
  margin: 0 auto;
  padding: 0 0.5em;
  max-width: 80em;
  min-height: 100vh;
  height: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'aside';
  grid-template-columns: 100%;
  gap: 0.5em;

  @media (${({ theme }) => theme.mediaQueries.tablet}) {
    grid-template-areas:
      'header content'
      'aside content';
    grid-template-columns: 20em 1fr;
  }
`;

const ContentArea = styled.div`
  grid-area: content;
`;

const HeaderArea = styled(Header)`
  grid-area: header;
`;

const AsideArea = styled.aside`
  grid-area: aside;
`;

export interface LayoutProps {
  breadcrumbs?: HeaderProps['breadcrumbs'];
  aside?: ReactNode;
}

export default function Layout({ breadcrumbs, aside, children }: PropsWithChildren<LayoutProps>) {
  const animProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  return (
    <Container style={animProps}>
      <GridContainer>
        <HeaderArea breadcrumbs={breadcrumbs} />
        <ContentArea>{children}</ContentArea>
        {aside && <AsideArea>{aside}</AsideArea>}
      </GridContainer>
    </Container>
  );
}

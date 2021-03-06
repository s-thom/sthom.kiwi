import { NextSeo } from 'next-seo';
import Image, { ImageProps } from 'next/image';
import { useMemo } from 'react';
import styled from 'styled-components';
import Layout from '../../src/components/Layout';
import Link from '../../src/components/Link';
import { home, projects } from '../../src/paths';
import colourImage from './colour.png';
import ednonImage from './ednon.png';
import howToScreenshotImage from './hts.png';
import linkdropImage from './linkdrop.png';
import pasteImage from './paste.png';
import pexaUkImage from './peuk.png';
import pexaPlusImage from './pexa-plus.png';
import realtimeImage from './rtc.png';
import sthomKiwiImage from './sthom.png';
import theIndexImage from './the-index.png';

const ProjectList = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr;

  @media (${({ theme }) => theme.mediaQueries.blog.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProjectWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  overflow: hidden;
`;

const ProjectImageWrapper = styled.div`
  position: relative;
`;

const ProjectImage = styled(Image)`
  width: 100%;
  aspect-ratio: 2 / 1;
`;

const ProjectContent = styled.div`
  margin: 1em;
`;

const ProjectTitle = styled.h3`
  font-size: 1em;
  font-weight: 500;
`;
const ProjectSubtitle = styled.h4`
  margin: 0;
  opacity: 0.8;
  font-style: italic;
  font-weight: 400;
  font-size: 0.8em;
  margin-top: -1.5em;
`;
const ProjectDescription = styled.div`
  font-size: 0.8em;
`;

const Icon = styled.svg`
  width: 1em;
  height: 1em;
  margin-right: 0.25em;
  margin-bottom: 0.25em;
  vertical-align: middle;
  fill: ${({ theme }) => theme.colors.text};
`;

function GithubLink({ link }: { link: string }) {
  return (
    <a href={link} aria-label="GitHub" rel="nofollow noopener noreferrer" target="_blank">
      <Icon viewBox="0 0 24 24">
        <title>GitHub</title>
        <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 6.8 9.5c.5 0 .7-.2.7-.5v-1.7C6.7 20 6.1 18 6.1 18c-.4-1.2-1-1.5-1-1.5-1-.6 0-.6 0-.6 1 0 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9 0-.7.3-1.1.6-1.4-2.2-.2-4.6-1-4.6-4.9 0-1.1.4-2 1-2.7 0-.3-.4-1.3.2-2.7 0 0 .8-.2 2.7 1a9.4 9.4 0 0 1 5 0c2-1.2 2.8-1 2.8-1 .5 1.4.1 2.4 0 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 5 .4.2.7.8.7 1.8V21c0 .3.2.6.7.5 4-1.3 6.8-5 6.8-9.5A10 10 0 0 0 12 2z" />
      </Icon>
    </a>
  );
}

interface Project {
  title: string;
  subtitle?: React.ReactNode;
  image?: ImageProps['src'];
  description?: React.ReactNode;
  link?: string;
  github?: string;
}

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

function ProjectCard({ project, ...rest }: ProjectCardProps) {
  const { title, subtitle, image, description, link, github } = project;

  const titleElement = link ? <Link href={link}>{title}</Link> : title;

  return (
    <ProjectWrapper {...rest}>
      {image &&
        (link ? (
          <Link href={link}>
            <ProjectImageWrapper>
              <ProjectImage src={image} alt={title} layout="responsive" loading="eager" />
            </ProjectImageWrapper>
          </Link>
        ) : (
          <ProjectImageWrapper>
            <ProjectImage src={image} alt={title} layout="responsive" loading="eager" />
          </ProjectImageWrapper>
        ))}
      <ProjectContent>
        <ProjectTitle>
          {github && <GithubLink link={github} />}
          {titleElement}
        </ProjectTitle>
        {subtitle && <ProjectSubtitle>{subtitle}</ProjectSubtitle>}
        {description && <ProjectDescription>{description}</ProjectDescription>}
      </ProjectContent>
    </ProjectWrapper>
  );
}

export default function ProjectsPage() {
  const priorWork = useMemo<Project[]>(
    () => [
      {
        title: 'Realtime Conveyancer',
        subtitle: 'Proaxiom - Released 2021',
        description: (
          <>
            <p>
              Realtime Conveyancer is a startup out of Western Australia, looking to make conveyancers&apos; jobs more
              efficient.
            </p>
            <p>
              I worked on all aspects of Realtime, from gathering requirements, to designing, architecture,
              infrastructure, Ops, and of course development. This application, more than any other, shows my capability
              as a full-stack developer. Now, Realtime is out there in the world, supporting conveyancers to do their
              job more effectively than ever.
            </p>
          </>
        ),
        image: realtimeImage,
        link: 'https://realtimeconveyancer.com.au/',
      },
      {
        title: 'PEXA UK Prototype',
        subtitle: 'Proaxiom - 2020',
        description: (
          <p>
            The Australian PropTech company PEXA has been making moves towards the UK property transaction space, and
            asked Proaxiom to design a prototype for the upcoming venture. This involved radically rethinking the
            workflow process; providing insights into the process directly to the user. The process focussed on ensuring
            the necessary steps for a transaction occurred in the right order, with all dependencies met.
          </p>
        ),
        image: pexaUkImage,
      },
      {
        title: 'PEXA Plus',
        subtitle: 'Proaxiom - Released 2018',
        description: (
          <>
            <p>
              Working for the Australian PropTech company PEXA, PEXA Plus quickly grew from a single dashboard to an
              entire suite of functionality. PEXA Plus Marketplace became PEXA&apos;s first source of alternative
              revenue, providing direct benefit to shareholders.
            </p>
            <p>
              I worked alongside my team to deliver the initial prototypes, while involved integrating with multiple
              third party providers for the marketplace documents. These prototypes gained immense positive feedback
              from users, and led to further business opportunities for Proaxiom.
            </p>
          </>
        ),
        image: pexaPlusImage,
        link: 'https://www.pexa.com.au/sites/plus',
      },
    ],
    [],
  );
  const activeProjects = useMemo<Project[]>(
    () => [
      {
        title: 'sthom.kiwi',
        description: (
          <p>
            I am working on the very website you&apos;re looking at. It&apos;s my goal to write a little bit for it each
            week, whether that be the code for the site or working on a draft blog post.
          </p>
        ),
        github: 'https://github.com/s-thom/sthom.kiwi',
        image: sthomKiwiImage,
        link: 'https://sthom.kiwi/',
      },
      {
        title: 'Infrastructure',
        description: (
          <p>
            In the background, I am trying out different ways of orchestrating any services I want to self-host, and how
            to manage the deployment and upgrading of them. It&apos;s a fairly slow and steady project at the moment,
            and I am using tools that I have not used before It&apos;s a complex topic, so rushing through is only going
            to lead to issues down the line.
          </p>
        ),
      },
    ],
    [],
  );
  const completedProjects = useMemo<Project[]>(
    () => [
      {
        title: 'linkdrop',
        description: (
          <>
            <p>
              linkdrop is a website for storing links with tags, and then searching for them later. It&apos;s built to
              be quick to use, so I can quickly save something in the middle of a browsing session.
            </p>
            <p>
              If you know me in real life and want to use it, just ask me about it and I&apos;ll add you to it. Public
              sign up is not available at this time.
            </p>
          </>
        ),
        github: 'https://github.com/s-thom/linkdrop',
        image: linkdropImage,
        link: 'https://linkdrop.sthom.kiwi/',
      },
      {
        title: 'paste',
        description: (
          <p>
            paste is a tiny text file hosting site, similar in concept to pastebin. I built it because I wanted to give
            the Rust programming language a try, and wanted a small project to learn it with. Writing paste gave me an
            opportunity to get it all wrong, throw code out, and start again; which certainly happened. I think the
            language has some interesting design decisions, which I may write about at a later date.
          </p>
        ),
        github: 'https://github.com/s-thom/paste',
        image: pasteImage,
        link: 'https://paste.sthom.kiwi/about',
      },
      {
        title: 'the-index',
        description: (
          <>
            <p>the-index has been replaced by linkdrop, but it gave me a lot of what I needed to build it.</p>
            <p>
              the-index is a link bookmarking site with tags and searching. I made it because I was losing track of the
              tickets I had worked on previously at work, and found myself benefiting from having links to past tickets
              easily searchable.
            </p>
          </>
        ),
        github: 'https://github.com/s-thom/the-index',
        image: theIndexImage,
        link: 'https://the-index.sthom.kiwi/',
      },
      {
        title: 'EdNon',
        description: (
          <>
            <p>
              EdNon is an experiment into the IndexedDB APIs, and the implications of storing data on the client using
              async APIs. It also filled a need of mine at work, where I needed to keep track of the time I had spent on
              different tasks. With this, I was able to create as many timers and notes as I needed, without any extra
              menus.
            </p>
            <p>
              All data is stored locally on the browser. There is no server behind this application (apart from the web
              server).
            </p>
          </>
        ),
        github: 'https://github.com/s-thom/ednon',
        image: ednonImage,
        link: 'https://ednon.sthom.kiwi/',
      },
    ],
    [],
  );
  const dormantProjects = useMemo<Project[]>(
    () => [
      {
        title: 'How to Screenshot',
        description: (
          <>
            <p>A website to show how to take screenshots on various platforms.</p>
            <p>
              This project was partially to solve a pet peeve of mine (when people use their phone to take a photo of a
              screen), but also to try and make a modern website without any framework at all. All images are embedded
              SVG, meaning the browser doesn&apos;t need to fetch additional resources to load.
            </p>
          </>
        ),
        github: 'https://github.com/s-thom/howtoscreenshot',
        image: howToScreenshotImage,
        link: 'https://screenshot.help/',
      },
      {
        title: 'Colour Tool',
        description: (
          <>
            <p>
              Initially a tool to help me compare colours, this project ended up being a journey down how colour is
              represented in computers, the features of different colour spaces, and just how much we take for granted
              when it comes to colour.
            </p>
            <p>
              In the future I want to extend this to have a more advanced colour picker, as well as better
              representations of the colour spaces, so that others can learn what I have only scratched the surface of.
            </p>
          </>
        ),
        github: 'https://github.com/s-thom/colour-tool',
        image: colourImage,
        link: 'https://colour.sthom.kiwi/',
      },
    ],
    [],
  );

  return (
    <Layout
      breadcrumbs={[
        { path: home({}), name: 'Home' },
        { path: projects({}), name: 'Projects' },
      ]}
    >
      <NextSeo title="Projects | Stuart Thomson" />
      <h1>Prior Work</h1>
      <p>Here are a selection on the products I have worked on over my career.</p>
      <ProjectList role="list">
        {priorWork.map((project) => (
          <ProjectCard key={project.title} project={project} role="listitem" />
        ))}
      </ProjectList>
      <h1>Personal Projects</h1>
      <p>
        I do also work on other things in my space time. Most of the time, these are to fulfil a need I have at work, or
        simply to help me learn something new. The software industry is constantly evolving, so it is important that I
        keep on top of my own learning.
      </p>
      <h2>Completed Projects</h2>
      <p>
        These are the lucky ones that have graduated to the promised land known as &quot;the done column of my projects
        board&quot;.
      </p>
      <ProjectList role="list">
        {completedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} role="listitem" />
        ))}
      </ProjectList>
      <h2>Active Projects</h2>
      <p>
        These projects are still actively being worked on. If they look like your kind of thing, then contributions are
        welcome!
      </p>
      <ProjectList role="list">
        {activeProjects.map((project) => (
          <ProjectCard key={project.title} project={project} role="listitem" />
        ))}
      </ProjectList>
      <h2>Dormant Projects</h2>
      <p>These projects are currently lying in wait for either time or motivation.</p>
      <ProjectList role="list">
        {dormantProjects.map((project) => (
          <ProjectCard key={project.title} project={project} role="listitem" />
        ))}
      </ProjectList>
    </Layout>
  );
}

export const config = {
  unstable_runtimeJS: false,
};

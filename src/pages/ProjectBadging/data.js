import {
  discord,
  dropbox,
  github,
  loom,
  ApplySvgComponent,
  ReviewSvgComponent,
  GetBadgedSvgComponent,
} from '../../assets/images';

export const featuredProjects = [
  {
    name: 'github',
    logo: github,
  },
  {
    name: 'loom',
    logo: loom,
  },
  {
    name: 'discord',
    logo: discord,
  },
  {
    name: 'dropbox',
    logo: dropbox,
  },
];

export const howItWorksData = [
  {
    id: 1,
    title: 'Apply for Badge',
    text: `To apply for a DEI badge, ensure you have a document that describes the DEI efforts (DEI.md) for your open source project.`,
    link: 'Check a DEI.md file template',
    icon: <ApplySvgComponent width="28" height="30" className="apply-svg" />,
  },
  {
    id: 2,
    title: 'Review',
    text: `The submitted project will automatically
		be scanned for the presence of the
		DEI.md file.`,

    link: 'Learn More',
    icon: <ReviewSvgComponent width="28" height="22" className="review-svg" />,
  },
  {
    id: 3,
    title: 'Get a DEI Project Badge',
    text: `After a successful review, your project will receive a DEI badge and a supplemental inclusive language
		report via email.`,

    icon: (
      <GetBadgedSvgComponent width="14" height="28" className="badge-svg" />
    ),
  },
];

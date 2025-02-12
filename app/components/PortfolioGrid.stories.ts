import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import PortfolioGrid from './PortfolioGrid';
import { PortfolioItem } from '~/data/portfolio';
import drakenfruitLogo from '~/assets/images/drakenfruit-woordmerk-logo.png';
import letsLedsLogo from '~/assets/images/letsleds-logo.png';
import watershedLogo from '~/assets/images/watershed-logo.png';

export default {
  title: 'Organisms/Portfolio Grid',
  component: PortfolioGrid,
} satisfies Meta<typeof PortfolioGrid>;

type Story = StoryObj<typeof PortfolioGrid>;

const portfolioItems: PortfolioItem[] = Array.from({ length: 9 }, () => ({
  title: faker.lorem.sentence(),
  summary: faker.lorem.paragraph(),
  url: faker.internet.url(),
  image: faker.image.urlPicsumPhotos({ blur: 0 }),
  customer: faker.company.name(),
  logo: faker.helpers.arrayElement([drakenfruitLogo, letsLedsLogo, watershedLogo]),
  tags: faker.helpers.arrayElements(['Web Application', 'WordPress', 'Custom WordPress theme', 'Custom WordPress Plugin', 'Web site']),
}));

export const Default: Story = {
  args: {
    portfolioItems,
  },
};

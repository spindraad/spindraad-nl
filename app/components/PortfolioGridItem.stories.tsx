import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import PortfolioGridItem from './PortfolioGridItem';
import { PortfolioItem } from '~/data/portfolio';
import drakenfruitLogo from '~/assets/images/drakenfruit-woordmerk-logo.png';
import letsLedsLogo from '~/assets/images/letsleds-logo.png';
import watershedLogo from '~/assets/images/watershed-logo.png';

export default {
  title: 'Organisms/Portfolio Grid Item',
  component: PortfolioGridItem,
  decorators: [
    (Story) => (
      <div className="grid grid-rows-1 grid-cols-1 w-96">
        {Story()}
        </div>
    )
  ]
} satisfies Meta<typeof PortfolioGridItem>;

type Story = StoryObj<typeof PortfolioGridItem>;

const portfolioItem: PortfolioItem = {
  title: faker.lorem.sentence(),
  summary: faker.lorem.paragraph(),
  url: faker.internet.url(),
  image: faker.image.urlPicsumPhotos({ blur: 0 }),
  customer: faker.company.name(),
  logo: faker.helpers.arrayElement([drakenfruitLogo, letsLedsLogo, watershedLogo]),
  tags: faker.helpers.arrayElements(['Web Application', 'WordPress', 'Custom WordPress theme', 'Custom WordPress Plugin', 'Web site']),
};

export const Default: Story = {
  args: {
    ...portfolioItem,
  },
};

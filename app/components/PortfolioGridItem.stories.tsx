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
} satisfies Meta<typeof PortfolioGridItem>;

type Story = StoryObj<typeof PortfolioGridItem>;

const portfolioItem: Omit<PortfolioItem, 'content'> = {
  title: faker.lorem.sentence(),
  summary: faker.lorem.paragraph(),
  slug: faker.internet.url(),
  image: faker.image.urlPicsumPhotos({ blur: 0 }),
  customer: faker.company.name(),
  logo: faker.helpers.arrayElement([drakenfruitLogo, letsLedsLogo, watershedLogo]),
  tags: faker.helpers.arrayElements(['Web Application', 'WordPress', 'Custom WordPress theme', 'Custom WordPress Plugin', 'Web site']),
};

export const Default: Story = {
  args: {
    ...portfolioItem,
  },
  decorators: [
    (Story) => (
      <div className="grid grid-rows-1 grid-cols-1 w-96">
        {Story()}
      </div>
    )
  ]
};

export const Featured: Story = {
  args: {
    ...portfolioItem,
    featured: true,
  },
  decorators: [
    (Story) => (
      <div className="grid grid-rows-1 grid-cols-1 w-[36rem]">
        {Story()}
      </div>
    )
  ]
}

export const ComingSoonWIPURL: Story = {
  name: 'Coming soon (WIP) with url',
  args: {
    ...portfolioItem,
    wip: true,
  },
  decorators: [
    (Story) => (
      <div className="grid grid-rows-1 grid-cols-1 w-96">
        {Story()}
      </div>
    )
  ]
};

export const ComingSoonWIP: Story = {
  name: 'Coming soon (WIP) without url',
  args: {
    ...portfolioItem,
    wip: true,
    slug: undefined,
  },
  decorators: [
    (Story) => (
      <div className="grid grid-rows-1 grid-cols-1 w-96">
        {Story()}
      </div>
    )
  ]
};

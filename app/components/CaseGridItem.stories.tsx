import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import CaseGridItem from 'app/components/CaseGridItem';
import drakenfruitLogo from '~/assets/images/drakenfruit-woordmerk-logo.png';
import letsLedsLogo from '~/assets/images/letsleds-logo.png';
import watershedLogo from '~/assets/images/watershed-logo.png';

export default {
  title: 'Organisms/Case Grid Item',
  component: CaseGridItem,
} satisfies Meta<typeof CaseGridItem>;

type Story = StoryObj<typeof CaseGridItem>;

const createCaseItem = () => ({
  title: faker.lorem.sentence(),
  summary: faker.lorem.paragraph(),
  url: faker.internet.url(),
  image: faker.image.urlPicsumPhotos({ blur: 0 }),
  customer: faker.company.name(),
  logo: faker.helpers.arrayElement([drakenfruitLogo, letsLedsLogo, watershedLogo]),
});

export const SingleItem: Story = {
  args: createCaseItem(),
  decorators: [
    (Story) => (
      <div className="grid grid-rows-1 grid-cols-1 w-96">
        {Story()}
      </div>
    )
  ]
};

export const FeaturedItem: Story = {
  args: {
    ...createCaseItem(),
    featured: true,
  },
  decorators: [
    (Story) => (
      <div className="grid grid-rows-1 grid-cols-1 w-[700px]">
        {Story()}
      </div>
    )
  ]
};

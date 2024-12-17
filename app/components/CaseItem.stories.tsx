import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import CaseItem from './CaseItem';
import drakenfruitLogo from '~/assets/images/drakenfruit-woordmerk-logo.png';
import letsLedsLogo from '~/assets/images/letsleds-logo.png';
import watershedLogo from '~/assets/images/watershed-logo.png';

export default {
  title: 'Organisms/Case Item',
  component: CaseItem,
} satisfies Meta<typeof CaseItem>;

type Story = StoryObj<typeof CaseItem>;

const createCaseItem = () => ({
  title: faker.lorem.sentence(),
  summary: faker.lorem.paragraph(),
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

export const MultipleItems: Story = {
  render: () => {
    const items = Array.from({ length: 9 }, createCaseItem);

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense gap-4">
        {items.map((item, index) => (
          <CaseItem key={index} {...item} featured={index === 0 || index === 3 || index === 6} />
        ))}
      </div>
    );
  }
};

export const FeaturedItem: Story = {
  args: {
    ...createCaseItem(),
    featured: true,
  },
  decorators: [
    (Story) => (
    <div className="grid grid-rows-1 grid-cols-1">
      {Story()}
    </div>
    )
  ]
}

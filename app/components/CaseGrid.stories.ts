import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import CaseGrid from './CaseGrid';
import { CaseItem } from '~/data/cases';
import drakenfruitLogo from '~/assets/images/drakenfruit-woordmerk-logo.png';
import letsLedsLogo from '~/assets/images/letsleds-logo.png';
import watershedLogo from '~/assets/images/watershed-logo.png';

export default {
  title: 'Organisms/Case Grid',
  component: CaseGrid,
} satisfies Meta<typeof CaseGrid>;

type Story = StoryObj<typeof CaseGrid>;

const caseItems: CaseItem[] = Array.from({ length: 9 }, () => ({
  title: faker.lorem.sentence(),
  summary: faker.lorem.paragraph(),
  url: faker.internet.url(),
  image: faker.image.urlPicsumPhotos({ blur: 0 }),
  customer: faker.company.name(),
  logo: faker.helpers.arrayElement([drakenfruitLogo, letsLedsLogo, watershedLogo]),
}));

export const Default: Story = {
  args: {
    caseItems,
  },
};

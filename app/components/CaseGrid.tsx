import { CaseItem } from '~/data/cases';
import CaseGridItem from '~/components/CaseGridItem';

type Props = {
  caseItems: CaseItem[];
};

export default function CaseGrid({ caseItems }: Props) {
  return (
    <ul className="grid grid-cols-[repeat(3,minmax(40rem,60rem))] gap-4">
      { caseItems.map((item, index) => (
        <CaseGridItem key={index} {...item} />
      ))}
    </ul>
  );
}

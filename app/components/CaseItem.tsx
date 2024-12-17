import { Link } from '@remix-run/react';
import { Case } from '~/data/cases';

type Props = Case;

export default function CaseItem({ title, summary, image, url, customer, logo, featured }: Props) {
  const wrapperClasses = `
    group
    flex
    ${ featured ? 'flex-row col-span-2' : 'flex-col' }
    ${ featured ? 'bg-accent-orange' : 'bg-crisp-white' }
    w-full
    border-2
    border-soft-gray
    hover:border-accent-orange
    overflow-hidden
    cursor-pointer
    scale-100
    hover:scale-[1.02]
    transition-all
  `;

  const imageClasses = `
    ${ featured ? 'w-1/3' : 'w-full' }
    ${ featured ? 'aspect-square' : 'aspect-video' }
    object-cover
    scale-100
    group-hover:scale-105
    transition-transform
  `;

  const contentWrapperClasses = `
    ${ featured ? 'w-2/3' : 'w-full' }
    space-y-4 
    p-4
  `;

  const titleClasses = `
    text-xl
    font-bold
    ${featured ? 'text-white' : 'text-black group-hover:text-deep-blue'}
    transition-colors
  `;

  return (
    <Link to={url} className={wrapperClasses}>
      <img className={imageClasses} src={ image } alt={ title } />

      <div className={contentWrapperClasses}>
        <h2 className={titleClasses}>{ title }</h2>
        <p>{ summary }</p>

        <div className="flex flex-row items-center justify-between gap-4">
          <p className="font-chivo w-full">{ customer }</p>
          <img className="w-full h-12 self-end object-contain" src={ logo } alt={ customer } />
        </div>
      </div>
    </Link>
  );
}

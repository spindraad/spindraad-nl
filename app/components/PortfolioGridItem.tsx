import { PortfolioItem } from '~/data/portfolio';
import { Link } from '@remix-run/react';
import Pill from '~/components/Pill';

type Props = PortfolioItem

export default function PortfolioGridItem({ title, summary, logo, featured, url, customer, tags, image }: Props) {
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
    group-hover:scale-[1.02]
    transition-transform
  `;

  const contentWrapperClasses = `
    ${ featured ? 'w-2/3' : 'w-full h-full' }
    flex
    flex-col
    gap-6
    p-4
  `;

  const titleClasses = `
    text-2xl
    font-bold
    ${featured ? 'text-gray-100 group-hover:text-white' : 'text-deep-blue'}
    transition-colors
  `;

  const customerClasses = `
    font-chivo
    w-full
    ${featured ? 'text-deep-blue' : 'text-gray-400'}
    text-sm
  `;

  return (
    <Link to={url} className={wrapperClasses}>
      <img className={imageClasses} src={ image } alt={ title } />

      <div className={contentWrapperClasses}>
        <div className="flex flex-col gap-1">
          <p className={customerClasses}>{ customer }</p>
          <h2 className={titleClasses}>{ title }</h2>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          { tags.map((tag, index) => (
            <Pill key={index} textSize="xs" color="soft-gray">{tag}</Pill>
          ))}
        </div>
        <p className="text-base">{ summary }</p>

        <div className="flex flex-row items-center justify-between gap-4 mt-auto">
          <img className="w-full h-12 self-end object-contain" src={ logo } alt={ customer } />
        </div>
      </div>
    </Link>
  );
}

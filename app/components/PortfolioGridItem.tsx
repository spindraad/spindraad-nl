import { PortfolioItem } from '~/data/portfolio';
import { Link } from 'react-router';
import Pill from '~/components/Pill';
import { ReactNode } from 'react';

type Props = Omit<PortfolioItem, 'content'>;

export default function PortfolioGridItem({ title, summary, logo, featured, wip, slug, customer, tags, image }: Props) {
  const wrapperClasses = `
    group
    flex
    ${ featured ? 'flex-row col-span-2' : 'flex-col' }
    ${ featured ? 'bg-accent-orange' : 'bg-crisp-white' }
    ${ !slug ? 
      wip ? 'opacity-60' : 'opacity-100' : 'opacity-100' }
    w-full
    h-full
    border-2
    ${ !slug ? 'border-soft-gray/50' : 'border-soft-gray' }
    ${ !slug ? '' : 'hover:border-accent-orange' }
    overflow-hidden
    ${ !slug ? '' : 'cursor-pointer' }
    scale-100
    ${ !slug ? '' : 'hover:scale-[1.02]'}
    transition-all
  `;

  const imageWrapperClasses = `
    ${ featured ? 'w-1/2' : 'w-full' }
    relative
    transition-transform
  `;

  const wipBannerWrapperClasses = `
    absolute
    z-10
    inset-0
    flex
    flex-col
    items-center
    justify-center
    bg-soft-gray/75
    scale-100
    ${ !slug ? '': 'group-hover:scale-[1.02]' }
  `;

  const wipBannerClasses = `
    text-crisp-white
    bg-deep-blue/90
    px-2 py-1
    text-lg
    font-bold
  `;

  const imageClasses = `
    ${ featured ? 'aspect-square' : 'aspect-video' }
    w-full
    h-full
    object-cover
    scale-100
    ${ !slug ? '': 'group-hover:scale-[1.02]' }
    transition-transform
  `;

  const contentWrapperClasses = `
    ${ featured ? 'w-1/2' : 'w-full h-full' }
    flex
    flex-col
    gap-6
    p-4
  `;

  const titleClasses = `
    text-2xl
    font-bold
    ${featured ? 'text-gray-100 group-hover:text-white' : 
      !slug ? 'text-deep-blue' : 'text-deep-blue group-hover:text-accent-orange'}
    transition-colors
  `;

  const customerClasses = `
    font-chivo
    w-full
    ${featured ? 'text-deep-blue' : 'text-gray-400'}
    text-sm
  `;

  return (
    <ItemWrapper to={slug} className={wrapperClasses}>
      <div className={imageWrapperClasses}>
        { wip ? (
          <div className={wipBannerWrapperClasses}>
            <p className={wipBannerClasses}>Work in progress</p>
          </div>
        ) : null}
        <img className={imageClasses} src={ image } alt={ title } />
      </div>

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

        { logo ? (
          <div className="flex flex-row items-center justify-between gap-4 mt-auto">
            <img className="w-full h-12 self-end object-contain" src={ logo } alt={ customer } />
          </div>
        ) : null }
      </div>
    </ItemWrapper>
  );
}

type ItemWrapperProps = {
  to: string | undefined,
  className: string,
  children: ReactNode
};

function ItemWrapper({ to, className, children}: ItemWrapperProps) {
  return to ? (
    <Link to={to} className={className}>{children}</Link>
  ) : (
    <div className={className}>{children}</div>
  );
}

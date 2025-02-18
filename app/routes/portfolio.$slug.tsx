import { ActionFunctionArgs, MetaFunction } from 'react-router';
import { Link, useLoaderData } from 'react-router';
import { portfolioItems } from '~/data/portfolio';
import Pill from '~/components/Pill';
import Icon from '~/components/Icon';

export function loader({ params }: ActionFunctionArgs) {
  const item = portfolioItems.find((item) => item.slug === params.slug);

  if (!item) {
    throw new Error('Item not found');
  }

  return { item };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  {
    title: data?.item.title ? `${data?.item.title} | spindraad` : 'spindraad',
    description: data?.item.summary,
  },
];

export default function PortfolioItemRoute() {
  const { item } = useLoaderData<typeof loader>();

  return (
    <div className="callout grid [grid-template-areas:_'title'_'content'_'image'] sm:[grid-template-areas:_'title_title'_'content_image'] grid-cols-1 grid-rows-[minmax(10rem,max-content),1fr,1fr] sm:grid-cols-[1.25fr,2fr] sm:grid-rows-[minmax(7rem,max-content),1fr] lg:grid-rows-[minmax(10rem,max-content),1fr] gap-8">
      <div className="[grid-area:title]">
        <Link to="/portfolio" className="no-underline text-sm text-gray-400">
          <Icon name="arrow-left" prefix="fal" className="mr-2" />
          Terug naar portfolio
        </Link>

        <h1>{item.title}</h1>

        <ul className="flex flex-row flex-wrap gap-2 not-prose">
          { item.tags.map((tag, index) => (
            <Pill key={index} textSize="xs" color="soft-gray">{tag}</Pill>
          ))}
        </ul>
      </div>

      <div className="[grid-area:content]" dangerouslySetInnerHTML={{ __html: item.content }} />

      <figure className="[grid-area:image]">
        <img src={item.image} alt={item.title} />
        <figcaption>{item.title}</figcaption>
      </figure>
    </div>
  );
}

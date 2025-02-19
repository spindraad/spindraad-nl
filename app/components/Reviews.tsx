import Pill from '~/components/Pill';
import { Review, reviews } from '~/data/reviews';
import Anchor from '~/components/Anchor';

export default function Reviews() {
  return (
    <section id="reviews" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <Pill>Onze referenties</Pill>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Wat klanten over ons zeggen</h2>
          <p
            className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Lees wat onze klanten over ons zeggen en waarom ze ons aanbevelen.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 justify-center">
          { reviews.map((review, index) => (
            <ReviewItem key={ index } { ...review } />
          )) }
        </div>
      </div>
    </section>
  );
}

type ReviewItemProps = Review;

function ReviewItem({ customer, image, webpage, review }: ReviewItemProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={ image }
        alt={customer}
        className="object-contain w-full h-12"
      />
        <div className="prose-sm prose-blockquote:border-l-0">
          <blockquote className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: review }} />
          <p className="text-sm font-bold">
            &mdash; <Anchor href={webpage} external>{ customer }</Anchor>
          </p>
        </div>
    </div>
  );
}

import { useLoaderData } from 'react-router';
import { products } from '~/data/products';
import PageLayout from '~/components/PageLayout';
import { renderPrice } from '~/utils';

export function loader() {
  return { products };
}

export default function ShopIndexRoute() {
  const { products: allProducts } = useLoaderData<typeof loader>();



  return (
    <PageLayout classes="content" topMargin>
      <title>Winkel / spindraad</title>
      <meta name="description" content="De digitale etalage" />

      <div className="feature">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-7xl mb-12">Winkel</h1>
        <div className="wa-grid max-w-md">
          {allProducts.map((product) => (
            <a key={product.id} href={`/winkel/${product.slug}`} className="wa-link-plain">
              <wa-card>
                <img
                  slot="media"
                  src={product.image}
                  alt={product.imageAlt}
                />
                <div className="wa-stack">
                  <div className="wa-flank:end wa-align-items-start wa-heading-m">
                    <span>{product.title}</span>
                    <span>{renderPrice(product.price)}</span>
                  </div>
                  <p className="wa-caption-m">
                    {product.summary}
                  </p>
                </div>
              </wa-card>
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

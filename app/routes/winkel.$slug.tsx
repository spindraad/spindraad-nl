import { useLoaderData } from 'react-router';
import type { Route } from './+types/winkel.$slug';
import { products } from '~/data/products';
import { renderPrice } from '~/utils';

export function loader({ params }: Route.LoaderArgs) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    throw new Response('Not Found', { status: 404 });
  }

  return { product };
}

export default function ShopProductRoute() {
  const { product } = useLoaderData<typeof loader>();

  return (
    <div className="wa-grid wa-gap-2xl">
      <div className="wa-stack wa-gap-2xl">
        <h2>{product.title} ({renderPrice(product.price)})</h2>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />

        <div className="wa-stack">
          <div className="wa-flank">
            <wa-input type="number" aria-label="Quantity" value="1" min="1" style={ { 'max-width': '8ch' } }></wa-input>
            <wa-button variant="brand">
              <wa-icon slot="start" name="basket-shopping"></wa-icon>
              Add to Basket
            </wa-button>
          </div>
        </div>
        <dl className="wa-grid">
          { product.tags.map((tag) => (
            <div key={`${product.id}__${tag}`} className="wa-flank">
              <wa-avatar>
                <wa-icon slot="icon" name="coffee-bean"></wa-icon>
              </wa-avatar>
              <div className="wa-stack wa-gap-0">
                <dt>{tag}</dt>
                <dd></dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
      <div className="wa-frame wa-border-radius-m">
        <img
          src="https://images.unsplash.com/photo-1600396538702-d234dbb79139?q=80&w=3833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Whole roasted coffee beans (Photograph by Jocelyn Morales)"
        />
      </div>
    </div>

  );
}

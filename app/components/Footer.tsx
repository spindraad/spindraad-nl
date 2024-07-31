import Icon from '~/components/Icon';
import Navigation from '~/components/Navigation';
import Anchor from '~/components/Anchor';
import { useEffect, useRef } from 'react';

export default function Footer() {

  const mailToRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (mailToRef.current) {
      mailToRef.current.href = `mailto:hallo@spindraad.nl`;
    }
  }, [mailToRef]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_3fr_0.5fr_0.5fr] xl:grid-cols-[1fr_4fr_0.5fr_0.5fr] gap-y-6 px-6 xl:px-24 py-12">

      <div className="col-span-2 md:col-span-1 order-2 lg:order-1 text-center lg:text-left">
        <Anchor ref={mailToRef} className="text-xl text-deep-blue font-bold" href="mailto:stake.metros_07@icloud.com">hallo@spindraad.nl</Anchor>

        <p className="mt-2">
          Torenallee 36-40<br/>
          5617BD Eindhoven<br/>
          Nederland<br/>
        </p>
      </div>

      <div className="order-1 lg:order-2 col-span-2 md:col-span-3 lg:col-span-1 text-center flex justify-center items-center">
        <p>
          <Icon name="copyright" className="mr-2" /> {new Date().getFullYear()} Alle rechten voorbehouden.
        </p>
      </div>

      <Navigation className="order-3 ml-0 " orientation="vertical" size="md" gap="sm" />
      <ul className="order-4 text-center lg:text-left space-y-4 font-thin">
        <li>
          <Anchor className="space-x-2" rel="me noopener noreferrer" href="https://mastodon.social/@spindraad" target="_blank">
            <Icon prefix="fab" name="mastodon"/> Mastodon
          </Anchor>
        </li>
        <li>
          <Anchor className="space-x-2" rel="me noopener noreferrer" href="https://x.com/spindraad" target="_blank">
            <Icon prefix="fab" name="twitter"/> X
          </Anchor>
        </li>
      </ul>
    </div>
  );
}

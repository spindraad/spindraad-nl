import Icon from '~/components/Icon';
import Navigation from '~/components/Navigation';
import Anchor from '~/components/Anchor';

export default function Footer() {
  return (
    <div className="grid grid-cols-3 px-24 py-12">
      <div>
        <Anchor className="text-xl text-deep-blue font-bold" href="mailto:hallo@spindraad.nl">hallo@spindraad.nl</Anchor>

        <p className="mt-2">
          Torenallee 36-40<br/>
          5617BD Eindhoven<br/>
          Nederland<br/>
        </p>
      </div>

      <div className="text-center flex justify-center items-center">
        <p>
          <Icon name="copyright" className="mr-2" /> {new Date().getFullYear()} Alle rechten voorbehouden.
        </p>
      </div>

      <div className="text-right flex justify-between gap-12">
        <Navigation orientation="vertical" size="md" gap="sm" />

        <ul className="text-left space-y-4 font-thin">
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
    </div>
  );
}

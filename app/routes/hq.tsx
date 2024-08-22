import SpindraadCaption from '~/components/SpindraadCaption';

export default function HeadquartersRoute() {
  return (
    <div className="grid grid-areas-hq grid-cols-hq grid-rows-hq min-h-[100dvh]">
      <header className="grid-in-header flex flex-row justify-between px-5 items-center">
        <h1 className="text-xl"><SpindraadCaption /></h1>
        <nav className="col-span-2">
          <ul className="flex space-x-2">
            <li><a href="/">home</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/portfolio">portfolio</a></li>
            <li><a href="/customers">customers</a></li>
            <li><a href="/contact">contact</a></li>
          </ul>
        </nav>
      </header>

      <aside className="grid-in-aside bg-deep-blue text-crisp-white py-10 px-5">
        <h2>spindraad</h2>
        <p>spindraad bouwt de beste web applicaties.</p>
      </aside>

      <main className="grid-in-main p-10">
        <h2>spindraad</h2>
        <p>spindraad bouwt de beste web applicaties.</p>
      </main>

      <footer className="grid-in-footer px-5 flex place-items-center">
        <p>© {new Date().getFullYear()} <SpindraadCaption/></p>
      </footer>
    </div>
  );
}

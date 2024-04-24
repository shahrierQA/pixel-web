const NAV_ITEMS = [
  {
    id: 1,
    name: "BRANDS"
  },
  {
    id: 2,
    name: "CAMERAS"
  },
  {
    id: 3,
    name: "LENSES"
  },
  {
    id: 4,
    name: "ACCESSORIES"
  },
  {
    id: 5,
    name: "STUDIO"
  },
  {
    id: 6,
    name: "EXTREME"
  },
  {
    id: 7,
    name: "USED"
  }
];

const DIGITAL_ITEMS = [
  {
    id: 1,
    name: "DSLR"
  },
  {
    id: 2,
    name: "Mirrorless"
  },
  {
    id: 3,
    name: "Compact"
  },
  {
    id: 4,
    name: "Medium Format"
  }
];

const FILM_ITEMS = [
  {
    id: 1,
    name: "35mm"
  },
  {
    id: 2,
    name: "Medium Format"
  },
  {
    id: 3,
    name: "Large Format"
  },
  {
    id: 4,
    name: "Instant"
  },
  {
    id: 5,
    name: "Disposable"
  }
];

const VIDEO_ITEMS = [
  {
    id: 1,
    name: "Comcorder"
  },
  {
    id: 2,
    name: "Pro-Consumer"
  },
  {
    id: 3,
    name: "Super-Chip"
  }
];

export function DesktopNavigation() {
  return (
    <nav className="mt-10 md:p-0 p-12">
      <ul className="flex md:items-center justify-between md:flex-row flex-col md:space-y-0 space-y-6">
        {NAV_ITEMS.map((item) => {
          if (item.id === 2) {
            return (
              <li
                key={item.id}
                className="text-ui-white text-md group md:hover:bg-ui-brand-primary md:py-4 md:px-8"
              >
                {item.name}

                <div className="hidden md:group-hover:hidden group-hover:block">
                  <DropdownMenu />
                </div>

                <div className="absolute top-full w-full left-0 hidden z-40 bg-ui-white p-6 md:group-hover:block text-ui-black group-hover:duration-500">
                  <DropdownMenu />
                </div>
              </li>
            );
          }

          return (
            <li key={item.id} className="text-ui-white text-md">
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const DropdownMenu = () => {
  return (
    <div className="md:max-w-3xl mx-auto grid md:grid-cols-3 gap-6 md:mt-0 mt-4">
      <div>
        <h4 className="text-md font-bold underline">DIGITAL</h4>
        <ul className="mt-1 text-sm space-y-1">
          {DIGITAL_ITEMS.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>

      <div>
        <h4 className="text-md font-bold underline">FILM</h4>
        <ul className="mt-1 text-sm space-y-1">
          {FILM_ITEMS.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>

      <div>
        <h4 className="text-md font-bold underline">VIDEO</h4>
        <ul className="mt-1 text-sm space-y-1">
          {VIDEO_ITEMS.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

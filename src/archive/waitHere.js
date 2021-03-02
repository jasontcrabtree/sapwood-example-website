/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
{
  globalNavRes.map((nav, i) => (
    <li ref={dropdownRef} key={i} className="primary menu-container">
      {/* if nav has items then render button wrapping link */}

      {nav.items.length ? (
        <button
          className="menu-trigger nav-button"
          type="button"
          onMouseEnter={onEnter}
        >
          <Link to={nav.primary.primary_link_destination.url}>
            {nav.primary.primary_link_label}
            <Chevron />
          </Link>
        </button>
      ) : (
        // if nav has no items render just a single pirmary link
        <PrimaryLinkSingleLink
          link={nav.primary.primary_link_destination.url}
          label={nav.primary.primary_link_label}
        />
      )}

      {/* if nav has items then render a nested list of the items */}
      {nav.items.length ? (
        <ul
          className={`secondary-list nav-button menu ${
            isMenuActive ? 'active' : 'inactive'
          }`}
        >
          {/* map over nested items */}
          {nav.items.map((item, id) => (
            <NestedLink
              key={id}
              link={item.secondary_link_url.url}
              label={item.secondary_nested_link_label}
            />
          ))}
        </ul>
      ) : null}

      {/* end of list item */}
    </li>
  ));
}

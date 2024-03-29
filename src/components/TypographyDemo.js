import React from 'react';

function TypographyDemo() {
  return (
    <section className="typography">
      <h2 className="label">Typography</h2>
      <div className="type">
        <div className="type-titles loose">
          <h1 className="h1-hero">h1 Hero Title</h1>
          <h1 className="">h1 Title</h1>
          <h2 className="h2-serif serif">h2 Title Serif</h2>
          <h2 className="">h2 Title Sans</h2>
          <h3 className="h3-serif">h3 Title Serif</h3>
          <h3 className="">h3 Title Sans</h3>
          <p className="lg-copy">P Large Copy</p>
          <h4 className="">h4 Title Sans</h4>
          <h4 className="h4-serif serif">h4 Title Serif</h4>
        </div>

        <div className="type-body">
          <p className="p-">18px Regular</p>
          <p className="p-bold">18px Bold</p>
          <p className="p-italics">18px Italics</p>
          <p className="p-underline">18px Underline</p>
          <hr />
          <p className="p-small">16px Regular</p>
          <p className="p-small p-bold">16px Bold</p>
          <p className="p-small p-italics">16px Italics</p>
          <p className="p-small p-underline">16px Underline</p>
          <span className="eyebrow">14px Eyebrow</span>
          <hr />
          <ul>
            <li>Unordered list item</li>
            <li>Second list item</li>
            <li>
              New Zealand has a universal superannuation scheme. Everyone aged
              65 years old or over, who is a New Zealand citizen or permanent
              resident and normally lives in New Zealand at the time they apply
              is eligible.
            </li>
          </ul>
          <ol>
            <li>Ordered list item</li>
            <li>Second list item</li>

            <li>
              New Zealand has a universal superannuation scheme. Everyone aged
              65 years old or over, who is a New Zealand citizen or permanent
              resident and normally lives in New Zealand at the time they apply
              is eligible.
            </li>
          </ol>
          <a href="/">Standard Link</a>
        </div>
      </div>
    </section>
  );
}

export default TypographyDemo;

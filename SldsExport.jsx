import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import "./design-tokens.css";

export default function SldsExport() {
  return (
    <main className="slds-scope slds-p-around_large">
      <div className="slds-m-bottom_small slds-size_1-of-1" data-node-id="frxqh9hn">
      <nav aria-label="Breadcrumbs"><ol className="slds-breadcrumb slds-list_horizontal">
        <li className="slds-breadcrumb__item slds-text-title_caps"><a href="#">Accounts</a></li>
        <li className="slds-breadcrumb__item slds-text-title_caps"><a href="#">Acme Corp</a></li>
        <li className="slds-breadcrumb__item slds-text-title_caps"><a href="#">Opportunities</a></li>
      </ol></nav>
      </div>
      <div className="slds-size_1-of-1" data-node-id="lqx7wsvv">
      <article className="slds-card">
        <div className="slds-card__header slds-grid">
          <header className="slds-media slds-media_center slds-has-flexi-truncate">
            <div className="slds-media__body"><h2 className="slds-card__header-title">Opportunities</h2><p className="slds-text-body_small slds-text-color_weak">3 items</p></div>
          </header>
        </div>
        <div className="slds-card__body slds-card__body_inner">
          <div className="slds-size_1-of-1" data-node-id="zq0edu1j">
          <div className="slds-tabs_default">
            <ul className="slds-tabs_default__nav" role="tablist">
              <li className="slds-tabs_default__item slds-is-active" role="presentation"><a className="slds-tabs_default__link" role="tab" aria-selected="true">Pricing</a></li>
              <li className="slds-tabs_default__item" role="presentation"><a className="slds-tabs_default__link" role="tab" aria-selected="false">Demo</a></li>
              <li className="slds-tabs_default__item" role="presentation"><a className="slds-tabs_default__link" role="tab" aria-selected="false">Articles</a></li>
              <li className="slds-tabs_default__item" role="presentation"><a className="slds-tabs_default__link" role="tab" aria-selected="false">Reviews</a></li>
            </ul>
          </div>
          </div>
        </div>
        <footer className="slds-card__footer"><a href="#">View All</a></footer>
      </article>
      </div>
      <div className="slds-m-top_small slds-m-bottom_x-small" data-node-id="8pns9m2f">
      <button className="slds-button slds-button_neutral" onClick={() => { document.querySelector('[data-node-id=\'o755rcgs\']')?.scrollIntoView({behavior:'smooth',block:'center'}) }}>Button</button>
      </div>
      <div className="slds-size_1-of-1" data-node-id="o755rcgs">
      <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-h" className="slds-modal slds-fade-in-open">
        <div className="slds-modal__container">
          <header className="slds-modal__header"><h1 id="modal-h" className="slds-modal__title slds-hyphenate">New Opportunity</h1></header>
          <div className="slds-modal__content slds-p-around_medium">Fill in the required fields below.</div>
          <footer className="slds-modal__footer"><button className="slds-button slds-button_neutral">Cancel</button><button className="slds-button slds-button_brand">Save</button></footer>
        </div>
      </section>
      </div>
    </main>
  );
}

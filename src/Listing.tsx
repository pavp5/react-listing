import ListItem from './ListItem';

export default function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map(item => {
        if (item.state == 'removed') {
          return null;
        }
        return (
          <ListItem
            listing_id={item.listing_id}
            url={item.url}
            MainImage={item.MainImage.url_570xN}
            title={item.title}
            currency_code={item.currency_code}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
}
import ListItem from './ListItem';

type ImageType = {
  url_570xN: string,
}

type ItemType = {
  listing_id: number,
  url: string,
  MainImage?: ImageType,
  title: string,
  currency_code: string,
  price: string,
  quantity: number,
}

export default function Listing({ items } ) {
  return (
    <div className="item-list">
      {items.filter((item : ItemType) => item.hasOwnProperty('MainImage')).map((item : ItemType) => {
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
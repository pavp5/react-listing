export default function ListItem(props) {
  const { listing_id, url, MainImage, title, currency_code, price, quantity } = props;

  let titleTruncated: string = title;
  if (titleTruncated.length > 50) {
    titleTruncated = `${titleTruncated.slice(0, 50)}...`;
  }

  let quantityClassName: string = 'level-high';
  if (quantity <= 10) {
    quantityClassName = 'level-low';
  } else if (quantity <= 20) {
    quantityClassName = 'level-medium';
  };

  let formattedPrice: string = `${price} ${currency_code}`;
  if (currency_code == 'USD') {
    formattedPrice = `$${price}`;
  } else if (currency_code === 'EUR') {
    formattedPrice = `€${price}`;
  };

  return (
    <div key={listing_id} className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{titleTruncated}</p>
        <p className="item-price">{formattedPrice}</p>
        <p className={quantityClassName}>{quantity}</p>
      </div>
    </div>
  );
}

import { ICardProps } from './card.interfaces';
import './card.styles.css';

const Card = ({ imgSrc, title, subtitle }: ICardProps) => {
  return (
    <div className="card">
      <div className="card__main">
        <div className="card__image">
          <img src={imgSrc} />
        </div>
        <div className="card__body">
          <div className="card__title">{title}</div>
          <div className="card__subtitle">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
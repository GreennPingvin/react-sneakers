export interface Sneaker {
  id: number;
  title: string;
  price: number;
  imageSrc: string;
  isInCart?: boolean;
  isInFavorites?: boolean;
}

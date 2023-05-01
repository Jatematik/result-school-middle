import { COMMENTS_URL, posts } from './data';
import { NormalizeData, PostProps, PostType, TotalPriceProps } from './types';

const totalPrice = ({
  price,
  discount = 0,
  isInstallment,
  months = 1,
}: TotalPriceProps): number => {
  const withDiscount = price - price * (discount / 100);

  if (isInstallment) {
    return withDiscount / months!;
  }

  return withDiscount;
};

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });

const normalizeData = (unnormalizedData: PostProps[]): NormalizeData => {
  const data: Partial<NormalizeData> = {
    byId: {},
    allIds: [],
  };

  unnormalizedData.forEach((item) => {
    data.byId![item.id] = item;
    data.allIds!.push(item.id);
  });

  return data as NormalizeData;
};

console.log(normalizeData(posts));

const getData = <T>(url: string): Promise<T> => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

getData<PostType[]>(COMMENTS_URL)
  .then((data) => {
    data.forEach((post) => {
      console.log(`ID: ${post.id}, Email: ${post.email}, name: ${post.name}`);
    });
  })
  .catch((err) => {
    throw new Error(err);
  });

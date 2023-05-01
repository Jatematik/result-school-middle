interface TotalPriceProps {
  price: number;
  discount?: number;
  isInstallment: boolean;
  months?: number;
}

interface PostProps {
  id: string;
  title: string;
  body: string;
}

interface NormalizeData {
  byId: {
    [key: string]: PostProps;
  };
  allIds: string[];
}

interface PostType extends Pick<PostProps, 'id' | 'body'> {
  postId: number;
  name: string;
  email: string;
}

export { TotalPriceProps, PostProps, NormalizeData, PostType };

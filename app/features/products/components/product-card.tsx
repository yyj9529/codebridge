
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from 'lucide-react';
import { Link } from 'react-router';

interface ProductCardProps {
  productId: string;
  productName: string;
  productDescription: string;
  commentsCount: number;
  viewsCount: number;
  upvotesCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  productName,
  productDescription,
  commentsCount,
  viewsCount,
  upvotesCount,
}) => {
  return (
    <Link to={`/products/${productId}`}>
      <Card className="w-full flex-row items-center justify-between bg-transparent hover:bg-card/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">{productName}</CardTitle>
          <CardDescription className="text-muted-foreground">{productDescription}</CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircleIcon className="w-4 h-4" />
              <span className="text-sm font-medium">{commentsCount}</span>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="w-4 h-4" />
              <span className="text-sm font-medium">{viewsCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{upvotesCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard; 
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

function Card({ className, style, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col p-6', className)}
      style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e', ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}

export { Card, CardHeader, CardContent };

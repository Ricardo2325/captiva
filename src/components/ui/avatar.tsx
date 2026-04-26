import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

function Avatar({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('relative rounded-full overflow-hidden flex-shrink-0', className)}
      {...props}
    >
      {children}
    </div>
  );
}

function AvatarFallback({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('w-full h-full flex items-center justify-center font-display font-bold text-sm', className)}
      style={{ backgroundColor: '#1e1e2e', color: '#4f46e5' }}
      {...props}
    >
      {children}
    </div>
  );
}

export { Avatar, AvatarFallback };

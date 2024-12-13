  import * as React from 'react';
  import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
  import { Check } from 'lucide-react';
  import { cn } from '@/lib/utils';

  const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
      label?: string;
      labelClassName?: string;
    }
  >(({ className, label, labelClassName, onChange, ...props }, ref) => (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white',
          className
        )}
        onCheckedChange={(checked) => onChange && onChange(checked as any)}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center')}>
          <Check className="h-3 w-3" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <label
          htmlFor={props.id}
          className={cn(
            'text-sm text-gray-600 select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            labelClassName
          )}
        >
          {label}
        </label>
      )}
    </div>
  ));
  Checkbox.displayName = 'Checkbox';

  export default Checkbox;
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Check3D, Star3D } from '@/components/ui/icons-3d';
import Link from 'next/link';
import { motion, Transition } from 'framer-motion';

type FREQUENCY = 'monthly' | 'yearly';
const frequencies: FREQUENCY[] = ['monthly', 'yearly'];

interface Plan {
  name: string;
  info: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: {
    text: string;
    tooltip?: string;
  }[];
  btn: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
}

interface PricingSectionProps extends React.ComponentProps<'div'> {
  plans: Plan[];
  heading: string;
  description?: string;
}

export function PricingSection({ plans, heading, description, ...props }: PricingSectionProps) {
  const [frequency, setFrequency] = React.useState<'monthly' | 'yearly'>('monthly');

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center space-y-5 p-4',
        props.className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-xl space-y-2">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-white">
          {heading}
        </h2>
        {description && (
          <p className="text-gray-400 text-center text-sm md:text-base">{description}</p>
        )}
      </div>
      <div className="flex w-full justify-center">
        <PricingFrequencyToggle
          frequency={frequency}
          onFrequencyChange={setFrequency}
          className="mb-8"
        />
      </div>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard plan={plan} key={plan.name} frequency={frequency} />
        ))}
      </div>
    </div>
  );
}

type PricingFrequencyToggleProps = React.ComponentProps<'div'> & {
  frequency: FREQUENCY;
  onFrequencyChange: React.Dispatch<React.SetStateAction<FREQUENCY>>;
};

export function PricingFrequencyToggle({
  frequency,
  onFrequencyChange,
  ...props
}: PricingFrequencyToggleProps) {
  return (
    <div
      className={cn(
        'bg-neutral-900/80 backdrop-blur-sm mx-auto flex w-fit rounded-full border border-white/10 p-1 shadow-inner shadow-black/50',
        props.className,
      )}
      {...props}
    >
      {frequencies.map((freq) => (
        <button
          key={freq}
          onClick={() => onFrequencyChange(freq)}
          className={cn(
            'relative px-6 py-2 text-sm font-medium capitalize transition-colors duration-200 z-10',
            frequency === freq ? 'text-white' : 'text-neutral-500 hover:text-neutral-300',
          )}
        >
          <span className="relative z-10">{freq}</span>
          {frequency === freq && (
            <motion.span
              layoutId="frequency"
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="bg-zinc-700/80 absolute inset-0 z-0 rounded-full border border-white/10 shadow-sm"
            />
          )}
        </button>
      ))}
    </div>
  );
}

type PricingCardProps = React.ComponentProps<'div'> & {
  plan: Plan;
  frequency?: FREQUENCY;
};

export function PricingCard({
  plan,
  className,
  frequency = frequencies[0],
  ...props
}: PricingCardProps) {
  return (
    <div
      key={plan.name}
      className={cn(
        'relative flex w-full flex-col rounded-lg border border-neutral-700 bg-neutral-800/50',
        className,
      )}
      {...props}
    >
      {plan.highlighted && (
        <BorderTrail
          style={{
            boxShadow:
              '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
          }}
          size={100}
        />
      )}
      {plan.highlighted && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit z-20">
          <p className="bg-gradient-to-r from-zinc-500/90 to-slate-500/90 border border-zinc-500/50 text-white flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-zinc-500/20 backdrop-blur-md">
            <Star3D size={12} className="text-white" />
            Most Popular
          </p>
        </div>
      )}

      <div
        className={cn(
          'bg-neutral-800/40 rounded-t-lg border-b border-neutral-700 p-4',
          plan.highlighted && 'bg-neutral-700/40',
        )}
      >
        <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
          {frequency === 'yearly' && (
            <p className="bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium">
              {Math.round(
                ((plan.price.monthly * 12 - plan.price.yearly) / plan.price.monthly / 12) * 100,
              )}
              % off
            </p>
          )}
        </div>

        <div className="text-lg font-medium text-white">{plan.name}</div>
        <p className="text-gray-400 text-sm font-normal">{plan.info}</p>
        <h3 className="mt-2 flex items-end gap-1">
          <span className="text-3xl font-bold text-white">${plan.price[frequency]}</span>
          <span className="text-muted-foreground">
            {plan.name !== 'Free' ? '/' + (frequency === 'monthly' ? 'month' : 'year') : ''}
          </span>
        </h3>
      </div>
      <div
        className={cn(
          'text-gray-400 space-y-4 px-4 py-6 text-sm',
          plan.highlighted && 'bg-neutral-800/30',
        )}
      >
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check3D size={16} />
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <p className={cn(feature.tooltip && 'cursor-pointer border-b border-dashed')}>
                    {feature.text}
                  </p>
                </TooltipTrigger>
                {feature.tooltip && (
                  <TooltipContent>
                    <p>{feature.tooltip}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
      <div
        className={cn(
          'mt-auto w-full border-t border-neutral-700 p-3',
          plan.highlighted && 'bg-neutral-700/40',
        )}
      >
        <Button className="w-full" variant={plan.highlighted ? 'default' : 'outline'} asChild>
          <Link href={plan.btn.href}>{plan.btn.text}</Link>
        </Button>
      </div>
    </div>
  );
}

type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear' as const,
  };

  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}

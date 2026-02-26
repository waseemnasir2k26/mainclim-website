"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "default" | "elevated" | "outlined" | "glass";
  hover?: boolean;
}

export function Card({
  className,
  variant = "default",
  hover = false,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white",
    elevated: "bg-white shadow-xl",
    outlined: "bg-white border border-gray-200",
    glass: "bg-white/80 backdrop-blur-lg border border-white/20",
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6",
        variants[variant],
        hover && "hover:shadow-2xl transition-shadow duration-300",
        className
      )}
      whileHover={hover ? { y: -5 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <h3 className={cn("text-xl font-bold text-gray-900", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("text-gray-600 mt-2", className)}>{children}</p>
  );
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("", className)}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mt-4 pt-4 border-t border-gray-100", className)}>{children}</div>;
}

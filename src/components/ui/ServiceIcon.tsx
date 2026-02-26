"use client";

import {
  Snowflake,
  Wind,
  Thermometer,
  Wrench,
  AlertTriangle,
  Settings,
  Building2,
  Home,
  Fan,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Snowflake,
  Wind,
  Thermometer,
  Wrench,
  AlertTriangle,
  Settings,
  Building2,
  Home,
  Fan,
  Zap,
};

interface ServiceIconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "outlined";
  className?: string;
}

export default function ServiceIcon({
  name,
  size = "md",
  variant = "default",
  className,
}: ServiceIconProps) {
  const Icon = icons[name] || Snowflake;

  const sizes = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const containerSizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
    xl: "w-24 h-24",
  };

  const variants = {
    default: "text-blue-600",
    filled: "bg-blue-600 text-white rounded-xl",
    outlined: "border-2 border-blue-600 text-blue-600 rounded-xl",
  };

  if (variant === "default") {
    return <Icon className={cn(sizes[size], variants[variant], className)} />;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        containerSizes[size],
        variants[variant],
        className
      )}
    >
      <Icon className={sizes[size]} />
    </div>
  );
}

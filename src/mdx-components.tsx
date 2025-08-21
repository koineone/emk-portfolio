import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 {...props} className={cn("mt-8 text-3xl font-semibold", props.className)} />
    ),
    h2: (props) => <h2 {...props} className={cn("mt-8 text-2xl font-semibold", props.className)} />,
    p: (props) => <p {...props} className={cn("mt-4 leading-7 text-foreground/80", props.className)} />,
    ...components,
  };
}


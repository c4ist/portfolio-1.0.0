import type { MDXComponents } from "mdx/types";

import { TextLink } from "@/components/text-link";

const components: MDXComponents = {
  a: ({ href, children }) => <TextLink href={String(href)}>{children}</TextLink>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}

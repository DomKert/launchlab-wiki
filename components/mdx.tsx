import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Badge } from './badge';
import { EventCard } from './event-card';
import { PersistentCheckbox } from './persistent-checkbox';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Badge,
    EventCard,
    PersistentCheckbox,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}

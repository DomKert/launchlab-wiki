import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Badge } from './badge';
import { EventCard } from './event-card';
import { PersistentCheckbox } from './persistent-checkbox';
import { Video } from './video';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Badge,
    EventCard,
    PersistentCheckbox,
    Video,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}

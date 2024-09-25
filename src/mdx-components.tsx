import type { MDXComponents } from 'mdx/types'
import Code from './components/code'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Code: ({ children }) => (
      <Code>{children}</Code>
    ),
    ...components,
  }
}
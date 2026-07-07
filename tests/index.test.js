import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const compileCss = () => {
  execSync('npx tailwindcss -i ./tests/input.css -o ./tests/output.css', {
    cwd: rootDir,
    stdio: 'pipe',
  })

  return readFileSync(path.join(rootDir, 'tests/output.css'), 'utf8')
}

describe('tailwindcss-inverted-radius', () => {
  let css

  beforeAll(() => {
    css = compileCss()
  })

  it('generates the base inv-rad utility', () => {
    expect(css).toContain('.inv-rad {')
    expect(css).toContain('--inv-rad-tl-size: 0')
    expect(css).toContain('mask-size: 51% 51%')
  })

  it('generates all-corner size utilities from the spacing scale', () => {
    expect(css).toContain('.inv-rad-4 {')
    expect(css).toContain('--inv-rad-tl-size: calc(4 * var(--spacing))')
    expect(css).toContain('--inv-rad-tr-size: calc(4 * var(--spacing))')
    expect(css).toContain('--inv-rad-bl-size: calc(4 * var(--spacing))')
    expect(css).toContain('--inv-rad-br-size: calc(4 * var(--spacing))')
    expect(css).toContain('mask-image:')
  })

  it('generates corner-specific utilities', () => {
    expect(css).toContain('.inv-rad-t-r-4 {')
    expect(css).toContain('--inv-rad-tr-size: calc(4 * var(--spacing))')
    expect(css).toContain('at right top')
    expect(css).toContain('.inv-rad-b-l-4 {')
    expect(css).toContain('--inv-rad-bl-size: calc(4 * var(--spacing))')
  })

  it('supports custom spacing values from @theme', () => {
    expect(css).toContain('.inv-rad-4\\.5 {')
    expect(css).toContain('--inv-rad-tl-size: var(--spacing-4_5)')
    expect(css).toContain('.inv-rad-t-r-4\\.5 {')
    expect(css).toContain('--inv-rad-tr-size: var(--spacing-4_5)')
  })
})

/**
 * Utility functions
 */

/**
 * Greets the given name
 */
export function greet(name: string): string {
  return `Hello, ${name}!`
}

/**
 * Adds two numbers
 */
export function add(a: number, b: number): number {
  return a + b
}

/**
 * Checks if a string is empty
 */
export function isEmpty(str: string): boolean {
  return str.trim().length === 0
}

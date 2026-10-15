import { expect, test, vi } from 'vitest'
import {
  installLayoutCleanup,
  type LegacyContainerLifecycle,
} from './compatibility'

test('отменяет отложенную перерисовку до штатного удаления контейнера', () => {
  const order: string[] = []
  const prototype: LegacyContainerLifecycle = {
    beforeDestroy() {
      order.push('destroy')
    },
  }
  installLayoutCleanup(prototype)
  const patched = prototype.beforeDestroy
  installLayoutCleanup(prototype)
  expect(prototype.beforeDestroy).toBe(patched)
  const cancel = vi.fn(() => order.push('cancel'))
  const container: LegacyContainerLifecycle = {
    layout: { resizeTask: { cancel } },
    beforeDestroy: prototype.beforeDestroy,
  }
  container.beforeDestroy()
  expect(order).toEqual(['cancel', 'destroy'])
  expect(cancel).toHaveBeenCalledOnce()
  expect(() => prototype.beforeDestroy()).not.toThrow()
})

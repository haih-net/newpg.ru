export interface LegacyContainerLifecycle {
  layout?: { resizeTask?: { cancel: () => void } }
  beforeDestroy: (this: LegacyContainerLifecycle) => void
}

const patched = new WeakSet<LegacyContainerLifecycle>()

export const installLayoutCleanup = (
  prototype: LegacyContainerLifecycle,
): void => {
  if (patched.has(prototype)) {
    return
  }
  const beforeDestroy = prototype.beforeDestroy
  // В ExtJS 3.0.3 ContainerLayout.destroy не отменяет отложенный resize.
  // Отменяем его до уничтожения дочерних элементов, сохраняя штатную очистку.
  prototype.beforeDestroy = function (this: LegacyContainerLifecycle): void {
    this.layout?.resizeTask?.cancel()
    beforeDestroy.call(this)
  }
  patched.add(prototype)
}

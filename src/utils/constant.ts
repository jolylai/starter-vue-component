import type { InjectionKey, Ref } from 'vue'

export const aMapInstanceKey = Symbol() as InjectionKey<Ref<AMap.Map | null>>

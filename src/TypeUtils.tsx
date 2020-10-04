export type ValueOf<T> = T[keyof T]
export type ActionProp = {
    type: string
    [props: string]: any
}

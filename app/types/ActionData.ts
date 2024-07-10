type ActionDataValues<V, E> = {
  success: boolean;
  errors?: E;
  values: V;
}

type ActionDataErrors<E> = {
  success: false;
  errors: E;
  values?: never;
}

export type ActionData<V, E> = ActionDataValues<V, E> | ActionDataErrors<E>;

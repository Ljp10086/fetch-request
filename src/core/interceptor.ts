type onFillFulled<T> = (response: T) => unknown;
type onRejected<T> = (error: T) => unknown;

type InterceptorInterface<T> = {
  onFillFulled?: onFillFulled<T>;
  onRejected?: onRejected<T>;
}

export class InterceptorManager<T> {
  constructor(public interceptors: InterceptorInterface<T>[] = []){ };

  use(onFillFulled?: onFillFulled<T>, onRejected?: onRejected<T>) {
    const interceptor: InterceptorInterface<T> = {};    
    if (onFillFulled && typeof onFillFulled === 'function') {
      interceptor.onFillFulled = onFillFulled;
    }

    if (onRejected && typeof onRejected === 'function') {
      interceptor.onRejected = onRejected;
    }

    if (Object.keys(interceptor).length !== 0) {
      this.interceptors.push(interceptor);
    }
  }
}

// https://brycedooley.com/creating-useObservable-hook/
import { useState } from "react";

import { Subject, Observable } from "rxjs";

// syntax <V,> expected so generics syntax does not colide with tsx syntax
export function useSubject<V,>(): [Observable<V>, (newValue: V) => void] {
  const [observable] = useState(new Subject<V>());

  const handleNext = (value: V) => {
    observable.next(value);
  };

  return [observable, handleNext];
}

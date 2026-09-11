---
title: TypeScript 제네릭, 이제는 무섭지 않다
description: 제네릭을 함수의 매개변수처럼 이해하기
date: 2025-12-03
---

제네릭을 처음 봤을 때는 꺾쇠괄호가 잔뜩 붙은 코드가 암호처럼 보였습니다. 그런데 **타입을 위한 매개변수**라고 생각하니 훨씬 쉬워졌어요.

## 함수와 똑같다

```ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}

const n = first([1, 2, 3]); // number | undefined
```

값을 인자로 받는 것처럼, 타입을 인자로 받는다고 보면 됩니다.

## 제약 조건 걸기

```ts
function getLength<T extends { length: number }>(value: T) {
  return value.length;
}
```

`extends`로 "최소한 이런 모양은 갖춰야 한다"는 조건을 걸 수 있어요.

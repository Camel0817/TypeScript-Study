# TypeScript-Study
타입스크립트 Study

# 📘 TypeScript 타입 정리

## 📌 기본 타입

| 타입 | 예시 | 설명 |
|------|------|------|
| `string` | `"hello"` | 문자열 |
| `number` | `42`, `3.14` | 숫자 |
| `boolean` | `true`, `false` | 불리언 |
| `null` | `null` | 명시적 null |
| `undefined` | `undefined` | 정의되지 않음 |
| `any` | `let x: any = 123;` | 아무 타입 (지양) |
| `unknown` | `let x: unknown = value;` | 안전한 any |
| `void` | `function fn(): void {}` | 반환값 없음 |
| `never` | `function error(): never { throw new Error(); }` | 절대 반환하지 않음 |

---

## 🧱 객체 타입

```ts
type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // 선택적 속성
};


- ?는 선택적 속성
- readonly로 수정 불가능하게 만들 수 있음
type Config = {
  readonly id: string;
};



🧮 배열과 튜플
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];


튜플
let user: [string, number] = ["Alice", 30];



🔀 유니언 & 교차 타입
유니언 타입 (|)
let id: string | number;


교차 타입 (&)
type A = { name: string };
type B = { age: number };
type Person = A & B; // { name: string; age: number }



🧠 타입 별칭 vs 인터페이스
타입 별칭
type Point = {
  x: number;
  y: number;
};


인터페이스
interface Point {
  x: number;
  y: number;
}


- interface는 확장 가능 (extends)
- type은 유니언, 튜플 등 더 다양한 표현 가능

🧪 리터럴 타입
let direction: "left" | "right" | "center";


- 특정 값만 허용

🧬 제네릭
function wrap<T>(value: T): T {
  return value;
}


- 타입을 매개변수화하여 재사용성 향상

🛡️ 타입 가드
function isString(value: unknown): value is string {
  return typeof value === "string";
}


- 런타임에 타입을 확인하고 좁히는 기술

🧰 유틸리티 타입
| 타입 | 설명 | 
| Partial<T> | 모든 속성을 선택적으로 만듦 | 
| Required<T> | 모든 속성을 필수로 만듦 | 
| Readonly<T> | 모든 속성을 읽기 전용으로 | 
| Pick<T, K> | 특정 속성만 선택 | 
| Omit<T, K> | 특정 속성을 제외 | 
| Record<K, T> | 키-값 객체 생성 | 
| ReturnType<T> | 함수의 반환 타입 추출 | 


type User = { name: string; age: number };
type PartialUser = Partial<User>; // { name?: string; age?: number }



🧭 타입 추론
let name = "TypeScript"; // 자동으로 string으로 추론


- 타입을 명시하지 않아도 컴파일러가 추론

🧩 타입 단언
let value = "hello" as string;


- 개발자가 타입을 확신할 때 사용 (as)

🧼 Non-null 단언
let el = document.querySelector("div")!;


- !는 null이나 undefined가 아님을 단

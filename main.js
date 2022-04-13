"use strict";
// let anyType: string | number | object = '1'
//
// anyType = 2
// anyType = []
// anyType = {}
// anyType = ''
//
// let strNumBoolType: number | string | boolean | object;
//
// strNumBoolType = ''
// strNumBoolType = 2
// strNumBoolType = {}
// strNumBoolType = []
// strNumBoolType = true
//
// let strArr = ['1', '2', true, 3, 4]
// let strArrTS: string[] = ['1', '2', '3', '4']
// let strArrTS2: Array<string> = ['1', '2', 'true', '3', '4']
//
// let numArr = [1, 2, 3, 4]
// let numArrTS: number[] = [1, 2, 3, 4]
// let numArrTS2: Array<number> = [1, 2, 3, 4]
//
// let boolArr = [1, 2, true, 3, 4]
// let boolArrTS: boolean[] = [true, false, false]
// let boolArrTS2: Array<boolean> = [true, false, false]
//
// let someArrTS: (boolean | string)[] = [true, '', false, false]
// let someArrTS2: Array<boolean | number> = [true, 2, false, false]
//
// let strongArrTS: [boolean, string, boolean, boolean] = [true, '', false, false]
//
// let strongArrTS2: [boolean, string, boolean, boolean, boolean] = [true, '', false, false, false]
//
// const nameJs: string = 'John';
//
// const age: number = 25;
//
// function getName (n: string): string {
//     return n
// }
//
// function getAge (a = 25): number {
//     return a;
// }
//
// console.log(getAge());
//
// // const nameJs2: string = 'John'
// // const ageJs2: number = 25
//
// function getNameAge (n = 'Piter',a = 25): string {
//     return n + ' ' + a;
// }
//
// console.log(getNameAge('John', 25));
// console.log(getNameAge());
//
// function consoleLog(str: string) {
//     console.log(str)
// }
//
// console.log('any string');
//
// function sum(a: number, b: number): number {
//     return a + b;
// }
//
// console.log(sum(2,2));
//
// let sum2: (a: number, b: number) => number = sum;
//
// console.log(sum(2,222));
//
// let sum3 = (a: number, b: number) => a * b;
//
// console.log(sum3(2,222));
//
// type Person = {
//     cardID?: number;
//     name: string;
//     age: number;
//     gender: string;
//     skills: string[];
//     consoleLog: () => void;
//     getSkills?: () => string[];
// }
//
// const person1: Person = {
//     name: 'Bob',
//     age: 30,
//     gender: 'male',
//     cardID: 1413421,
//     skills: ['html', 'css', 'js'],
//     consoleLog() {
//         console.log(this.name);
//     }
// }
//
// const person2: Person = {
//     name: 'John',
//     age: 30,
//     gender: 'male',
//     skills: ['html', 'css', 'js'],
//     consoleLog(): void {
//         console.log(this.name);
//     },
//     getSkills(): string[] {
//         return this.skills;
//     }
// }
//
// enum Skills {
//     HTML,
//     CSS,
//     JS,
//     TS,
//     Git
// }
//
// const skillsTS: Skills = Skills.TS
// console.log(' ~ skillsTS', skillsTS);
//
// console.log(Skills);
// console.log(Skills.HTML);
// console.log(Skills.CSS);
// console.log(Skills.JS);
// console.log(Skills.TS);
// console.log(Skills.Git);
//
// function error(msg: string): never {
//     throw new Error(msg);
// }
//
// function fail(): never {
//     throw error('Failed');
// }
//
// function loop(): never {
//     while (true) {
//         console.log('loop works')
//     }
// }
//
// let num: number | null | undefined = 1;
//
// num = null;
// num = undefined;
//
// class Person3 {
//     constructor(
//         public name: string,
//         private age: number,
//         protected gender: string,
//         private skills: string[]
//     ) { }
//
//     getName(): string {
//         return this.name
//     }
//
//     public getAge(): number {
//         return this.age
//     }
//
//     public getGender(): string {
//         return this.gender
//     }
// }
//
// const person = new Person3('John', 18, 'male', ['html', 'css', 'js'])
//
// console.log(' ~ person', person);
//
// class Developer extends Person3 {
//     date: Date;
//     constructor(name: string, age: number, gender: string) {
//         super(name, age, gender, ['html', 'css', 'js', 'ts'])
//         this.date = new Date();
//     }
// }
//
// const developer = new Developer('Ekaterina', 18, 'female')
//
// console.log(developer);
//
// abstract class Phone {
//     public year: number = 2020;
//
//     constructor(public model: string) {}
//
//     public  abstract phoneMessage(str: string): void ;
//
//     public getPhoneYear(): number {
//         return this.year
//     };
//
// }
//
// class Xiaomi extends Phone {
//     phoneMessage(str: string): void {
//         console.log(`${this.model} is a ${str}`)
//     }
// }
//
// class Huawei extends Phone {
//     phoneMessage(str: string): void {
//         console.log(`${this.model} not too ${str} :(`)
//     }
// }
//
//
// const huawei = new Huawei('Huawei P Smart Pro');
// const xiaomi = new Xiaomi('Xiaomi Note 9 Pro');
// xiaomi.phoneMessage('perfect');
// huawei.phoneMessage('perfect');
//
// interface ILength {
//     length: number
// }
//
// function getLength(item: ILength): void {
//     console.log(item.length);
// }
//
// const obj = {name: 'obj', age: 20}
// getLength('string')
// getLength([1, 2, 3, 4, 5])
// getLength({
//     name: 'Bob', length: 20
// })
// getLength({
//     name: 'John', length: 20
// })
// getLength({
//     name: 'Bob222', length: 25
// })
// getLength({
//     name: 'Bob', age: 20
// })
// getLength(obj)
//
// type NumOrStr = number | string
// type NumOrStr2 = number & string
// type NumOrStr3 = Person3 & Phone
//типы(код выше)
//
//интерфейсы
// interface IPerson {
//     name: string;
//     age: number;
//     gender: string;
//     skills? : string[];
//     greet(msg: string): void;
// }
//
// interface IGetSkills {
//     getSkills(): string[]
// }
//
// class Person implements IPerson, IGetSkills {
//     name: string = 'John';
//     age: number = 25;
//     gender: string = 'male';
//     skills: string[] = ['html', 'css', 'js'];
//     greet(msg: string) {
//         console.log(msg + ' ' + this.name)
//     }
//
//     getSkills(): string[] {
//         return this.skills;
//     }
//
// }
//
//
//     const person = new Person();
// console.log(' ~ person', person);
//
// person.greet('Hi');
//
// console.log(person.getSkills());
//
// interface Shape {
//     name: string,
//     printArea: () => void;
// }
//
// class Rectangle implements Shape {
//     name: string = 'Rectangle'
//
//     constructor(public h: number, public w: number) {
//     }
//
//     printArea () {
//         const area: number = this.h * this.w
//         console.log(`Area of ${this.name} is ${area}`)
//     }
// }
//
// class Circle implements Shape {
//     name: string = 'Circle'
//
//     constructor(public r: number) {
//     }
//
//     printArea () {
//         const area: number = Math.PI * Math.pow(this.r, 2)
//         console.log(`Area of ${this.name} is ${area}`)
//     }
// }
//
// const rect = new Rectangle(10, 20)
//
// rect.printArea()
//
// const circle = new Circle(15)
//
// circle.printArea()
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Дженерики(обобщения)
//
// function getData<MyType>(data: MyType): MyType { //<дженейнрик> + обычно пишут <T> = type
//     return data;
// }
//
// console.log(getData('string').length);
// console.log(getData(10).toString().length);
// console.log(getData(10).toFixed(2));
// console.log(getData(true).valueOf());
// console.log(getData([1, 'two', 3, 'four', 'five', 6, 7].indexOf(7)));
// console.log(getData({}).constructor);
//
// const genericGetter: <MyType>(data: MyType) => MyType = getData;
//
// console.log(genericGetter('string').length);
// console.log(genericGetter(10).toString().length);
// console.log(genericGetter(10).toFixed(2));
// console.log(genericGetter(true).valueOf());
// console.log(genericGetter([1, 'two', 3, 'four', 'five', 6, 7].indexOf(7)));
// console.log(genericGetter({}).constructor);
//
// class Multiplay<MyType extends number | string> {
//     constructor(private a: MyType, private b: MyType) {}
//
//         public getResult(): number {
//             return +this.a * +this.b
//         }
// }
//
// const m = new Multiplay<number>(4, 5);
//
// console.log(m.getResult());
//
// const mStr = new Multiplay<string>('4', '5');
//
// console.log(mStr.getResult());
//Декораторы - создают компоненты, особый вид функций
// function consoleLog(constrFn: Function) {
//     console.log(constrFn)
// }
//
// function conditionLog(flag: boolean): any {
//     console.log(flag);
//     return flag ? consoleLog : null
// }
//
// @conditionLog(true)
// class Person2 {
//     constructor(public name: string) {
//         console.log('Hello from person constructor 2')
//     }
// }
//
// @consoleLog class Person {
//     constructor(public name: string) {
//         console.log('Hello from person constructor')
//     }
// }
//Практический пример с декораторами
//
// function addGetter (constructorFn: Function) {
//     constructorFn.prototype.getInfo = function () {
//         const p = document.createElement('p');
//         p.innerHTML = `${JSON.stringify(this)}<br>
// Имя: ${this.name}<br>
// Возраст: ${this.age}<br>
// Пол: ${this.gender}<br>
// Навыки: ${this.skills}<br>
// `
//
//         document.body.appendChild(p)
//     }
// }
//
// @addGetter class Developer {
//     constructor(
//         public name: string,
//         public age: number,
//         public gender: string,
//         public skills: string[]
//     ) {}
// }
//
// const developer = new Developer('John', 25, 'male', ['html', 'css', 'js'])
//
// console.log(' ~ developer', developer);
//
// (<any>developer).getInfo();
//NameSpace пример
//
// function isEmpty(d: any): boolean {
//     return !d
// }
//
// console.log(isEmpty(''))
// console.log(isEmpty('str'))
//
// function isUndefined(d: any): boolean {
//     return typeof d === 'undefined'
// }
//
// console.log(isUndefined(''))
// console.log(isUndefined(undefined))
// console.log(isUndefined('str'))
//
//
//
//
// //спейс-нейм позволяет использвоать одинаковые
// //константы функции и тд в нашем коде
// namespace Util {
//    export const PI: number = 400
// }
// const PI: boolean = true;
//
// const EXP = Math.E
//
// console.log(PI)
// console.log(Util.PI)
//Еще пример по декораторам
// namespace Util2 {
//     function Override(label: string) {
//         return function (target: any, key: string) {
//             Object.defineProperty(target, key, {
//                 configurable: false,                       //Запретили изменения
//                 get: () => label,
//                 set: (val) => {
//                 }
//             })
//         }
//     }
//
//     class Test {
//         @Override('Hello world')
//         name: string = 'Any string'
//     }
//
//     const t = new Test()
//     console.log(t.name)
//     t.name = 'new text'
//     console.log(t.name)
// }
//Еще пример
function ReadOnly(target, key) {
    Object.defineProperty(target, key, {
        writable: true,
        configurable: false
    });
}
var Test = /** @class */ (function () {
    function Test() {
        this.name = 'Any string';
    }
    __decorate([
        ReadOnly
    ], Test.prototype, "name", void 0);
    return Test;
}());
var t = new Test();
console.log(t.name);
t.name = 'new texxxt';
console.log(t.name);

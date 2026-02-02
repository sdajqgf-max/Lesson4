/* eslint-disable @typescript-eslint/no-unused-vars */
const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей
const orderNum = (order.slice(6, 10))
const now: Date = new Date(2026,1,26,9,7);
const day = now.getDate().toString().padStart(2, "0");
const month = now.getMonth().toString().padStart(2, "0");
const year = now.getFullYear();
const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");
const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
const amount = 15.3;
const orderSum = Math.ceil(amount);
console.log(`Заказ № ${orderNum}; от ${formattedDate}; на сумму ${orderSum} рублей`)
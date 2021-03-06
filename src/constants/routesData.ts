const data = [
  { id: 1, date: "05.09.2021", title: "Мариехамн", quantity: 320, distance: 203 },
  { id: 2, date: "29.05.2021", title: "Санта-Крус-де-Тенерифе", quantity: 422, distance: 93 },
  { id: 3, date: "12.05.2021", title: "Сараево", quantity: 240, distance: 258 },
  { id: 4, date: "19.06.2021", title: "Сува", quantity: 475, distance: 859 },
  { id: 5, date: "21.02.2021", title: "Канберра", quantity: 432, distance: 142 },
  { id: 6, date: "01.09.2021", title: "Коберн-Таун", quantity: 139, distance: 146 },
  { id: 7, date: "18.02.2021", title: "Луанда", quantity: 49, distance: 178 },
  { id: 8, date: "03.04.2021", title: "Минск", quantity: 281, distance: 196 },
  { id: 9, date: "21.03.2021", title: "Гитега", quantity: 69, distance: 3 },
  { id: 10, date: "05.04.2021", title: "Вена", quantity: 350, distance: 135 },
  { id: 11, date: "07.04.2021", title: "Иерусалим", quantity: 299, distance: 680 },
  { id: 12, date: "12.06.2021", title: "Таллин", quantity: 17, distance: 356 },
  { id: 13, date: "31.08.2021", title: "Вадуц", quantity: 397, distance: 270 },
  { id: 14, date: "04.05.2021", title: "Таунджи", quantity: 329, distance: 225 },
  { id: 15, date: "18.05.2021", title: "Харгейса", quantity: 130, distance: 755 },
  { id: 16, date: "15.06.2021", title: "Порт-Луи", quantity: 108, distance: 358 },
  { id: 17, date: "04.06.2021", title: "Либревиль", quantity: 247, distance: 857 },
  { id: 18, date: "04.09.2021", title: "Сан-Марино", quantity: 24, distance: 66 },
  { id: 19, date: "16.08.2021", title: "Розо", quantity: 184, distance: 311 },
  { id: 20, date: "13.01.2021", title: "Аддис-Абеба", quantity: 425, distance: 51 },
  { id: 21, date: "08.01.2021", title: "Дакка", quantity: 58, distance: 946 },
  { id: 22, date: "08.07.2021", title: "Валлетта", quantity: 67, distance: 626 },
  { id: 23, date: "05.08.2021", title: "Южная Тарава", quantity: 428, distance: 426 },
  { id: 24, date: "11.01.2021", title: "Мехико", quantity: 103, distance: 859 },
  { id: 25, date: "17.02.2021", title: "Мапуту", quantity: 231, distance: 811 },
  { id: 26, date: "09.04.2021", title: "Берн", quantity: 198, distance: 191 },
  { id: 27, date: "24.07.2021", title: "Фуншал", quantity: 245, distance: 233 },
  { id: 28, date: "22.03.2021", title: "Сукре", quantity: 343, distance: 981 },
  { id: 29, date: "18.06.2021", title: "Дили", quantity: 104, distance: 57 },
  { id: 30, date: "09.08.2021", title: "Сент-Хельер", quantity: 429, distance: 644 },
  { id: 31, date: "28.07.2021", title: "Сан-Томе", quantity: 232, distance: 260 },
  { id: 32, date: "12.02.2021", title: "Эр-Рияд", quantity: 46, distance: 518 },
  { id: 33, date: "29.08.2021", title: "Монако", quantity: 230, distance: 854 },
  { id: 34, date: "27.01.2021", title: "Богота", quantity: 376, distance: 863 },
  { id: 35, date: "21.01.2021", title: "Париж", quantity: 292, distance: 110 },
  { id: 36, date: "16.05.2021", title: "Кишинёв", quantity: 451, distance: 915 },
  { id: 37, date: "29.03.2021", title: "Стокгольм", quantity: 349, distance: 211 },
  { id: 38, date: "28.05.2021", title: "Масеру", quantity: 381, distance: 114 },
  { id: 39, date: "01.08.2021", title: "Степанакерт", quantity: 213, distance: 634 },
  { id: 40, date: "19.02.2021", title: "Пхеньян", quantity: 443, distance: 678 },
  { id: 41, date: "25.04.2021", title: "Ашхабад", quantity: 185, distance: 534 },
  { id: 42, date: "25.06.2021", title: "Тхимпху", quantity: 304, distance: 336 },
  { id: 43, date: "23.07.2021", title: "Кайенна", quantity: 92, distance: 820 },
  { id: 44, date: "29.07.2021", title: "Кастри", quantity: 103, distance: 783 },
  { id: 45, date: "06.07.2021", title: "Тирасполь", quantity: 304, distance: 911 },
  { id: 46, date: "06.01.2021", title: "Исламабад", quantity: 497, distance: 717 },
  { id: 47, date: "02.02.2021", title: "Алжир", quantity: 161, distance: 260 },
  { id: 48, date: "25.03.2021", title: "Конакри", quantity: 296, distance: 259 },
  { id: 49, date: "09.05.2021", title: "Панама", quantity: 240, distance: 224 },
  { id: 50, date: "08.04.2021", title: "Душанбе", quantity: 14, distance: 923 },
  { id: 51, date: "06.08.2021", title: "Нукуалофа", quantity: 325, distance: 13 },
  { id: 52, date: "13.02.2021", title: "Кабул", quantity: 251, distance: 875 },
  { id: 53, date: "12.04.2021", title: "София", quantity: 34, distance: 950 },
  { id: 54, date: "15.03.2021", title: "Могадишо", quantity: 23, distance: 589 },
  { id: 55, date: "19.07.2021", title: "Порт-Вила", quantity: 165, distance: 523 },
  { id: 56, date: "30.07.2021", title: "Хагатна", quantity: 63, distance: 734 },
  { id: 57, date: "29.06.2021", title: "Подгорица", quantity: 442, distance: 796 },
  { id: 58, date: "25.08.2021", title: "Цхинвал", quantity: 181, distance: 779 },
  { id: 59, date: "12.01.2021", title: "Манила", quantity: 324, distance: 389 },
  { id: 60, date: "04.02.2021", title: "Багдад", quantity: 113, distance: 443 },
  { id: 61, date: "15.04.2021", title: "Асунсьон", quantity: 331, distance: 624 },
  { id: 62, date: "14.03.2021", title: "Джуба", quantity: 179, distance: 965 },
  { id: 63, date: "20.05.2021", title: "Улан-Батор", quantity: 129, distance: 508 },
  { id: 64, date: "04.08.2021", title: "Кингстаун", quantity: 22, distance: 690 },
  { id: 65, date: "06.05.2021", title: "Маскат", quantity: 293, distance: 110 },
  { id: 66, date: "21.06.2021", title: "Никосия", quantity: 10, distance: 893 },
  { id: 67, date: "10.05.2021", title: "Монровия", quantity: 249, distance: 279 },
  { id: 68, date: "24.05.2021", title: "Кингстон", quantity: 499, distance: 731 },
  { id: 69, date: "03.08.2021", title: "Сент-Джорджес", quantity: 476, distance: 795 },
  { id: 70, date: "14.06.2021", title: "Томбукту", quantity: 387, distance: 25 },
  { id: 71, date: "24.02.2021", title: "Ямусукро", quantity: 135, distance: 83 },
  { id: 72, date: "12.03.2021", title: "Дакар", quantity: 117, distance: 367 },
  { id: 73, date: "19.05.2021", title: "Монтевидео", quantity: 481, distance: 600 },
  { id: 74, date: "05.01.2021", title: "Бразилиа", quantity: 425, distance: 375 },
  { id: 75, date: "05.06.2021", title: "Галькайо", quantity: 260, distance: 885 },
  { id: 76, date: "05.03.2021", title: "Дамаск", quantity: 292, distance: 850 },
  { id: 77, date: "06.09.2021", title: "Род-Таун", quantity: 473, distance: 748 },
  { id: 78, date: "06.03.2021", title: "Амстердам", quantity: 322, distance: 778 },
  { id: 79, date: "27.05.2021", title: "Габороне", quantity: 4, distance: 26 },
  { id: 80, date: "21.05.2021", title: "Ереван", quantity: 64, distance: 215 },
  { id: 81, date: "28.01.2021", title: "Мадрид", quantity: 407, distance: 984 },
  { id: 82, date: "31.05.2021", title: "Любляна", quantity: 426, distance: 616 },
  { id: 83, date: "07.05.2021", title: "Эль-Кувейт", quantity: 11, distance: 44 },
  { id: 84, date: "31.03.2021", title: "Будапешт", quantity: 419, distance: 800 },
  { id: 85, date: "02.09.2021", title: "Мариго", quantity: 448, distance: 618 },
  { id: 86, date: "28.04.2021", title: "Банги", quantity: 436, distance: 12 },
  { id: 87, date: "01.04.2021", title: "Амман", quantity: 54, distance: 799 },
  { id: 88, date: "06.04.2021", title: "Тегусигальпа", quantity: 43, distance: 492 },
  { id: 89, date: "09.01.2021", title: "Москва", quantity: 127, distance: 821 },
  { id: 90, date: "21.07.2021", title: "Папеэте", quantity: 363, distance: 814 },
  { id: 91, date: "14.08.2021", title: "Андорра-ла-Велья", quantity: 238, distance: 286 },
  { id: 92, date: "15.07.2021", title: "Лондон", quantity: 191, distance: 716 },
  { id: 93, date: "11.09.2021", title: "Мата-Уту", quantity: 410, distance: 118 },
  { id: 94, date: "10.01.2021", title: "Токио", quantity: 22, distance: 76 },
  { id: 95, date: "11.05.2021", title: "Гароуэ", quantity: 231, distance: 362 },
  { id: 96, date: "16.07.2021", title: "Рейкьявик", quantity: 477, distance: 633 },
  { id: 97, date: "24.01.2021", title: "Сеул", quantity: 447, distance: 364 },
  { id: 98, date: "12.08.2021", title: "Дуглас", quantity: 306, distance: 520 },
  { id: 99, date: "27.03.2021", title: "Лиссабон", quantity: 120, distance: 11 },
  { id: 100, date: "03.09.2021", title: "Гибралтар", quantity: 47, distance: 54 },
  { id: 101, date: "13.08.2021", title: "Сеута", quantity: 461, distance: 387 },
  { id: 102, date: "17.01.2021", title: "Берлин", quantity: 219, distance: 168 },
  { id: 103, date: "22.01.2021", title: "Рим", quantity: 192, distance: 592 },
  { id: 104, date: "02.07.2021", title: "Парамарибо", quantity: 323, distance: 363 },
  { id: 105, date: "03.06.2021", title: "Донецк", quantity: 315, distance: 24 },
  { id: 106, date: "01.03.2021", title: "Бамако", quantity: 325, distance: 707 },
  { id: 107, date: "07.06.2021", title: "Бисау", quantity: 418, distance: 945 },
  { id: 108, date: "30.01.2021", title: "Буэнос-Айрес", quantity: 387, distance: 763 },
  { id: 109, date: "09.03.2021", title: "Гватемала", quantity: 258, distance: 483 },
  { id: 110, date: "22.05.2021", title: "Вильнюс", quantity: 309, distance: 671 },
  { id: 111, date: "02.06.2021", title: "Рига", quantity: 108, distance: 541 },
  { id: 112, date: "14.02.2021", title: "Катманду", quantity: 16, distance: 710 },
  { id: 113, date: "22.02.2021", title: "Яунде", quantity: 43, distance: 999 },
  { id: 114, date: "14.07.2021", title: "Бельмопан", quantity: 103, distance: 666 },
  { id: 115, date: "26.04.2021", title: "Братислава", quantity: 282, distance: 586 },
  { id: 116, date: "03.07.2021", title: "Панкан", quantity: 167, distance: 373 },
  { id: 117, date: "03.03.2021", title: "Нур-Султан", quantity: 369, distance: 241 },
  { id: 118, date: "20.06.2021", title: "Джибути", quantity: 300, distance: 455 },
  { id: 119, date: "01.02.2021", title: "Хартум", quantity: 176, distance: 997 },
  { id: 120, date: "04.01.2021", title: "Джакарта", quantity: 259, distance: 825 },
  { id: 121, date: "03.01.2021", title: "Вашингтон", quantity: 104, distance: 275 },
  { id: 122, date: "25.02.2021", title: "Шри-Джаяварденепура-Котте", quantity: 438, distance: 693 },
  { id: 123, date: "21.04.2021", title: "Бейрут", quantity: 320, distance: 842 },
  { id: 124, date: "07.08.2021", title: "Паликир", quantity: 298, distance: 778 },
  { id: 125, date: "18.08.2021", title: "Сент-Питер-Порт", quantity: 328, distance: 833 },
  { id: 126, date: "04.04.2021", title: "Абу-Даби", quantity: 95, distance: 145 },
  { id: 127, date: "05.07.2021", title: "Ададо", quantity: 45, distance: 535 },
  { id: 128, date: "17.05.2021", title: "Нуакшот", quantity: 27, distance: 460 },
  { id: 129, date: "30.06.2021", title: "Эль-Аюн", quantity: 300, distance: 135 },
  { id: 130, date: "20.02.2021", title: "Антананариву", quantity: 91, distance: 596 },
  { id: 131, date: "27.07.2021", title: "Апиа", quantity: 476, distance: 668 },
  { id: 132, date: "02.08.2021", title: "Ораньестад", quantity: 102, distance: 84 },
  { id: 133, date: "26.05.2021", title: "Виндхук", quantity: 430, distance: 276 },
  { id: 134, date: "20.01.2021", title: "Бангкок", quantity: 182, distance: 789 },
  { id: 135, date: "23.06.2021", title: "Морони", quantity: 455, distance: 532 },
  { id: 136, date: "22.07.2021", title: "Понта-Делгада", quantity: 329, distance: 620 },
  { id: 137, date: "17.03.2021", title: "Брюссель", quantity: 119, distance: 451 },
  { id: 138, date: "01.07.2021", title: "Люксембург", quantity: 188, distance: 363 },
  { id: 139, date: "09.07.2021", title: "Борама", quantity: 113, distance: 934 },
  { id: 140, date: "11.04.2021", title: "Гонконг", quantity: 279, distance: 329 },
  { id: 141, date: "24.03.2021", title: "Афины", quantity: 416, distance: 873 },
  { id: 142, date: "16.03.2021", title: "Кигали", quantity: 363, distance: 412 },
  { id: 143, date: "02.04.2021", title: "Баку", quantity: 60, distance: 790 },
  { id: 144, date: "11.06.2021", title: "Порт-оф-Спейн", quantity: 25, distance: 253 },
  { id: 145, date: "04.03.2021", title: "Лилонгве", quantity: 214, distance: 334 },
  { id: 146, date: "14.05.2021", title: "Музаффарабад", quantity: 8, distance: 14 },
  { id: 147, date: "31.07.2021", title: "Виллемстад", quantity: 473, distance: 94 },
  { id: 148, date: "28.02.2021", title: "Уагадугу", quantity: 321, distance: 776 },
  { id: 149, date: "20.08.2021", title: "Джорджтаун", quantity: 312, distance: 720 },
  { id: 150, date: "22.06.2021", title: "Сен-Дени", quantity: 344, distance: 995 },
  { id: 151, date: "16.02.2021", title: "Сана", quantity: 9, distance: 869 },
  { id: 152, date: "21.08.2021", title: "Нуук", quantity: 100, distance: 408 },
  { id: 153, date: "07.03.2021", title: "Лусака", quantity: 480, distance: 74 },
  { id: 154, date: "30.03.2021", title: "Белград", quantity: 491, distance: 46 },
  { id: 155, date: "13.03.2021", title: "Нджамена", quantity: 431, distance: 99 },
  { id: 156, date: "25.05.2021", title: "Доха", quantity: 101, distance: 243 },
  { id: 157, date: "07.09.2021", title: "Нгерулмуд", quantity: 261, distance: 534 },
  { id: 158, date: "13.06.2021", title: "Кисмайо", quantity: 406, distance: 75 },
  { id: 159, date: "27.06.2021", title: "Макао", quantity: 384, distance: 224 },
  { id: 160, date: "28.08.2021", title: "Филипсбург", quantity: 392, distance: 313 },
  { id: 161, date: "17.06.2021", title: "Малабо", quantity: 375, distance: 337 },
  { id: 162, date: "29.01.2021", title: "Найроби", quantity: 447, distance: 836 },
  { id: 163, date: "04.07.2021", title: "Прая", quantity: 76, distance: 655 },
  { id: 164, date: "19.04.2021", title: "Триполи", quantity: 130, distance: 781 },
  { id: 165, date: "31.01.2021", title: "Киев", quantity: 131, distance: 67 },
  { id: 166, date: "06.02.2021", title: "Оттава", quantity: 166, distance: 699 },
  { id: 167, date: "11.07.2021", title: "Бас-Тер", quantity: 459, distance: 524 },
  { id: 168, date: "26.01.2021", title: "Додома", quantity: 485, distance: 746 },
  { id: 169, date: "01.06.2021", title: "Банжул", quantity: 133, distance: 394 },
  { id: 170, date: "18.03.2021", title: "Гавана", quantity: 155, distance: 135 },
  { id: 171, date: "17.08.2021", title: "Мелилья", quantity: 300, distance: 235 },
  { id: 172, date: "22.08.2021", title: "Паго-Паго", quantity: 195, distance: 573 },
  { id: 173, date: "24.06.2021", title: "Вана", quantity: 476, distance: 72 },
  { id: 174, date: "29.04.2021", title: "Осло", quantity: 379, distance: 931 },
  { id: 175, date: "08.02.2021", title: "Ташкент", quantity: 442, distance: 582 },
  { id: 176, date: "17.07.2021", title: "Никосия", quantity: 231, distance: 204 },
  { id: 177, date: "06.06.2021", title: "Приштина", quantity: 95, distance: 503 },
  { id: 178, date: "18.07.2021", title: "Бриджтаун", quantity: 385, distance: 194 },
  { id: 179, date: "23.03.2021", title: "Порт-о-Пренс", quantity: 247, distance: 18 },
  { id: 180, date: "26.03.2021", title: "Прага", quantity: 479, distance: 76 },
  { id: 181, date: "13.04.2021", title: "Ломе", quantity: 197, distance: 623 },
  { id: 182, date: "23.08.2021", title: "Маджуро", quantity: 189, distance: 206 },
  { id: 183, date: "07.01.2021", title: "Абуджа", quantity: 388, distance: 368 },
  { id: 184, date: "10.08.2021", title: "Сент-Джонс", quantity: 471, distance: 367 },
  { id: 185, date: "27.08.2021", title: "Торсхавн", quantity: 407, distance: 294 },
  { id: 186, date: "11.03.2021", title: "Пномпень", quantity: 117, distance: 935 },
  { id: 187, date: "02.01.2021", title: "Нью-Дели", quantity: 417, distance: 868 },
  { id: 188, date: "15.01.2021", title: "Каир", quantity: 256, distance: 370 },
  { id: 189, date: "18.04.2021", title: "Манагуа", quantity: 89, distance: 382 },
  { id: 190, date: "22.04.2021", title: "Копенгаген", quantity: 128, distance: 268 },
  { id: 191, date: "20.07.2021", title: "Нумеа", quantity: 167, distance: 679 },
  { id: 192, date: "09.06.2021", title: "Манама", quantity: 74, distance: 270 },
  { id: 193, date: "07.07.2021", title: "Бандар-Сери-Бегаван", quantity: 213, distance: 648 },
  { id: 194, date: "14.04.2021", title: "Фритаун", quantity: 399, distance: 631 },
  { id: 195, date: "08.05.2021", title: "Загреб", quantity: 343, distance: 449 },
  { id: 196, date: "24.04.2021", title: "Хельсинки", quantity: 368, distance: 222 },
  { id: 197, date: "26.06.2021", title: "Джорджтаун", quantity: 9, distance: 772 },
  { id: 198, date: "16.06.2021", title: "Луганск", quantity: 357, distance: 797 },
  { id: 199, date: "17.04.2021", title: "Сан-Сальвадор", quantity: 131, distance: 379 },
  { id: 200, date: "23.02.2021", title: "Тайбэй", quantity: 435, distance: 596 },
  { id: 201, date: "03.02.2021", title: "Варшава", quantity: 337, distance: 742 },
  { id: 202, date: "10.02.2021", title: "Лима", quantity: 499, distance: 46 },
  { id: 203, date: "23.01.2021", title: "Претория", quantity: 207, distance: 241 },
  { id: 204, date: "14.01.2021", title: "Ханой", quantity: 44, distance: 748 },
  { id: 205, date: "09.09.2021", title: "Аваруа", quantity: 485, distance: 658 },
  { id: 206, date: "08.03.2021", title: "Кито", quantity: 499, distance: 303 },
  { id: 207, date: "25.01.2021", title: "Нейпьидо", quantity: 28, distance: 420 },
  { id: 208, date: "15.02.2021", title: "Аккра", quantity: 199, distance: 563 },
  { id: 209, date: "10.06.2021", title: "Гонолулу", quantity: 76, distance: 598 },
  { id: 210, date: "18.01.2021", title: "Тегеран", quantity: 477, distance: 49 },
  { id: 211, date: "20.03.2021", title: "Тунис", quantity: 461, distance: 378 },
  { id: 212, date: "19.01.2021", title: "Анкара", quantity: 92, distance: 620 },
  { id: 213, date: "30.05.2021", title: "Скопье", quantity: 283, distance: 351 },
  { id: 214, date: "07.02.2021", title: "Рабат", quantity: 51, distance: 678 },
  { id: 215, date: "26.07.2021", title: "Мамудзу", quantity: 493, distance: 800 },
  { id: 216, date: "15.08.2021", title: "Доблей", quantity: 437, distance: 501 },
  { id: 217, date: "10.07.2021", title: "Мале", quantity: 489, distance: 690 },
  { id: 218, date: "09.02.2021", title: "Куала-Лумпур", quantity: 429, distance: 101 },
  { id: 219, date: "20.04.2021", title: "Бишкек", quantity: 295, distance: 303 },
  { id: 220, date: "30.08.2021", title: "Эль-Кунейтра", quantity: 89, distance: 120 },
  { id: 221, date: "25.07.2021", title: "Сухум", quantity: 42, distance: 685 },
  { id: 222, date: "23.05.2021", title: "Тирана", quantity: 222, distance: 692 },
  { id: 223, date: "08.08.2021", title: "Шарлотта-Амалия", quantity: 74, distance: 13 },
  { id: 224, date: "03.05.2021", title: "Веллингтон", quantity: 462, distance: 935 },
  { id: 225, date: "13.07.2021", title: "Фор-де-Франс", quantity: 453, distance: 165 },
  { id: 226, date: "05.02.2021", title: "Кампала", quantity: 362, distance: 710 },
  { id: 227, date: "12.07.2021", title: "Нассау", quantity: 347, distance: 745 },
  { id: 228, date: "08.06.2021", title: "Мбабане", quantity: 286, distance: 419 },
  { id: 229, date: "19.03.2021", title: "Порто-Ново", quantity: 195, distance: 117 },
  { id: 230, date: "05.05.2021", title: "Дублин", quantity: 153, distance: 916 },
  { id: 231, date: "10.09.2021", title: "Кралендейк", quantity: 99, distance: 831 },
  { id: 232, date: "23.04.2021", title: "Сингапур", quantity: 288, distance: 88 },
  { id: 233, date: "28.06.2021", title: "Хониара", quantity: 243, distance: 716 },
  { id: 234, date: "11.02.2021", title: "Каракас", quantity: 149, distance: 684 },
  { id: 235, date: "01.01.2021", title: "Пекин", quantity: 221, distance: 704 },
  { id: 236, date: "16.04.2021", title: "Вьентьян", quantity: 343, distance: 460 },
  { id: 237, date: "30.04.2021", title: "Сан-Хосе", quantity: 368, distance: 906 },
  { id: 238, date: "11.08.2021", title: "Виктория", quantity: 448, distance: 498 },
  { id: 239, date: "13.05.2021", title: "Тбилиси", quantity: 76, distance: 159 },
  { id: 240, date: "10.03.2021", title: "Хараре", quantity: 364, distance: 828 },
  { id: 241, date: "08.09.2021", title: "Валли", quantity: 262, distance: 848 },
  { id: 242, date: "26.02.2021", title: "Ниамей", quantity: 388, distance: 311 },
  { id: 243, date: "28.03.2021", title: "Санто-Доминго", quantity: 291, distance: 172 },
  { id: 244, date: "26.08.2021", title: "Бастер", quantity: 220, distance: 159 },
  { id: 245, date: "24.08.2021", title: "Сайпан", quantity: 45, distance: 389 },
  { id: 246, date: "19.08.2021", title: "Гамильтон", quantity: 113, distance: 423 },
  { id: 247, date: "27.02.2021", title: "Бухарест", quantity: 38, distance: 742 },
  { id: 248, date: "27.04.2021", title: "Асмэра", quantity: 363, distance: 364 },
  { id: 249, date: "01.05.2021", title: "Иерусалим (Рамалла)", quantity: 167, distance: 117 },
  { id: 250, date: "02.05.2021", title: "Браззавиль", quantity: 138, distance: 910 },
  { id: 251, date: "02.03.2021", title: "Сантьяго", quantity: 13, distance: 161 },
  { id: 252, date: "16.01.2021", title: "Киншаса", quantity: 355, distance: 945 },
  { id: 253, date: "10.04.2021", title: "Порт-Морсби", quantity: 90, distance: 382 },
  { id: 254, date: "15.05.2021", title: "Сан-Хуан", quantity: 138, distance: 288 },
];

export { data }
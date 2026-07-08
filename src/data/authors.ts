export interface Author {

    id: string;

    name: string;

    title: string;

    image: string;

    bio: string;

    profileUrl: string;

}

export const authors: Record<string, Author> = {

    farshid: {

        id: "farshid",

        name: "دکتر فرشید فرداد",

        title: "متخصص هماتولوژی، انکولوژی و پیوند مغز استخوان",

        image: "/images/authors/farshid.webp",

        bio:
            "متخصص بیماری‌های خون و سرطان با بیش از ۲۰ سال سابقه طبابت و تجربه گسترده در تشخیص و درمان انواع سرطان‌ها، بدخیمی‌های خونی و بیماری‌های خوش‌خیم هماتولوژی.",

        profileUrl: "/about"

    },

    nafiseh: {

        id: "nafiseh",

        name: "دکتر نفیسه انصارینژاد",

        title: "متخصص هماتولوژی و انکولوژی",

        image: "/images/authors/nafiseh.webp",

        bio:
            "متخصص هماتولوژی و انکولوژی با تمرکز بر درمان سرطان‌های شایع، مراقبت حمایتی و آموزش بیماران.",

        profileUrl: "/about"

    }

};
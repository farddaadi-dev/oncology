export type AuthorId = "farshid" | "nafiseh";

export interface Author {

    id: AuthorId;

    name: string;

    title: string;

    image: string;

    bio: string;

    profileUrl: string;

    credentials:string[];

}

export const authors: Record<AuthorId, Author> = {

    farshid: {

        id: "farshid",

        name: "دکتر فرشید فرداد",

        title: "فوق تخصص هماتولوژی، انکولوژی و پیوند مغز استخوان",

        image: "/images/authors/farshid.webp",

        bio:
            "متخصص بیماری‌های خون و سرطان با بیش از ۲۰ سال سابقه طبابت و تجربه گسترده در تشخیص و درمان انواع سرطان‌ها، بدخیمی‌های خونی و بیماری‌های خوش‌خیم هماتولوژی.",

        profileUrl: "/about",

        credentials:[

            "فوق تخصص هماتولوژی و انکولوژی",
        
            "دارای بورد فوق تخصصی",
        
            "بیش از ۲۰ سال سابقه طبابت"
        
        ]

    },

    nafiseh: {

        id: "nafiseh",

        name: "دکتر نفیسه انصاری‌نژاد",

        title: "فوق تخصص هماتولوژی و انکولوژی",

        image: "/images/authors/nafiseh.webp",

        bio:
            "متخصص هماتولوژی و انکولوژی با تمرکز بر درمان سرطان‌های شایع، مراقبت حمایتی و آموزش بیماران.",

        profileUrl: "/about",

        credentials:[

            "فوق تخصص هماتولوژی و انکولوژی",
        
            "دارای بورد فوق تخصصی",
        
            "بیش از ۲۰ سال سابقه طبابت"
        
        ]

    }

};
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown?: boolean;
    class_name?: string;
    sub_menus?: {
        title: string;
        link: string;
    }[];
    menu_column?: {
        id: number;
        mega_title: string;
        mega_menus: {
            title: string;
            link: string;
        }[];
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
        class_name: ""
    },
    {
        id: 2,
        title: "Listing",
        link: "/listing_01",
        has_dropdown: true,
        class_name: "",
        sub_menus: [
            { title: "Listing 01", link: "/listing_01" },
            { title: "Listing 02", link: "/listing_02" },
            { title: "Listing 03", link: "/listing_03" },
            { title: "Listing 04", link: "/listing_04" },
            { title: "Listing 05", link: "/listing_05" },
            { title: "Listing 06", link: "/listing_06" },
            { title: "Listing 07", link: "/listing_07" },
            { title: "Listing 08", link: "/listing_08" },
            { title: "Listing Details 01", link: "/listing_details_01" },
            { title: "Listing Details 02", link: "/listing_details_02" },
        ]
    },
    {
        id: 3,
        title: "Property",
        link: "#",
        has_dropdown: true,
        class_name: "mega-dropdown",
        menu_column: [
            {
                id: 1,
                mega_title: "Buy Property",
                mega_menus: [
                    { title: "Buy Apartments", link: "/listing_01" },
                    { title: "Buy Condos", link: "/listing_02" },
                    { title: "Buy Villas", link: "/listing_03" },
                    { title: "Buy Houses", link: "/listing_04" },
                ]
            },
            {
                id: 2,
                mega_title: "Rent Property",
                mega_menus: [
                    { title: "Rent Houses", link: "/listing_05" },
                    { title: "Rent Industrial", link: "/listing_06" },
                    { title: "Rent Office", link: "/listing_07" },
                    { title: "Rent Commercial", link: "/listing_08" },
                ]
            },
            {
                id: 3,
                mega_title: "Sell Property",
                mega_menus: [
                    { title: "Sell Apartments", link: "/listing_01" },
                    { title: "Sell Condos", link: "/listing_02" },
                    { title: "Sell Villas", link: "/listing_03" },
                    { title: "Sell Houses", link: "/listing_04" },
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Blog",
        link: "/blog_01",
        has_dropdown: true,
        class_name: "",
        sub_menus: [
            { title: "Blog Grid", link: "/blog_01" },
            { title: "Blog List", link: "/blog_02" },
            { title: "Blog Details", link: "/blog_details" },
        ]
    },
    {
        id: 5,
        title: "Pages",
        link: "#",
        has_dropdown: true,
        class_name: "",
        sub_menus: [
            { title: "About Us 01", link: "/about_us_01" },
            { title: "About Us 02", link: "/about_us_02" },
            { title: "Pricing 01", link: "/pricing_01" },
            { title: "Pricing 02", link: "/pricing_02" },
            { title: "Contact", link: "/contact" },
            { title: "FAQ", link: "/faq" },
        ]
    }
];

export default menu_data;

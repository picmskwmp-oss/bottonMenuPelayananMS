(function () {
    "use strict";

    /* =========================================================
       MAUSLOT FLOATING SIDE MENU
       FULL JAVASCRIPT VERSION
       MODEL MENU SEPERTI GAMBAR REFERENSI
       WARNA BIRU VIP + TEKS PUTIH
       ========================================================= */

    /* =========================================================
       CEGAH SCRIPT DOUBLE
       ========================================================= */
    if (window.__MAUSLOT_SIDE_MENU_JS_ACTIVE__) {
        return;
    }

    window.__MAUSLOT_SIDE_MENU_JS_ACTIVE__ = true;


    /* =========================================================
       CONFIG
       ========================================================= */
    const CONFIG = {

        /* ================= POSISI DESKTOP ================= */
        desktop: {
            left: "8px",
            bottom: "200px",

            menuWidth: "202px",
            triggerWidth: "44px",
            triggerHeight: "124px",

            itemHeight: "45px",
            gap: "7px"
        },

        /* ================= POSISI MOBILE ================= */
        mobile: {
            left: "7px",
            bottom: "188px",

            menuWidth: "194px",
            triggerWidth: "42px",
            triggerHeight: "120px",

            itemHeight: "44px",
            gap: "6px"
        },

        /* ================= WARNA ================= */
        colors: {

            main: "#0756d9",
            light: "#1678ff",
            dark: "#001d63",

            border: "#4b8cff",

            text: "#ffffff"
        },

        /* =====================================================
           MENU
           LINK + ICON TETAP DARI SCRIPT LAMA
           ===================================================== */
        items: [

            {
                text: "WhatsApp",
                link: "https://urlmsshorten.com/whatsapp-official",
                icon: "http://plcl.me/images/MkruR.gif"
            },

            {
                text: "Telegram",
                link: "https://urlmsshorten.com/telegram-official",
                icon: "https://image2url.com/r2/default/gifs/1770700610847-5608a590-8121-4edc-8629-e5a2e5294207.gif"
            },

            {
                text: "RTP LIVE",
                link: "https://urlmsshorten.com/live-rtp-gacor",
                icon: "https://www.image2url.com/r2/default/gifs/1779590073577-59a312e0-9a78-49b4-a590-493585b5feab.gif"
            },

            {
                text: "Bukti Jackpot",
                link: "https://urlmsshorten.com/bukti-jpmauslot",
                icon: "https://image2url.com/r2/default/gifs/1770700518956-636a4e13-6041-427e-828b-9e13b67e3bc1.gif"
            },

            {
                text: "Pusat Pengaduan",
                link: "https://urlmsshorten.com/pengaduanmemberloveabelms",
                icon: "https://image2url.com/r2/default/gifs/1770700716221-ddab22a6-7d7e-47ff-a157-06c0354f1cb8.gif"
            },

            {
                text: "MauSlot Score",
                link: "https://scoresgoal.com",
                icon: "https://i.postimg.cc/SxZKN7x6/ec078baa-db59-4369-af9c-5bf16440c99d.png"
            }

        ]

    };


    /* =========================================================
       HAPUS VERSI LAMA JIKA ADA
       ========================================================= */

    const oldMenu =
        document.getElementById("mauslot-side-menu");

    if (oldMenu) {
        oldMenu.remove();
    }


    const oldStyle =
        document.getElementById("mauslot-side-menu-js-style");

    if (oldStyle) {
        oldStyle.remove();
    }


    /* =========================================================
       FONT
       ========================================================= */

    const fontLink =
        document.createElement("link");

    fontLink.rel = "stylesheet";

    fontLink.href =
        "https://fonts.googleapis.com/css2?family=Raleway:wght@700;800;900&display=swap";

    document.head.appendChild(fontLink);


    /* =========================================================
       CSS INJECT
       ========================================================= */

    const style =
        document.createElement("style");

    style.id =
        "mauslot-side-menu-js-style";


    style.textContent = `

/* =========================================================
   MAUSLOT FLOATING MENU
   ========================================================= */

#mauslot-side-menu,
#mauslot-side-menu *,
#mauslot-side-menu *::before,
#mauslot-side-menu *::after{
    box-sizing:border-box !important;
}


/* =========================================================
   WRAPPER
   ========================================================= */

#mauslot-side-menu{

    position:fixed !important;

    left:${CONFIG.desktop.left} !important;
    bottom:${CONFIG.desktop.bottom} !important;

    width:auto !important;
    height:auto !important;

    display:flex !important;

    align-items:flex-end !important;

    margin:0 !important;
    padding:0 !important;

    z-index:2147483600 !important;

    pointer-events:none !important;

    font-family:
        "Raleway",
        Arial,
        sans-serif !important;
}


/* =========================================================
   TOMBOL MENU VERTIKAL
   ========================================================= */

#mauslot-side-menu .ms-menu-trigger{

    position:relative !important;

    width:${CONFIG.desktop.triggerWidth} !important;
    height:${CONFIG.desktop.triggerHeight} !important;

    flex:
        0
        0
        ${CONFIG.desktop.triggerWidth} !important;

    display:flex !important;

    align-items:center !important;

    justify-content:center !important;

    margin:0 !important;
    padding:0 !important;

    pointer-events:auto !important;

    cursor:pointer !important;

    border:
        2px
        solid
        ${CONFIG.colors.border} !important;

    border-radius:
        0
        11px
        11px
        0 !important;

    background:
        linear-gradient(
            180deg,

            #001743 0%,

            #003487 25%,

            ${CONFIG.colors.main} 48%,

            #00379d 73%,

            #001642 100%
        ) !important;

    box-shadow:

        0 0 4px
        rgba(0,102,255,.95),

        0 0 12px
        rgba(0,72,255,.70),

        inset 0 0 12px
        rgba(255,255,255,.10) !important;

    color:
        ${CONFIG.colors.text} !important;

    transition:
        filter .25s ease,
        box-shadow .25s ease,
        transform .25s ease !important;

    user-select:none !important;

    -webkit-user-select:none !important;

    -webkit-tap-highlight-color:
        transparent !important;

    z-index:1003 !important;
}


/* HOVER */

#mauslot-side-menu .ms-menu-trigger:hover{

    filter:
        brightness(1.10) !important;

    box-shadow:

        0 0 6px
        rgba(0,115,255,1),

        0 0 17px
        rgba(0,75,255,.85),

        inset 0 0 14px
        rgba(255,255,255,.13) !important;
}


/* =========================================================
   TULISAN MENU
   ========================================================= */

#mauslot-side-menu .ms-menu-trigger-inner{

    display:flex !important;

    flex-direction:column !important;

    align-items:center !important;

    justify-content:center !important;

    gap:0 !important;

    color:#ffffff !important;

    font-family:
        "Raleway",
        Arial,
        sans-serif !important;

    font-size:15px !important;

    font-weight:900 !important;

    line-height:16px !important;

    letter-spacing:0 !important;

    text-shadow:

        0 1px 2px
        rgba(0,0,0,.95),

        0 0 5px
        rgba(255,255,255,.30) !important;

    pointer-events:none !important;
}


#mauslot-side-menu .ms-menu-trigger-inner b{

    display:block !important;

    margin:0 !important;
    padding:0 !important;

    font-size:inherit !important;

    font-weight:900 !important;

    color:#ffffff !important;
}


/* =========================================================
   CONTAINER LIST
   ========================================================= */

#mauslot-side-menu .ms-menu-list{

    position:absolute !important;

    left:49px !important;

    bottom:-68px !important;

    width:${CONFIG.desktop.menuWidth} !important;

    display:flex !important;

    flex-direction:column !important;

    gap:${CONFIG.desktop.gap} !important;

    margin:0 !important;
    padding:0 !important;

    list-style:none !important;

    opacity:0 !important;

    visibility:hidden !important;

    pointer-events:none !important;

    transform:
        translateX(-20px)
        scale(.95) !important;

    transform-origin:
        left center !important;

    transition:

        opacity .22s ease,

        transform
        .30s
        cubic-bezier(.2,.8,.2,1),

        visibility .22s ease !important;

    z-index:1002 !important;
}


/* =========================================================
   LIST TERBUKA
   ========================================================= */

#mauslot-side-menu.ms-open .ms-menu-list{

    opacity:1 !important;

    visibility:visible !important;

    pointer-events:auto !important;

    transform:
        translateX(0)
        scale(1) !important;
}


/* =========================================================
   ITEM
   ========================================================= */

#mauslot-side-menu .ms-menu-item{

    position:relative !important;

    display:block !important;

    width:100% !important;

    margin:0 !important;
    padding:0 !important;

    list-style:none !important;

    opacity:0 !important;

    transform:
        translateX(-14px) !important;

    transition:

        opacity .22s ease,

        transform .28s ease !important;
}


#mauslot-side-menu.ms-open .ms-menu-item{

    opacity:1 !important;

    transform:
        translateX(0) !important;
}


/* ANIMASI BERTAHAP */

#mauslot-side-menu.ms-open
.ms-menu-item:nth-child(1){

    transition-delay:.02s !important;
}

#mauslot-side-menu.ms-open
.ms-menu-item:nth-child(2){

    transition-delay:.05s !important;
}

#mauslot-side-menu.ms-open
.ms-menu-item:nth-child(3){

    transition-delay:.08s !important;
}

#mauslot-side-menu.ms-open
.ms-menu-item:nth-child(4){

    transition-delay:.11s !important;
}

#mauslot-side-menu.ms-open
.ms-menu-item:nth-child(5){

    transition-delay:.14s !important;
}

#mauslot-side-menu.ms-open
.ms-menu-item:nth-child(6){

    transition-delay:.17s !important;
}


/* =========================================================
   BUTTON MENU
   ========================================================= */

#mauslot-side-menu .ms-menu-link{

    position:relative !important;

    display:flex !important;

    align-items:center !important;

    width:100% !important;

    height:${CONFIG.desktop.itemHeight} !important;

    margin:0 !important;

    padding:
        4px
        30px
        4px
        6px !important;

    overflow:hidden !important;

    text-decoration:none !important;

    color:#ffffff !important;

    border:

        1.5px
        solid
        ${CONFIG.colors.border} !important;

    border-radius:
        9px !important;

    background:

        linear-gradient(
            100deg,

            #00123d 0%,

            #02337f 25%,

            ${CONFIG.colors.main} 60%,

            #00328d 78%,

            #00143f 100%
        ) !important;

    box-shadow:

        0 0 4px
        rgba(0,91,255,.95),

        0 0 9px
        rgba(0,80,255,.62),

        inset 0 0 8px
        rgba(255,255,255,.08) !important;

    transition:

        filter .18s ease,

        transform .18s ease,

        box-shadow .18s ease !important;
}


/* =========================================================
   CAHAYA BUTTON
   ========================================================= */

#mauslot-side-menu
.ms-menu-link::before{

    content:"" !important;

    position:absolute !important;

    left:0 !important;
    top:0 !important;

    width:100% !important;
    height:100% !important;

    pointer-events:none !important;

    background:

        linear-gradient(
            115deg,

            transparent 0%,

            rgba(255,255,255,.04) 30%,

            rgba(255,255,255,.16) 50%,

            transparent 70%
        ) !important;
}


/* GARIS GLOW KIRI */

#mauslot-side-menu
.ms-menu-link::after{

    content:"" !important;

    position:absolute !important;

    left:0 !important;
    top:6px !important;

    width:2px !important;

    height:
        calc(100% - 12px) !important;

    border-radius:
        20px !important;

    background:
        #70abff !important;

    box-shadow:

        0 0 5px
        #2282ff,

        0 0 10px
        #1263ff !important;

    pointer-events:none !important;
}


/* =========================================================
   HOVER ITEM
   ========================================================= */

#mauslot-side-menu
.ms-menu-link:hover{

    filter:
        brightness(1.13) !important;

    transform:
        translateX(3px)
        scale(1.01) !important;

    box-shadow:

        0 0 6px
        rgba(0,106,255,1),

        0 0 15px
        rgba(0,80,255,.82),

        inset 0 0 10px
        rgba(255,255,255,.11) !important;
}


/* =========================================================
   ICON BULAT
   ========================================================= */

#mauslot-side-menu
.ms-icon-box{

    position:relative !important;

    width:34px !important;

    height:34px !important;

    flex:
        0
        0
        34px !important;

    display:flex !important;

    align-items:center !important;

    justify-content:center !important;

    margin-right:
        8px !important;

    border-radius:
        50% !important;

    overflow:hidden !important;

    background:

        radial-gradient(

            circle,

            rgba(20,115,255,.68) 0%,

            rgba(0,18,72,.98) 75%

        ) !important;

    border:

        1px
        solid
        rgba(117,172,255,.95) !important;

    box-shadow:

        0 0 6px
        rgba(0,105,255,.80),

        inset 0 0 5px
        rgba(255,255,255,.16) !important;

    z-index:2 !important;
}


/* =========================================================
   ICON IMAGE
   ========================================================= */

#mauslot-side-menu
.ms-icon-box img{

    display:block !important;

    width:29px !important;

    height:29px !important;

    object-fit:contain !important;

    margin:0 !important;

    padding:0 !important;

    border:0 !important;

    background:transparent !important;
}


/* =========================================================
   TEXT
   ========================================================= */

#mauslot-side-menu
.ms-menu-text{

    position:relative !important;

    display:block !important;

    flex:1 !important;

    min-width:0 !important;

    margin:0 !important;

    padding:0 !important;

    color:#ffffff !important;

    font-family:
        "Raleway",
        Arial,
        sans-serif !important;

    font-size:12px !important;

    font-weight:900 !important;

    line-height:1.1 !important;

    white-space:nowrap !important;

    overflow:hidden !important;

    text-overflow:ellipsis !important;

    text-shadow:

        0 1px 2px
        rgba(0,0,0,.95),

        0 0 3px
        rgba(255,255,255,.20) !important;

    z-index:2 !important;
}


/* =========================================================
   PANAH
   ========================================================= */

#mauslot-side-menu
.ms-menu-arrow{

    position:absolute !important;

    right:8px !important;

    top:50% !important;

    transform:
        translateY(-50%) !important;

    color:#ffffff !important;

    font-family:
        Arial,
        sans-serif !important;

    font-size:20px !important;

    font-weight:700 !important;

    line-height:1 !important;

    text-shadow:

        0 1px 2px
        rgba(0,0,0,.85),

        0 0 4px
        rgba(255,255,255,.40) !important;

    z-index:2 !important;
}


/* =========================================================
   MOBILE
   ========================================================= */

@media screen and (max-width:600px){

    #mauslot-side-menu{

        left:${CONFIG.mobile.left} !important;

        bottom:${CONFIG.mobile.bottom} !important;
    }


    #mauslot-side-menu
    .ms-menu-trigger{

        width:
            ${CONFIG.mobile.triggerWidth} !important;

        height:
            ${CONFIG.mobile.triggerHeight} !important;

        flex-basis:
            ${CONFIG.mobile.triggerWidth} !important;

        border-radius:
            0
            10px
            10px
            0 !important;
    }


    #mauslot-side-menu
    .ms-menu-trigger-inner{

        font-size:
            14px !important;

        line-height:
            15px !important;
    }


    #mauslot-side-menu
    .ms-menu-list{

        left:
            47px !important;

        bottom:
            -68px !important;

        width:
            ${CONFIG.mobile.menuWidth} !important;

        gap:
            ${CONFIG.mobile.gap} !important;
    }


    #mauslot-side-menu
    .ms-menu-link{

        height:
            ${CONFIG.mobile.itemHeight} !important;

        padding:
            4px
            28px
            4px
            5px !important;
    }


    #mauslot-side-menu
    .ms-icon-box{

        width:
            33px !important;

        height:
            33px !important;

        flex:
            0
            0
            33px !important;

        margin-right:
            7px !important;
    }


    #mauslot-side-menu
    .ms-icon-box img{

        width:
            28px !important;

        height:
            28px !important;
    }


    #mauslot-side-menu
    .ms-menu-text{

        font-size:
            11.5px !important;
    }


    #mauslot-side-menu
    .ms-menu-arrow{

        right:
            7px !important;

        font-size:
            19px !important;
    }

}


/* =========================================================
   MOBILE KECIL
   ========================================================= */

@media screen and (max-width:380px){

    #mauslot-side-menu{

        left:
            5px !important;
    }


    #mauslot-side-menu
    .ms-menu-list{

        width:
            183px !important;
    }


    #mauslot-side-menu
    .ms-menu-text{

        font-size:
            11px !important;
    }

}

`;

    document.head.appendChild(style);


    /* =========================================================
       CREATE WRAPPER
       ========================================================= */

    const menu =
        document.createElement("div");

    menu.id =
        "mauslot-side-menu";


    /* =========================================================
       CREATE BUTTON MENU
       ========================================================= */

    const trigger =
        document.createElement("div");

    trigger.id =
        "mauslot-menu-trigger";

    trigger.className =
        "ms-menu-trigger";

    trigger.setAttribute(
        "role",
        "button"
    );

    trigger.setAttribute(
        "tabindex",
        "0"
    );

    trigger.setAttribute(
        "aria-label",
        "Buka Menu"
    );

    trigger.setAttribute(
        "aria-expanded",
        "false"
    );


    /* =========================================================
       TULISAN MENU VERTIKAL
       ========================================================= */

    const triggerInner =
        document.createElement("span");

    triggerInner.className =
        "ms-menu-trigger-inner";


    ["M", "E", "N", "U"].forEach(
        function (letter) {

            const b =
                document.createElement("b");

            b.textContent =
                letter;

            triggerInner.appendChild(b);

        }
    );


    trigger.appendChild(
        triggerInner
    );


    /* =========================================================
       CREATE UL
       ========================================================= */

    const list =
        document.createElement("ul");

    list.className =
        "ms-menu-list";


    /* =========================================================
       CREATE SEMUA ITEM
       ========================================================= */

    CONFIG.items.forEach(
        function (item) {


            /* ================= LI ================= */

            const li =
                document.createElement("li");

            li.className =
                "ms-menu-item";


            /* ================= LINK ================= */

            const link =
                document.createElement("a");

            link.className =
                "ms-menu-link";

            link.href =
                item.link;

            link.target =
                "_blank";

            link.rel =
                "noopener noreferrer";

            link.setAttribute(
                "aria-label",
                item.text
            );


            /* ================= ICON WRAPPER ================= */

            const iconBox =
                document.createElement("span");

            iconBox.className =
                "ms-icon-box";


            /* ================= IMAGE ================= */

            const img =
                document.createElement("img");

            img.src =
                item.icon;

            img.alt =
                item.text;

            img.loading =
                "eager";

            img.draggable =
                false;


            /* JIKA IMAGE ERROR */
            img.onerror =
                function () {

                    this.style.opacity =
                        "0.6";

                };


            iconBox.appendChild(
                img
            );


            /* ================= TEXT ================= */

            const text =
                document.createElement("span");

            text.className =
                "ms-menu-text";

            text.textContent =
                item.text;


            /* ================= ARROW ================= */

            const arrow =
                document.createElement("span");

            arrow.className =
                "ms-menu-arrow";

            arrow.innerHTML =
                "&#8250;";


            /* ================= SUSUN ================= */

            link.appendChild(
                iconBox
            );

            link.appendChild(
                text
            );

            link.appendChild(
                arrow
            );

            li.appendChild(
                link
            );

            list.appendChild(
                li
            );

        }
    );


    /* =========================================================
       MASUKKAN KE WRAPPER
       ========================================================= */

    menu.appendChild(
        trigger
    );

    menu.appendChild(
        list
    );


    /* =========================================================
       MASUKKAN KE BODY
       ========================================================= */

    function mountMenu() {

        if (!document.body) {

            setTimeout(
                mountMenu,
                100
            );

            return;
        }

        document.body.appendChild(
            menu
        );

    }

    mountMenu();


    /* =========================================================
       STATUS
       ========================================================= */

    let menuOpen =
        false;


    /* =========================================================
       OPEN
       ========================================================= */

    function openMenu() {

        menuOpen =
            true;

        menu.classList.add(
            "ms-open"
        );

        trigger.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    /* =========================================================
       CLOSE
       ========================================================= */

    function closeMenu() {

        menuOpen =
            false;

        menu.classList.remove(
            "ms-open"
        );

        trigger.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    /* =========================================================
       TOGGLE
       ========================================================= */

    function toggleMenu(event) {

        if (event) {

            event.preventDefault();

            event.stopPropagation();

        }


        if (menuOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    }


    /* =========================================================
       CLICK
       ========================================================= */

    trigger.addEventListener(
        "click",
        function (event) {

            toggleMenu(event);

        }
    );


    /* =========================================================
       KEYBOARD
       ========================================================= */

    trigger.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                toggleMenu(event);

            }

        }
    );


    /* =========================================================
       CEGAH DOUBLE CLICK MOBILE
       ========================================================= */

    trigger.addEventListener(
        "touchstart",
        function () {

            /* sengaja kosong */

        },
        {
            passive: true
        }
    );


    /* =========================================================
       CLICK DI AREA MENU
       ========================================================= */

    menu.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );


    /* =========================================================
       CLICK LUAR = CLOSE
       ========================================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (
                menuOpen &&
                !menu.contains(event.target)
            ) {

                closeMenu();

            }

        }
    );


    /* =========================================================
       ESC = CLOSE
       ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                menuOpen
            ) {

                closeMenu();

            }

        }
    );


    /* =========================================================
       OPTIONAL:
       CLOSE SETELAH KLIK SALAH SATU MENU
       ========================================================= */

    const allLinks =
        list.querySelectorAll(
            ".ms-menu-link"
        );


    allLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    setTimeout(
                        function () {

                            closeMenu();

                        },
                        250
                    );

                }
            );

        }
    );


    /* =========================================================
       RESIZE / ORIENTATION
       ========================================================= */

    window.addEventListener(
        "orientationchange",
        function () {

            /* browser otomatis update media query */

        }
    );


    window.addEventListener(
        "resize",
        function () {

            /* posisi otomatis mengikuti CSS */

        }
    );


})();

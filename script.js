const show = () => {
    let selectedEffect = document.querySelector(".custom-select__effect")
    let selectedFermentation = document.querySelector(
        ".custom-select__fermentation"
    )
    let tea = []
    for (let i of teaBase) {
        if (selectedEffect.value === i.effect && selectedFermentation.value === i.fermentation) {
            tea.push(i);
            document.querySelector("#offer__a").href = tea[0].href
            document.querySelector("#offer__img").src = tea[0].imgSrc
            document.querySelector(".offer").style.visibility = "visible"
        }


    }
    let count = 0;
    right__arrow.onclick = () => {
        if (count < tea.length - 1) {
            count++
            document.querySelector("#offer__a").href = tea[count].href
            document.querySelector("#offer__img").src = tea[count].imgSrc
        }
    }

    left__arrow.onclick = () => {
        if (count > 0) {
            count--
            document.querySelector("#offer__a").href = tea[count].href
            document.querySelector("#offer__img").src = tea[count].imgSrc
        }
    }

}

const teaBase = [
    {
        color: "white", name: "bayHaoInChzen", imgSrc: "img/bayHaoInChzen.png",
        href: "https://ufa.moychay.ru/catalog/belyj_chaj/bay-hao-in-chzhen-serebryanye-igly-s-belym-vorsom",
        effect: "meditative",
        fermentation: "lite",
    }, {
        color: "green", name: "gabaDaliFosyan", imgSrc: "img/gabaDaliFosyan.png",
        href: "https://ufa.moychay.ru/catalog/puer/shen_puer_rassypnoj/gaba-dali-fosyan-shaytsin-cha",
        effect: "focus",
        fermentation: "lite",
    },
    {
        color: "green", name: "YundeGushu", imgSrc: "img/YundeGushu.png",
        href: "https://moychay.ru/catalog/puer/shen_puer_rassypnoj/yunde-gushu-shen-cha-2021",
        effect: "focus",
        fermentation: "lite",
    },
    {
        color: "yellow", name: "laoTsyunshan", imgSrc: "img/laoTsyunshan.png",
        href: "https://moychay.ru/catalog/zheltyj_chaj/lao-tszyunshan-inchzhen-2005",
        effect: "relax",
        fermentation: "lite",
    }, {
        color: "oolongLite", name: "gabaGaoshan", imgSrc: "img/gabaGaoshan.png",
        href: "https://ufa.moychay.ru/catalog/ulun/tajvanskij_ulun/gaba-oolong-gaoshan",
        effect: "relax",
        fermentation: "lite",
    }, {
        color: "oolongMedium", name: "laoBasyan", href: "https://moychay.ru/catalog/ulun/guandunskij_ulun/lao-basyan",
        imgSrc: "img/laoBasyan.png",
        effect: "focus",
        fermentation: "medium",
    }, {
        color: "oolongMedium", name: "gabaLishan", imgSrc: "img/gabaLishan.png",
        href: "https://ufa.moychay.ru/catalog/ulun/tajvanskij_ulun/lishan-gaba-ulun",
        effect: "relax",
        fermentation: "medium",
    }, {
        color: "oolongMedium", name: "bayTsziGuanYangLung", imgSrc: "img/bayTsziGuanYangLung.png",
        href: "https://ufa.moychay.ru/catalog/ulun/uishanskij_ulun/1951",
        effect: "meditative",
        fermentation: "medium",
    },
    {
        color: "oolongStrong", name: "gabaRuby", imgSrc: "img/gabaRuby.png",
        href: "https://ufa.moychay.ru/catalog/ulun/tajvanskij_ulun/rubi-gaba-ulun",
        effect: "relax",
        fermentation: "strong",
    },
    {
        color: "red", name: "daTszinZhen", imgSrc: "img/daTszinZhen.png",
        href: "https://moychay.ru/catalog/krasnyj_chaj/da-tszin-chzhen-bolshie-zolotye-ostriya-osen-2021",
        effect: "focus",
        fermentation: "strong",
    },
    {
        color: "black", name: "huangMenghaiShuCha", imgSrc: "img/huangMenhai.png",
        href: "https://moychay.ru/catalog/puer/shu_puer_rassypnoj/huan-menhay-shu-cha",
        effect: "focus",
        fermentation: "post",
    },
    {
        color: "black", name: "teGunLyuanHeyCha", imgSrc: "img/teGunLyuan.png",
        href: "https://ufa.moychay.ru/catalog/chernyj_chaj/te-gun-lyuan-hey-cha-2019",
        effect: "relax",
        fermentation: "post",
    },
    {
        color: "lao", name: "mingo1969", imgSrc: "/img/mingo1969.png",
        href: "https://moychay.ru/catalog/exclusive_collection_tea/mingo-lao-lyuycha-1961-g",
        effect: "meditative",
        fermentation: "strong",
    },
    {
        color: "lao", name: "laoManEShuCha", imgSrc: "img/laoManEShuCha.png",
        href: "https://ufa.moychay.ru/catalog/puer/shu_puer_rassypnoj/laomane-shu-cha-1993",
        effect: "meditative",
        fermentation: "post",
    },
]


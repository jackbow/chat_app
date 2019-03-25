export const gradientNames = ["warm_flame", "night_fade", "spring_warmth", "juicy_peach", "young_passion", "lady_lips", "sunny_morning",
    "rainy_ashville", "frozen_dreams", "winter_neva", "dusty_grass", "tempting_azure", "heavy_rain", "amy_crisp",
    "mean_fruit", "deep_blue", "ripe_malinka", "cloudy_knoxville", "malibu_beach", "new_life", "true_sunset",
    "morpheus_den", "rare_wind", "near_moon", "wild_apple", "saint_petersburg", "arielles_smile", "plum_plate",
    "everlasting_sky", "happy_fisher", "blessing", "sharpeye_eagle", "ladoga_bottom", "lemon_gate", "itmeo_branding",
    "zeus_miracle", "old_hat", "star_wine", "deep_blue", "happy_acid", "awesome_pine", "new_york",
    "shy_rainbow", "mixed_hopes", "fly_high", "strong_bliss", "fresh_milk", "snow_again", "february_ink",
    "kind_steel", "soft_grass", "grown_early", "sharp_blues", "shady_water", "dirty_beauty", "great_whale", "teen_notebook",
    "polite_rumors", "sweet_period", "wide_matrix", "soft_cherish", "red_salvation", "burning_spring", "night_party",
    "sky_glider", "heaven_peach", "purple_division", "aqua_splash", "spiky_naga", "love_kiss",
    "clean_mirror", "premium_dark", "cold_evening", "cochiti_lake", "summer_games", "passionate_bed", "mountain_rock",
    "desert_hump", "jungle_day", "phoenix_start", "october_silence", "faraway_river", "alchemist_lab", "over_sun",
    "premium_white", "mars_party", "eternal_constance", "japan_blush", "smiling_rain", "cloudy_apple", "big_mango",
    "healthy_water", "amour_amour", "risky_concrete", "strong_stick", "vicious_stance", "palo_alto", "happy_memories",
    "midnight_bloom", "crystalline", "party_bliss", "confident_cloud", "le_cocktail", "river_city",
    "frozen_berry", "child_care", "flying_lemon", "new_retrowave", "hidden_jaguar", "above_the_sky", "nega",
    "dense_water", "seashore", "marble_wall", "cheerful_caramel", "night_sky", "magic_lake", "young_grass",
    "colorful_peach", "gentle_care", "plum_bath", "happy_unicorn", "african_field", "solid_stone",
    "orange_juice", "glass_water", "north_miracle", "fruit_blend", "millennium_pine", "high_flight",
    "mole_hall", "space_shift", "forest_inei", "royal_garden", "rich_metal", "juicy_cake", "smart_indigo",
    "sand_strike", "norse_beauty", "aqua_guidance", "sun_veggie", "sea_lord", "black_sea", "grass_shampoo", "landing_aircraft",
    "witch_dance", "sleepless_night", "angel_care", "crystal_river", "soft_lipstick", "salt_mountain", "perfect_white",
    "fresh_oasis", "strict_november", "morning_salad", "deep_relief", "sea_strike", "night_call", "supreme_sky",
    "light_blue", "mind_crawl", "lily_meadow", "sugar_lollipop", "sweet_dessert", "magic_ray", "teen_party", "frozen_heat",
    "gagarin_view", "fabled_sunset", "perfect_blue"]

export const colors = ["#ff9a9e", "#fad0c4", "#fad0c4", "#a18cd1", "#fbc2eb", "#fad0c4", "#fad0c4",
                        "#fcb69f", "#ff8177", "#ff867a", "#ff8c7f", "#f99185", "#cf556c", "#b12a5b", "#ff9a9e", "#f6d365",
                        "#fda085", "#fbc2eb", "#a6c1ee"]

export const getUserIdx = (id, len) => {
    let hash = 0, i, chr;
    if (id.length === 0) return hash;
    for (i = 0; i < id.length; i++) {
        chr = id.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash) % len;
}




// export const colors = ["#ff9a9e", "#fad0c4", "#fad0c4", "#a18cd1", "#fbc2eb", "#fad0c4", "#fad0c4", "#ffd1ff", "#ffecd2", 
//         "#fcb69f", "#ff8177", "#ff867a", "#ff8c7f", "#f99185", "#cf556c", "#b12a5b", "#ff9a9e", "#fecfef", "#fecfef", "#f6d365", 
//         "#fda085", "#fbc2eb", "#a6c1ee", "#fdcbf1", "#fdcbf1", "#e6dee9", "#a1c4fd", "#c2e9fb", "#d4fc79", "#96e6a1", "#84fab0", 
//         "#8fd3f4", "#cfd9df", "#e2ebf0", "#a6c0fe", "#f68084", "#fccb90", "#d57eeb", "#e0c3fc", "#8ec5fc", "#f093fb", "#f5576c", 
//         "#fdfbfb", "#ebedee", "#4facfe", "#00f2fe", "#43e97b", "#38f9d7", "#fa709a", "#fee140", "#30cfd0", "#330867", "#a8edea", 
//         "#fed6e3", "#5ee7df", "#b490ca", "#d299c2", "#fef9d7", "#f5f7fa", "#c3cfe2", "#16d9e3", "#30c7ec", "#46aef7", "#667eea", 
//         "#764ba2", "#fdfcfb", "#e2d1c3", "#89f7fe", "#66a6ff", "#fddb92", "#d1fdff", "#9890e3", "#b1f4cf", "#ebc0fd", "#d9ded8", 
//         "#96fbc4", "#f9f586", "#2af598", "#009efd", "#cd9cf2", "#f6f3ff", "#e4afcb", "#b8cbb8", "#b8cbb8", "#e2c58b", "#c2ce9c", 
//         "#7edbdc", "#b8cbb8", "#b8cbb8", "#b465da", "#cf6cc9", "#ee609c", "#ee609c", "#6a11cb", "#2575fc", "#DCD9D4", "#37ecba", 
//         "#72afd3", "#ebbba7", "#cfc7f8", "#fff1eb", "#ace0f9", "#eea2a2", "#bbc1bf", "#57c6e1", "#b49fda", "#7ac5d8", "#989898", 
//         "#c471f5", "#fa71cd", "#48c6ef", "#6f86d6", "#f78ca0", "#f9748f", "#fd868c", "#fe9a8b", "#feada6", "#f5efef", "#e6e9f0", 
//         "#eef1f5", "#accbee", "#e7f0fd", "#e9defa", "#fbfcdb", "#c1dfc4", "#deecdd", "#0ba360", "#3cba92", "#00c6fb", "#005bea", 
//         "#74ebd5", "#9face6", "#6a85b6", "#bac8e0", "#a3bded", "#6991c7", "#9795f0", "#fbc8d4", "#a7a6cb", "#8989ba", "#8989ba", 
//         "#3f51b1", "#5a55ae", "#7b5fac", "#8f6aae", "#a86aa4", "#cc6b8e", "#f18271", "#f3a469", "#f7c978", "#fcc5e4", "#fda34b", 
//         "#ff7882", "#c8699e", "#7046aa", "#0c1db8", "#020f75", "#dbdcd7", "#dddcd7", "#e2c9cc", "#e7627d", "#b8235a", "#801357", 
//         "#3d1635", "#1c1a27", "#f43b47", "#453a94", "#4fb576", "#44c489", "#28a9ae", "#28a2b7", "#4c7788", "#6c4f63", "#432c39", 
//         "#0250c5", "#d43f8d", "#88d3ce", "#6e45e2", "#d9afd9", "#97d9e1", "#7028e4", "#e5b2ca", "#13547a", "#80d0c7", "#BDBBBE", 
//         "#9D9EA3", "#505285", "#585e92", "#65689f", "#7474b0", "#7e7ebb", "#8389c7", "#9795d4", "#a2a1dc", "#b5aee4", "#ff0844", 
//         "#ffb199", "#C9CCD3", "#93a5cf", "#e4efe9", "#434343", "#0c3483", "#a2b6df", "#6b8cce", "#a2b6df", "#93a5cf", "#e4efe9", 
//         "#92fe9d", "#00c9ff", "#ff758c", "#ff7eb3", "#868f96", "#596164", "#c79081", "#dfa579", "#8baaaa", "#ae8b9c", "#f83600", 
//         "#f9d423", "#b721ff", "#21d4fd", "#6e45e2", "#88d3ce", "#d558c8", "#24d292", "#abecd6", "#fbed96", "#d5d4d0", "#d5d4d0", 
//         "#eeeeec", "#efeeec", "#e9e9e7", "#5f72bd", "#9b23ea", "#09203f", "#537895", "#ddd6f3", "#faaca8", "#faaca8", "#dcb0ed", 
//         "#99c99c", "#f3e7e9", "#e3eeff", "#e3eeff", "#c71d6f", "#d09693", "#96deda", "#50c9c3", "#f77062", "#fe5196", "#c4c5c7", 
//         "#dcdddf", "#ebebeb", "#a8caba", "#5d4157", "#29323c", "#485563", "#16a085", "#f4d03f", "#ff5858", "#f09819", "#2b5876", 
//         "#4e4376", "#00cdac", "#8ddad5", "#BCC5CE", "#929EAD", "#4481eb", "#04befe", "#dad4ec", "#dad4ec", "#f3e7e9", "#874da2", 
//         "#c43a30", "#4481eb", "#04befe", "#e8198b", "#c7eafd", "#EADFDF", "#ECE2DF", "#f794a4", "#fdd6bd", "#64b3f4", "#c2e59c", 
//         "#3b41c5", "#a981bb", "#ffc8a9", "#0fd850", "#f9f047", "#e0e0e0", "#efefef", "#d9d9d9", "#bcbcbc", "#ee9ca7", "#ffdde1", 
//         "#3ab5b0", "#3d99be", "#56317a", "#CDDCDC", "#209cff", "#68e0cf", "#bdc2e8", "#bdc2e8", "#e6dee9", "#e6b980", "#eacda3", 
//         "#1e3c72", "#1e3c72", "#2a5298", "#d5dee7", "#ffafbd", "#c9ffbf", "#9be15d", "#00e3ae", "#ed6ea0", "#ec8c69", "#ffc3a0", 
//         "#ffafbd", "#cc208e", "#6713d2", "#b3ffab", "#12fff7", "#D5DEE7", "#E8EBF2", "#E2E7ED", "#65bd60", "#5ac1a8", "#3ec6ed", 
//         "#b7ddb7", "#fef381", "#243949", "#517fa4", "#fc6076", "#ff9a44", "#dfe9f3", "#323232", "#3F3F3F", "#1C1C1C", "#00dbde", 
//         "#fc00ff", "#f9d423", "#ff4e50", "#50cc7f", "#f5d100", "#0acffe", "#495aff", "#616161", "#9bc5c3", "#E4E4E1", "#3d3393", 
//         "#2b76b9", "#2cacd1", "#35eb93", "#df89b5", "#bfd9fe", "#ed6ea0", "#ec8c69", "#d7d2cc", "#304352", "#e14fad", "#f9d423", 
//         "#b224ef", "#7579ff", "#c1c161", "#c1c161", "#d4d4b1", "#ec77ab", "#7873f5", "#007adf", "#00ecbc", "#20E2D7", "#F9FEA5", 
//         "#2CD8D5", "#C5C1FF", "#FFBAC3", "#2CD8D5", "#6B8DD6", "#8E37D7", "#DFFFCD", "#90F9C4", "#39F3BB", "#5D9FFF", "#B8DCFF", 
//         "#6BBBFF", "#A8BFFF", "#884D80", "#5271C4", "#B19FFF", "#ECA1FE", "#FFE29F", "#FFA99F", "#FF719A", "#22E1FF", "#1D8FE1", 
//         "#625EB1", "#B6CEE8", "#F578DC", "#FFFEFF", "#D7FFFE", "#E3FDF5", "#FFE6FA", "#7DE2FC", "#B9B6E5", "#CBBACC", "#2580B3", 
//         "#B7F8DB", "#50A7C2", "#7085B6", "#87A7D9", "#DEF3F8", "#77FFD2", "#6297DB", "#1EECFF", "#AC32E4", "#7918F2", "#4801FF", 
//         "#D4FFEC", "#57F2CC", "#4596FB", "#9EFBD3", "#57E9F2", "#45D4FB", "#473B7B", "#3584A7", "#30D2BE", "#65379B", "#886AEA", 
//         "#6457C6", "#A445B2", "#D41872", "#FF0066", "#7742B2", "#F180FF", "#FD8BD9", "#FF3CAC", "#562B7C", "#2B86C5", "#FF057C", 
//         "#8D0B93", "#321575", "#FF057C", "#7C64D5", "#4CC3FF", "#69EACB", "#EACCF8", "#6654F1", "#231557", "#44107A", "#FF1361", 
//         "#FFF800", "#3D4E81", "#5753C9", "#6E7FF3"]
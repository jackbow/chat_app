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

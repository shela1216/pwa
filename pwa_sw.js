// 缓存
var self = this;
var hash = "510c7f466c55749916af6d833d75f848";
var version = "4.0.8.21";
var htmlVersion;
var openName = "pwa";
let idx = self.location.pathname.lastIndexOf("/");
let domainPath = self.location.pathname.substring(0, idx + 1);
var pwaHtml = self.location.origin + domainPath + "index.html";
var gamePath = "/shelaTest/m/";
var curCdn;
var bWaitCdn = false;
var cdnRes = [
	// "https://cdnx-ali.quietryo.com",
	// "https://cdnx-hw.mjjhfer.com",
	// "https://cdnnonx-ali.vmahjong.com"
	"https://cdnx-beta.hswenfa.com"
	// "http://127.0.0.1:3031/"
];
var cacheList = [
  "index.html",
  "libs/assetsmanager-d8261130f8.min.js",
  "libs/BGGameLib-e6253c61ef.min.js",
  "libs/dragonBones-d3e55aba9d.min.js",
  "libs/egret-2930803256.web.min.js",
  "libs/egret-a3ba4fff55.min.js",
  "libs/eui-55be2cff38.min.js",
  "libs/ExternalLib-4683577df1.min.js",
  "libs/game-92641ed6bb.min.js",
  "libs/h5module-d41b12c69f.js",
  "libs/index-04383eda08.js",
  "libs/main-326b0500af.js",
  "libs/promise-1db72e0812.min.js",
  "libs/soundjs-be02be4ef1.min.js",
  "libs/tween-20f8a48b47.min.js",
  "resource/assets/common/common_window-47a9508c59.bgjson",
  "resource/assets/common/common_window-a3448e9651.bgpng",
  "resource/assets/common/fnt/roadFntSheet_en_US_M-8d777f7e29.bgfnt",
  "resource/assets/common/fnt/roadFntSheet_en_US_M-f22c0713ea.bgpng",
  "resource/assets/common/fnt/roadFntSheet_M-0623b8d61c.bgpng",
  "resource/assets/common/fnt/roadFntSheet_M-ec51e5760f.bgfnt",
  "resource/assets/common/fnt/roadFntSheet_zh_CN_M-66e01f4a7e.bgfnt",
  "resource/assets/common/fnt/roadFntSheet_zh_CN_M-6828e5280c.bgpng",
  "resource/assets/common/fnt/roadFntSheet_zh_TW_M-98c2650073.bgfnt",
  "resource/assets/common/fnt/roadFntSheet_zh_TW_M-b35c753160.bgpng",
  "resource/assets/common/goodRoad/goodRoad_sheet_en_US-329d961b0d.bgpng",
  "resource/assets/common/goodRoad/goodRoad_sheet_en_US-93e8c23e5d.bgjson",
  "resource/assets/common/goodRoad/goodRoad_sheet_zh_CN-5429ab0d4d.bgjson",
  "resource/assets/common/goodRoad/goodRoad_sheet_zh_CN-9b40a71c74.bgpng",
  "resource/assets/common/goodRoad/goodRoad_sheet_zh_TW-cff8f009cc.bgpng",
  "resource/assets/common/goodRoad/goodRoad_sheet_zh_TW-e863eb0acd.bgjson",
  "resource/assets/common/json/locale-f45aa31d60.bgjson",
  "resource/assets/common/json/music-df0775b349.bgjson",
  "resource/assets/common/json/sound-4a055c001d.bgjson",
  "resource/assets/common/L/road_sheet_en_US-3d5a97af03.bgpng",
  "resource/assets/common/L/road_sheet_en_US-6929ded446.bgjson",
  "resource/assets/common/L/road_sheet_es_ES-1912e1a2c3.bgjson",
  "resource/assets/common/L/road_sheet_es_ES-ae39606cf8.bgpng",
  "resource/assets/common/L/road_sheet_id_ID-ddff82f706.bgpng",
  "resource/assets/common/L/road_sheet_id_ID-de84a708b2.bgjson",
  "resource/assets/common/L/road_sheet_it_IT-1722060945.bgjson",
  "resource/assets/common/L/road_sheet_it_IT-6385d3b999.bgpng",
  "resource/assets/common/L/road_sheet_ja_JP-242e4aed74.bgpng",
  "resource/assets/common/L/road_sheet_ja_JP-70babc55ca.bgjson",
  "resource/assets/common/L/road_sheet_ko_KR-b32d689a4e.bgjson",
  "resource/assets/common/L/road_sheet_ko_KR-e1fc56fbce.bgpng",
  "resource/assets/common/L/road_sheet_pt_PT-7a08005be9.bgjson",
  "resource/assets/common/L/road_sheet_pt_PT-f2aae19bea.bgpng",
  "resource/assets/common/L/road_sheet_th_TH-3c2daa1c6e.bgpng",
  "resource/assets/common/L/road_sheet_th_TH-f6367efe39.bgjson",
  "resource/assets/common/L/road_sheet_vi_VN-171a381521.bgpng",
  "resource/assets/common/L/road_sheet_vi_VN-eaf6429df6.bgjson",
  "resource/assets/common/L/road_sheet_zh_CN-98079dadf2.bgjson",
  "resource/assets/common/L/road_sheet_zh_CN-cbff81b277.bgpng",
  "resource/assets/common/L/road_sheet_zh_TW-1d90ee7909.bgpng",
  "resource/assets/common/L/road_sheet_zh_TW-bd80ab3d2d.bgjson",
  "resource/assets/common/L/road_sheet-195d3aed69.bgpng",
  "resource/assets/common/L/road_sheet-5e71aa55e8.bgjson",
  "resource/assets/common/loading_sheet-94b6f5fbd5.bgjson",
  "resource/assets/common/loading_sheet-f3f0ffa88e.bgpng",
  "resource/assets/game/bac/card_big_sheet1-7c8596b2a4.bgjson",
  "resource/assets/game/bac/card_big_sheet1-9c283edfca.bgpng",
  "resource/assets/game/bac/card_big_sheet2-36be4ba486.bgpng",
  "resource/assets/game/bac/card_big_sheet2-44b486a55c.bgjson",
  "resource/assets/game/bac/card_big_sheet3-115cb338a2.bgpng",
  "resource/assets/game/bac/card_big_sheet3-be2fb1391f.bgjson",
  "resource/assets/game/bac/card_big_sheet4-4ac435f29f.bgjson",
  "resource/assets/game/bac/card_big_sheet4-67a7ed2a2c.bgpng",
  "resource/assets/game/bac/game_bac_sheet_en_US-06832584fb.bgjson",
  "resource/assets/game/bac/game_bac_sheet_en_US-2e6ded5ff5.bgpng",
  "resource/assets/game/bac/game_bac_sheet_zh_CN-3ae6a44538.bgpng",
  "resource/assets/game/bac/game_bac_sheet_zh_CN-74ad581d0e.bgjson",
  "resource/assets/game/bac/game_bac_sheet_zh_TW-39d090c3a3.bgpng",
  "resource/assets/game/bac/game_bac_sheet_zh_TW-a44d95bea9.bgjson",
  "resource/assets/game/bac/game_bac_sheet-5a69fb6bfb.bgpng",
  "resource/assets/game/bac/game_bac_sheet-d4f1722f8a.bgjson",
  "resource/assets/game/bac/land/Bg_BetZone_2-92ff436e90.bgpng",
  "resource/assets/game/bac/table_girl04_MI-421ca81f0f.bgpng",
  "resource/assets/game/bull/game_bull_sheet_en_US-103b820053.bgpng",
  "resource/assets/game/bull/game_bull_sheet_en_US-e0eb458450.bgjson",
  "resource/assets/game/bull/game_bull_sheet_zh_CN-20bdfc521e.bgpng",
  "resource/assets/game/bull/game_bull_sheet_zh_CN-df0c7e48e2.bgjson",
  "resource/assets/game/bull/game_bull_sheet_zh_TW-5b7bdd6f2c.bgjson",
  "resource/assets/game/bull/game_bull_sheet_zh_TW-b5f1175efa.bgpng",
  "resource/assets/game/bull/game_bull_sheet-368e85014e.bgjson",
  "resource/assets/game/bull/game_bull_sheet-63d2c83334.bgpng",
  "resource/assets/game/bull/land/Bg_BetZone_bull-ec4b97f03d.bgpng",
  "resource/assets/game/colbac/card_color_sheet1-67db44c088.bgjson",
  "resource/assets/game/colbac/card_color_sheet1-b779b26c1f.bgpng",
  "resource/assets/game/colbac/card_color_sheet2-c5f77521da.bgjson",
  "resource/assets/game/colbac/card_color_sheet2-f44d39fcc7.bgpng",
  "resource/assets/game/colbac/card_color_sheet3-8fe6a3164d.bgjson",
  "resource/assets/game/colbac/card_color_sheet3-ba2337597d.bgpng",
  "resource/assets/game/colbac/card_color_sheet4-3ed5f06c74.bgjson",
  "resource/assets/game/colbac/card_color_sheet4-a068ef0147.bgpng",
  "resource/assets/game/colbac/card_color_sheet5-0345c3189b.bgpng",
  "resource/assets/game/colbac/card_color_sheet5-bf3ee3792e.bgjson",
  "resource/assets/game/common/card_sheet1-4b13de248b.bgjson",
  "resource/assets/game/common/card_sheet1-de55650c87.bgpng",
  "resource/assets/game/common/card_sheet2-0ab3fd9153.bgjson",
  "resource/assets/game/common/card_sheet2-aad90262f4.bgpng",
  "resource/assets/game/common/card_sheet3-54225b519d.bgjson",
  "resource/assets/game/common/card_sheet3-7c209f823b.bgpng",
  "resource/assets/game/common/card_sheet4-0bf87045e6.bgpng",
  "resource/assets/game/common/card_sheet4-3de0752079.bgjson",
  "resource/assets/game/common/common_game-44cc98a0b3.bgpng",
  "resource/assets/game/common/common_game-4fcfe44fa3.bgjson",
  "resource/assets/game/common/emoji_sheet-32e91c08d8.bgjson",
  "resource/assets/game/common/emoji_sheet-f89755689a.bgpng",
  "resource/assets/game/common/game_card_common_sheet-14abac48cd.bgjson",
  "resource/assets/game/common/game_card_common_sheet-cdba9be3f1.bgpng",
  "resource/assets/game/common/land/Bg_BetZone-dee8a0ead4.bgpng",
  "resource/assets/game/common/table_01-79bc03c692.bgpng",
  "resource/assets/game/common/table_02-f1af1deddf.bgpng",
  "resource/assets/game/common/table_03-1505d88a8f.bgpng",
  "resource/assets/game/common/table_04-5745aa2334.bgpng",
  "resource/assets/game/common/table_05-3f5d7bf3b8.bgpng",
  "resource/assets/game/common/table_bg-436b299a75.bgjpg",
  "resource/assets/game/common/table_girl01-fa2aa20057.bgpng",
  "resource/assets/game/dt/game_dt_sheet_en_US-8d3ae26c77.bgjson",
  "resource/assets/game/dt/game_dt_sheet_en_US-bbfb546c79.bgpng",
  "resource/assets/game/dt/game_dt_sheet_zh_CN-31290bb458.bgpng",
  "resource/assets/game/dt/game_dt_sheet_zh_CN-6a5d3a27bb.bgjson",
  "resource/assets/game/dt/game_dt_sheet_zh_TW-1d20bc0450.bgpng",
  "resource/assets/game/dt/game_dt_sheet_zh_TW-d5212eea3c.bgjson",
  "resource/assets/game/multi/BetNumBoldFnt_M-851bc75072.bgfnt",
  "resource/assets/game/multi/BetNumBoldFnt_M-e881854a28.bgpng",
  "resource/assets/game/multi/multi_sheet-a68ddc09c0.bgpng",
  "resource/assets/game/multi/multi_sheet-f6bad52287.bgjson",
  "resource/assets/game/rb/game_rb_sheet_en_US-45b4d9842c.bgjson",
  "resource/assets/game/rb/game_rb_sheet_en_US-a107bb1973.bgpng",
  "resource/assets/game/rb/game_rb_sheet_zh_CN-bbf2437673.bgjson",
  "resource/assets/game/rb/game_rb_sheet_zh_CN-f7193aa7d5.bgpng",
  "resource/assets/game/rb/game_rb_sheet_zh_TW-9818d5e69b.bgpng",
  "resource/assets/game/rb/game_rb_sheet_zh_TW-d5ed8cbaad.bgjson",
  "resource/assets/game/rb/game_rb_sheet-8467a7a8f3.bgpng",
  "resource/assets/game/rb/game_rb_sheet-c0c8882a57.bgjson",
  "resource/assets/game/rb/land/Bg_BetZone_RB-868c25b2ff.bgpng",
  "resource/assets/game/rou/game_rou_sheet_en_US-491f84af85.bgpng",
  "resource/assets/game/rou/game_rou_sheet_en_US-a681a480a9.bgjson",
  "resource/assets/game/rou/game_rou_sheet_zh_CN-0f73316655.bgpng",
  "resource/assets/game/rou/game_rou_sheet_zh_CN-c57b556f74.bgjson",
  "resource/assets/game/rou/game_rou_sheet_zh_TW-423fda42c6.bgpng",
  "resource/assets/game/rou/game_rou_sheet_zh_TW-80c8322398.bgjson",
  "resource/assets/game/rou/game_rou_sheet-172d44a097.bgjson",
  "resource/assets/game/rou/game_rou_sheet-8cb70d7ce9.bgpng",
  "resource/assets/game/rou/game_rou_zone-27931bb621.bgjson",
  "resource/assets/game/rou/game_rou_zone-fd951ea645.bgpng",
  "resource/assets/game/rou/rouBetFnt-2bbc62c736.bgfnt",
  "resource/assets/game/rou/rouBetFnt-9c30567d63.bgpng",
  "resource/assets/game/rou/table_bg_rou-9dd0c5b921.bgjpg",
  "resource/assets/game/rou/table_girl02_roulette-a6b9093b51.bgpng",
  "resource/assets/game/rou/table_roulette_2-aff34821bf.bgpng",
  "resource/assets/game/rou/table_roulette-9f6c35ef15.bgpng",
  "resource/assets/game/sedie/game_sedie_sheet_en_US-1b4cefcf58.bgjson",
  "resource/assets/game/sedie/game_sedie_sheet_en_US-f5a8558d44.bgpng",
  "resource/assets/game/sedie/game_sedie_sheet_zh_CN-c5cd6f32d3.bgpng",
  "resource/assets/game/sedie/game_sedie_sheet_zh_CN-d08be2c12f.bgjson",
  "resource/assets/game/sedie/game_sedie_sheet_zh_TW-5ffea57d78.bgpng",
  "resource/assets/game/sedie/game_sedie_sheet_zh_TW-deb7d42934.bgjson",
  "resource/assets/game/sedie/game_sedie_sheet-5e09181f48.bgpng",
  "resource/assets/game/sedie/game_sedie_sheet-d87bb595ab.bgjson",
  "resource/assets/game/sedie/land/sedie_APP_H5__bg-23f36bf024.bgpng",
  "resource/assets/game/sedie/Sedie_bowl-46cce2056e.bgpng",
  "resource/assets/game/sedie/table_girl_Sedie-105b7139b6.bgpng",
  "resource/assets/game/sedie/table_Sedie-638aea76c4.bgpng",
  "resource/assets/game/sibo/game_sibo_sheet_en_US-799a15b829.bgpng",
  "resource/assets/game/sibo/game_sibo_sheet_en_US-b38f58c855.bgjson",
  "resource/assets/game/sibo/game_sibo_sheet_zh_CN-5e5f405645.bgjson",
  "resource/assets/game/sibo/game_sibo_sheet_zh_CN-a2712e7477.bgpng",
  "resource/assets/game/sibo/game_sibo_sheet_zh_TW-33074e79b6.bgjson",
  "resource/assets/game/sibo/game_sibo_sheet_zh_TW-37fc56d662.bgpng",
  "resource/assets/game/sibo/game_sibo_sheet-3519198bf7.bgpng",
  "resource/assets/game/sibo/game_sibo_sheet-79581a0fe4.bgjson",
  "resource/assets/game/sibo/land/sibo_betArea-fc4a77d16b.bgpng",
  "resource/assets/game/sibo/land/tableMask_A10-0ae40dae51.bgpng",
  "resource/assets/game/sibo/land/tableMask_B18-0481aadfa8.bgpng",
  "resource/assets/game/sibo/table_girl03b_sibo-006e5c7cfc.bgpng",
  "resource/assets/game/sibo/table_sibo_2-b55e04b097.bgpng",
  "resource/assets/game/sibo/table_sibo-f57e81dcbc.bgpng",
  "resource/assets/game/spsibo/game_spsibo_sheet-0e080a68c3.bgpng",
  "resource/assets/game/spsibo/game_spsibo_sheet-ac9e44b48e.bgjson",
  "resource/assets/game/spsibo/land/Bg_BetZone_spdsibo-2ef73c5024.bgpng",
  "resource/assets/game/spsibo/land/tableMask_B21-3ccc17d6ec.bgpng",
  "resource/assets/game/spsibo/table_sibo_3-cc2d239d6c.bgpng",
  "resource/assets/game/war/game_war_sheet_en_US-37bd627f5a.bgpng",
  "resource/assets/game/war/game_war_sheet_en_US-e7041e3541.bgjson",
  "resource/assets/game/war/game_war_sheet_zh_CN-3b986f89a0.bgjson",
  "resource/assets/game/war/game_war_sheet_zh_CN-5fc50dba78.bgpng",
  "resource/assets/game/war/game_war_sheet_zh_TW-5ed177248a.bgpng",
  "resource/assets/game/war/game_war_sheet_zh_TW-8e0fc2d7fb.bgjson",
  "resource/assets/game/war/game_war_sheet-6fc2618614.bgjson",
  "resource/assets/game/war/game_war_sheet-ff64caf01d.bgpng",
  "resource/assets/game/war/land/Bg_BetZone_war-9e0ea363bd.bgpng",
  "resource/assets/game/win3/game_win3_sheet_en_US-3e06d597bd.bgpng",
  "resource/assets/game/win3/game_win3_sheet_en_US-ad14c0ed08.bgjson",
  "resource/assets/game/win3/game_win3_sheet_zh_CN-2c45ed0f25.bgjson",
  "resource/assets/game/win3/game_win3_sheet_zh_CN-d5e18af46e.bgpng",
  "resource/assets/game/win3/game_win3_sheet_zh_TW-39e4f128ef.bgpng",
  "resource/assets/game/win3/game_win3_sheet_zh_TW-6e2779cd26.bgjson",
  "resource/assets/game/win3/game_win3_sheet-7728b0b3dd.bgjson",
  "resource/assets/game/win3/game_win3_sheet-7d00cf6cc8.bgpng",
  "resource/assets/game/win3/land/BgBet_WinThreeCards-97bb366f6a.bgpng",
  "resource/assets/hall/hall_sheet_en_US-15c3459d11.bgpng",
  "resource/assets/hall/hall_sheet_en_US-902490c986.bgjson",
  "resource/assets/hall/hall_sheet_es_ES-8d3a36aefc.bgjson",
  "resource/assets/hall/hall_sheet_es_ES-bb515810ff.bgpng",
  "resource/assets/hall/hall_sheet_id_ID-4ecc12403a.bgpng",
  "resource/assets/hall/hall_sheet_id_ID-646c77f89c.bgjson",
  "resource/assets/hall/hall_sheet_it_IT-4a8d9d600d.bgpng",
  "resource/assets/hall/hall_sheet_it_IT-712597255f.bgjson",
  "resource/assets/hall/hall_sheet_ja_JP-389a85b664.bgpng",
  "resource/assets/hall/hall_sheet_ja_JP-9078ec24f5.bgjson",
  "resource/assets/hall/hall_sheet_ko_KR-2a0e5cc245.bgpng",
  "resource/assets/hall/hall_sheet_ko_KR-bdf454321e.bgjson",
  "resource/assets/hall/hall_sheet_pt_PT-231f8fc023.bgjson",
  "resource/assets/hall/hall_sheet_pt_PT-39de5b77f9.bgpng",
  "resource/assets/hall/hall_sheet_th_TH-26329143ac.bgjson",
  "resource/assets/hall/hall_sheet_th_TH-56193328d4.bgpng",
  "resource/assets/hall/hall_sheet_vi_VN-0cfd201769.bgjson",
  "resource/assets/hall/hall_sheet_vi_VN-cdc4feb462.bgpng",
  "resource/assets/hall/hall_sheet_zh_CN-d4b0e0897d.bgpng",
  "resource/assets/hall/hall_sheet_zh_CN-d574b4cb48.bgjson",
  "resource/assets/hall/hall_sheet_zh_TW-051777ccfc.bgpng",
  "resource/assets/hall/hall_sheet_zh_TW-7a8efe0e56.bgjson",
  "resource/assets/hall/hall_sheet-325c5a6ecc.bgpng",
  "resource/assets/hall/hall_sheet-f3eb56f3c8.bgjson",
  "resource/assets/hall/land/lobby_btn_enter_1_a-1de8d804c4.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_10_a-804677caba.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_11_a-5f020bbd96.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_12_a-166f9558f2.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_13_a-17b2acebae.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_14_a-001298972e.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_2_a-152635d7e7.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_3_a-536528bdc7.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_4_a-599f397000.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_5_a-6a2919a3f7.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_6_a-ac424e2525.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_7_a-38a013d04f.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_8_a-83d040546e.bgpng",
  "resource/assets/hall/land/lobby_btn_enter_9_a-7085bc42c7.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_1_b-35dc9f51cf.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_10_b-f6183abf8e.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_11_b-80d477d2a6.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_12_b-0ee91f5b53.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_13_b-28d66772bf.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_14_b-570beae791.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_2_b-d6f6773236.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_3_b-dbcb6d0e45.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_4_b-2bc54a1f36.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_5_b-0168317c0f.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_6_b-9427e87b81.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_7_b-b042f352eb.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_8_b-d5411076a2.bgpng",
  "resource/assets/hall/port/lobby_btn_enter_9_b-6747ba11ba.bgpng",
  "resource/assets/login/aa15/login_bg_aa15_l-0f4e0d32d5.bgjpg",
  "resource/assets/login/aa15/login_bg_aa15_p-08a195e92f.bgjpg",
  "resource/assets/login/aa15/login_bg_girl_aa15-5e46d6e42e.bgpng",
  "resource/assets/login/aa15/login_logo_aa15-63c969d388.bgpng",
  "resource/assets/login/gj00/login_logo_gj00-4a3c2e52b4.bgpng",
  "resource/assets/login/jt11/login_bg_jt11_l-2fcb30d97a.bgjpg",
  "resource/assets/login/jt11/login_bg_jt11_p-f1e3e6b931.bgjpg",
  "resource/assets/login/jt11/login_logo_jt11-88f8a23c36.bgpng",
  "resource/assets/login/jt11/login_logo2_jt11-475d7cfd1e.bgpng",
  "resource/assets/login/login_bg_l-42671574c1.bgjpg",
  "resource/assets/login/login_bg_p-d09dfc4279.bgjpg",
  "resource/assets/login/login_logo-a64ee42133.bgpng",
  "resource/assets/login/login_sheet-9e1f8f9a91.bgpng",
  "resource/assets/login/login_sheet-e06edb8468.bgjson",
  "resource/assets/login/ok12/login_logo_ok12-70031e36e7.bgpng",
  "resource/assets/login/ye06/login_bg_girl_ye06-70c1d0799c.bgpng",
  "resource/assets/login/ye06/login_bg_ye06_l-d36bd79458.bgjpg",
  "resource/assets/login/ye06/login_bg_ye06_p-ab2d2fdb45.bgjpg",
  "resource/assets/login/ym06/login_bg_ym06_l-9869ddc868.bgjpg",
  "resource/assets/login/ym06/login_bg_ym06_p-e0ab8d071c.bgjpg",
  "resource/assets/login/ym06/login_logo_ym06-64d0ff7215.bgpng",
  "resource/assets/login/ym06/login_logo2_ym06-b5e3e93ecc.bgpng",
  "resource/assets/theme/theme_CNY-5731227c21.bgpng",
  "resource/assets/theme/theme_CNY-b9dbda4ace.bgjson",
  "resource/banner/aa15/1_L-b873e41209.jpg",
  "resource/banner/aa15/1-a2e72b691e.jpg",
  "resource/banner/demo/1_L_en_US-b57e474680.jpg",
  "resource/banner/demo/1_L_es_ES-26f369cacd.jpg",
  "resource/banner/demo/1_L_id_ID-a5ddd6cd48.jpg",
  "resource/banner/demo/1_L_it_IT-68eddb7792.jpg",
  "resource/banner/demo/1_L_ja_JP-ce9dfc8e8a.jpg",
  "resource/banner/demo/1_L_ko_KR-99b97b992e.jpg",
  "resource/banner/demo/1_L_pt_PT-66d70fcd07.jpg",
  "resource/banner/demo/1_L_th_TH-739b6a5753.jpg",
  "resource/banner/demo/1_L_vi_VN-1924c23359.jpg",
  "resource/banner/demo/1_L_zh_CN-2e60f44f12.jpg",
  "resource/banner/demo/1_L_zh_TW-7ea8b811c0.jpg",
  "resource/banner/demo/1_P_en_US-b72ae855dd.jpg",
  "resource/banner/demo/1_P_es_ES-cf705bad95.jpg",
  "resource/banner/demo/1_P_id_ID-740a0decbc.jpg",
  "resource/banner/demo/1_P_it_IT-ae1a425600.jpg",
  "resource/banner/demo/1_P_ja_JP-8fb8dcae52.jpg",
  "resource/banner/demo/1_P_ko_KR-838105567b.jpg",
  "resource/banner/demo/1_P_pt_PT-58d906659c.jpg",
  "resource/banner/demo/1_P_th_TH-9b2b147ba1.jpg",
  "resource/banner/demo/1_P_vi_VN-c3bc811203.jpg",
  "resource/banner/demo/1_P_zh_CN-837f1dbe29.jpg",
  "resource/banner/demo/1_P_zh_TW-482e1ac17b.jpg",
  "resource/banner/demo/2_L_en_US-a30202ad5b.jpg",
  "resource/banner/demo/2_L_es_ES-08e9984945.jpg",
  "resource/banner/demo/2_L_id_ID-3333f8ea48.jpg",
  "resource/banner/demo/2_L_ja_JP-38d3a6dc5b.jpg",
  "resource/banner/demo/2_L_ko_KR-5292cb638f.jpg",
  "resource/banner/demo/2_L_pt_PT-eb2516d06c.jpg",
  "resource/banner/demo/2_L_th_TH-960cb297e2.jpg",
  "resource/banner/demo/2_L_vi_VN-1900fa95b0.jpg",
  "resource/banner/demo/2_L_zh_CN-2de8440331.jpg",
  "resource/banner/demo/2_L_zh_TW-c4babc0bbd.jpg",
  "resource/banner/demo/2_P_en_US-b9f8f555b1.jpg",
  "resource/banner/demo/2_P_es_ES-72a2796517.jpg",
  "resource/banner/demo/2_P_id_ID-5e7cfff500.jpg",
  "resource/banner/demo/2_P_ja_JP-6eb1f0f074.jpg",
  "resource/banner/demo/2_P_ko_KR-8682e50159.jpg",
  "resource/banner/demo/2_P_pt_PT-812bec5512.jpg",
  "resource/banner/demo/2_P_th_TH-cdc640dea9.jpg",
  "resource/banner/demo/2_P_vi_VN-ac8fa40d0f.jpg",
  "resource/banner/demo/2_P_zh_CN-2b488ada62.jpg",
  "resource/banner/demo/2_P_zh_TW-cab782bc3d.jpg",
  "resource/banner/demo/3_L_en_US-94dce987ce.jpg",
  "resource/banner/demo/3_L_es_ES-1769a34b84.jpg",
  "resource/banner/demo/3_L_id_ID-f18dfc46b5.jpg",
  "resource/banner/demo/3_L_ja_JP-8c5b2f9e42.jpg",
  "resource/banner/demo/3_L_ko_KR-d637b23c17.jpg",
  "resource/banner/demo/3_L_pt_PT-553b702824.jpg",
  "resource/banner/demo/3_L_th_TH-12b39e27cf.jpg",
  "resource/banner/demo/3_L_vi_VN-a3bfb3d58b.jpg",
  "resource/banner/demo/3_L_zh_CN-122cf50286.jpg",
  "resource/banner/demo/3_L_zh_TW-fb06c16006.jpg",
  "resource/banner/demo/3_P_en_US-4bf687a7ce.jpg",
  "resource/banner/demo/3_P_es_ES-bc02be9b29.jpg",
  "resource/banner/demo/3_P_id_ID-d770abd914.jpg",
  "resource/banner/demo/3_P_ja_JP-1abc1dc1a1.jpg",
  "resource/banner/demo/3_P_ko_KR-deedc0e786.jpg",
  "resource/banner/demo/3_P_pt_PT-33d01332b1.jpg",
  "resource/banner/demo/3_P_th_TH-a549f21785.jpg",
  "resource/banner/demo/3_P_vi_VN-6aa35f045c.jpg",
  "resource/banner/demo/3_P_zh_CN-993e92448e.jpg",
  "resource/banner/demo/3_P_zh_TW-0961de6c65.jpg",
  "resource/banner/demo/4_L_en_US-d8881cd908.jpg",
  "resource/banner/demo/4_L_es_ES-03d720ec39.jpg",
  "resource/banner/demo/4_L_id_ID-90e008f380.jpg",
  "resource/banner/demo/4_L_ja_JP-58abc3faaa.jpg",
  "resource/banner/demo/4_L_ko_KR-c0401b9692.jpg",
  "resource/banner/demo/4_L_pt_PT-f2a050c079.jpg",
  "resource/banner/demo/4_L_th_TH-f56c5fd175.jpg",
  "resource/banner/demo/4_L_vi_VN-cba95479ce.jpg",
  "resource/banner/demo/4_L_zh_CN-c8c9dc18d6.jpg",
  "resource/banner/demo/4_L_zh_TW-b019b21b10.jpg",
  "resource/banner/demo/4_P_en_US-7762485f76.jpg",
  "resource/banner/demo/4_P_es_ES-68f0842147.jpg",
  "resource/banner/demo/4_P_id_ID-5562d7d65f.jpg",
  "resource/banner/demo/4_P_ja_JP-5e7a4c10b3.jpg",
  "resource/banner/demo/4_P_ko_KR-fc662b4d51.jpg",
  "resource/banner/demo/4_P_pt_PT-dee48a0923.jpg",
  "resource/banner/demo/4_P_th_TH-5349a84ff2.jpg",
  "resource/banner/demo/4_P_vi_VN-a9a9d8348c.jpg",
  "resource/banner/demo/4_P_zh_CN-f7432d6b59.jpg",
  "resource/banner/demo/4_P_zh_TW-1b3b1befe0.jpg",
  "resource/banner/demo/5_L_en_US-6dbddc13f9.jpg",
  "resource/banner/demo/5_L_es_ES-22a37405b7.jpg",
  "resource/banner/demo/5_L_id_ID-1a4b1dfd24.jpg",
  "resource/banner/demo/5_L_pt_PT-9aa80463b3.jpg",
  "resource/banner/demo/5_L_th_TH-88e107c42a.jpg",
  "resource/banner/demo/5_L_vi_VN-0d72192c85.jpg",
  "resource/banner/demo/5_L_zh_CN-c02edb8209.jpg",
  "resource/banner/demo/5_L_zh_TW-8ae83b4ea0.jpg",
  "resource/banner/demo/5_P_en_US-90437ebbf1.jpg",
  "resource/banner/demo/5_P_es_ES-b8e69e5053.jpg",
  "resource/banner/demo/5_P_id_ID-2254027150.jpg",
  "resource/banner/demo/5_P_pt_PT-4abe396735.jpg",
  "resource/banner/demo/5_P_th_TH-6bc5611777.jpg",
  "resource/banner/demo/5_P_vi_VN-a6d6c1fdd8.jpg",
  "resource/banner/demo/5_P_zh_CN-b98dfe5f3c.jpg",
  "resource/banner/demo/5_P_zh_TW-229171e32e.jpg",
  "resource/banner/gj00/1_L-dc837031da.jpg",
  "resource/banner/gj00/1-00732efe8e.jpg",
  "resource/banner/jt11/1_en_US-3f6b9e6002.jpg",
  "resource/banner/jt11/1_L_en_US-78a5776ebc.jpg",
  "resource/banner/jt11/1_L_zh_CN-08f32c4406.jpg",
  "resource/banner/jt11/1_L_zh_TW-18198fce43.jpg",
  "resource/banner/jt11/1_zh_CN-71552bef69.jpg",
  "resource/banner/jt11/1_zh_TW-10575fb2f3.jpg",
  "resource/banner/ok12/1_L-af272eef43.jpg",
  "resource/banner/ok12/1-c99f8d39da.jpg",
  "resource/banner/ok12/2_L-7b88f3dc54.jpg",
  "resource/banner/ok12/2-830f1bcac7.jpg",
  "resource/banner/ov05/1_L-e631f35849.jpg",
  "resource/banner/ov05/1-a744f98a3a.jpg",
  "resource/banner/ym06/1_L-8ade0101bb.jpg",
  "resource/banner/ym06/1-2b74ec3269.jpg",
  "resource/custom/aa15/ad_L-a97d93bbcc.jpg",
  "resource/custom/aa15/ad-b0ccf65187.jpg",
  "resource/custom/aa15/logo_hao-70ba2e8cec.png",
  "resource/custom/demo/ad-088fce3b4c.mp4",
  "resource/custom/demo/adLogo-8a72100af2.png",
  "resource/custom/demo/background-44bf64b04e.png",
  "resource/custom/demo/liveCasino-73317af4c4.png",
  "resource/custom/gj00/ad_L-6cf7a2f7bb.jpg",
  "resource/custom/gj00/ad-07290e64ad.jpg",
  "resource/custom/gj00/logo_gj00-76c9a903ff.png",
  "resource/custom/gj00/poker-back_big-76ba72505e.png",
  "resource/custom/gj00/poker-back-c8dd7672b6.png",
  "resource/custom/jt11/ad_L-fc3bc12f18.jpg",
  "resource/custom/jt11/ad-6cfe8b76a2.jpg",
  "resource/custom/jt11/logo_ub-048984cab7.png",
  "resource/custom/jt11/poker-back_big-d49dc38163.png",
  "resource/custom/jt11/poker-back-fddce97122.png",
  "resource/custom/noLogo/poker-back_big-7aca4e1425.png",
  "resource/custom/noLogo/poker-back-3aba9863ec.png",
  "resource/custom/ok12/ad_L-6a4329b4b7.jpg",
  "resource/custom/ok12/ad-4f5d6b221c.jpg",
  "resource/custom/ok12/logo-dc51ba0b45.png",
  "resource/custom/ok12/poker-back_big-36efd96b68.png",
  "resource/custom/ok12/poker-back-e94ab8c83e.png",
  "resource/custom/ov05/ad_L-84db3445d7.jpg",
  "resource/custom/ov05/ad-90ffaf39dd.jpg",
  "resource/custom/ov05/logo_ov05-1f0582c6f1.png",
  "resource/custom/ov05/poker-back_big-ecd7e92ada.png",
  "resource/custom/ov05/poker-back-7784e99c66.png",
  "resource/custom/vo06/ad_L-98eb1c6d36.jpg",
  "resource/custom/vo06/ad-9ae8aea433.jpg",
  "resource/custom/ym06/adGif_L-289d3c7992.gif",
  "resource/custom/ym06/adGif-dc7a53e4d3.gif",
  "resource/custom/ym06/logo_ym06-5e716f1b36.png",
  "resource/custom/ym06/poker-back_big-6d32590747.png",
  "resource/custom/ym06/poker-back-05396294fb.png",
  "resource/js/bgv-d6d7f87407.min.js",
  "resource/js/res_L-551dd41614.bgjson",
  "resource/js/thm-532513b441.js",
  "resource/sound/bac/bac_en_US-18d50fad5e.ogg",
  "resource/sound/bac/bac_en_US-b7b99c64bb.mp3",
  "resource/sound/bac/bac_zh_CN-a286ce57eb.ogg",
  "resource/sound/bac/bac_zh_CN-f5f463f174.mp3",
  "resource/sound/bac/bac_zh_HK-51aec7748d.mp3",
  "resource/sound/bac/bac_zh_HK-b3b47b4107.ogg",
  "resource/sound/bull/bull_en_US-0b0de4c2e8.mp3",
  "resource/sound/bull/bull_en_US-902bdd1926.ogg",
  "resource/sound/bull/bull_zh_CN-3d7548058b.mp3",
  "resource/sound/bull/bull_zh_CN-ba6c7ff1ac.ogg",
  "resource/sound/bull/bull_zh_HK-306e42271b.mp3",
  "resource/sound/bull/bull_zh_HK-fdc996792d.ogg",
  "resource/sound/col/col_en_US-02fba90af8.mp3",
  "resource/sound/col/col_en_US-af6b62806e.ogg",
  "resource/sound/col/col_zh_CN-3676df4035.ogg",
  "resource/sound/col/col_zh_CN-e719d368e3.mp3",
  "resource/sound/col/col_zh_HK-63cf77cb5c.ogg",
  "resource/sound/col/col_zh_HK-8b5bf15007.mp3",
  "resource/sound/common/common_en_US-581964c97c.ogg",
  "resource/sound/common/common_en_US-e054fef2d4.mp3",
  "resource/sound/common/common_zh_CN-1adfbde918.mp3",
  "resource/sound/common/common_zh_CN-8d494f9ebd.ogg",
  "resource/sound/common/common_zh_HK-3878e929b4.ogg",
  "resource/sound/common/common_zh_HK-c62e163d8a.mp3",
  "resource/sound/dt/dt_en_US-980d68c9eb.ogg",
  "resource/sound/dt/dt_en_US-c27e461ec2.mp3",
  "resource/sound/dt/dt_zh_CN-557cf87a87.mp3",
  "resource/sound/dt/dt_zh_CN-e5b6dfc1b8.ogg",
  "resource/sound/dt/dt_zh_HK-8822f82e7e.mp3",
  "resource/sound/dt/dt_zh_HK-c769fae0fd.ogg",
  "resource/sound/effect/effect-cb09da0c9b.ogg",
  "resource/sound/effect/effect-eac4952df6.mp3",
  "resource/sound/music/music-edef1702db.mp3",
  "resource/sound/rou/rou_en_US-94a7c4321c.ogg",
  "resource/sound/rou/rou_en_US-9d716515a2.mp3",
  "resource/sound/rou/rou_zh_CN-028ff772e6.ogg",
  "resource/sound/rou/rou_zh_CN-4ff42e759d.mp3",
  "resource/sound/rou/rou_zh_HK-3b993fdc6e.mp3",
  "resource/sound/rou/rou_zh_HK-afb03b3b52.ogg",
  "resource/sound/sibo/sibo_en_US-0b9fbcc045.mp3",
  "resource/sound/sibo/sibo_en_US-dc8ae1621b.ogg",
  "resource/sound/sibo/sibo_zh_CN-8325859bc5.ogg",
  "resource/sound/sibo/sibo_zh_CN-a7bdf00dff.mp3",
  "resource/sound/sibo/sibo_zh_HK-1bb4e5f9a2.ogg",
  "resource/sound/sibo/sibo_zh_HK-b814dd9a27.mp3",
  "resource/sound/war/war_en_US-765a4cd995.mp3",
  "resource/sound/war/war_en_US-85aa248019.ogg",
  "resource/sound/war/war_zh_CN-6a825f98da.mp3",
  "resource/sound/war/war_zh_CN-795d1df48a.ogg",
  "resource/sound/war/war_zh_HK-7b4fb34398.mp3",
  "resource/sound/war/war_zh_HK-dd9e7f38b2.ogg",
  "resource/sound/win3/win3_en_US-6f8ab72a43.mp3",
  "resource/sound/win3/win3_en_US-7340a0c5ac.ogg",
  "resource/sound/win3/win3_zh_CN-4deff5572e.ogg",
  "resource/sound/win3/win3_zh_CN-fa7c6e3db6.mp3",
  "resource/sound/win3/win3_zh_HK-56f6e2de51.mp3",
  "resource/sound/win3/win3_zh_HK-f9176f0691.ogg",
  "resource/web/close_btn-8022aa0d73.png",
  "resource/web/fullScreen_close-25f7d5443f.png",
  "resource/web/loading_ba_glow-1-6a42d2be34.png",
  "resource/web/loading_ba_glow-b1ce919b04.png",
  "resource/web/loading-a5abf61efd.gif",
  "resource/web/rotation-02490c80cb.gif",
  "resource/web/slideFull-075a983197.gif",
  "resource/web/style-6168458ad2.css",
  "resource/web/touchFull-df0d195621.gif"
];
console.warn("[sw_pwa] init htmlVersion", htmlVersion, version);
console.warn("[sw_pwa] init curCdn", curCdn, version);
console.warn("[sw_pwa] init domainPath", domainPath, version);
console.warn("[sw_pwa] init gamePath", gamePath, version);
startCheck();

//===============檢查線路代碼=========================
async function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/** 檢查可用線路 */
async function checkCdn() {
	console.warn("[sw_pwa] checkCdn!", version);
	let failCount = 0;
	let bSuccess = false;
	const total = cdnRes.length;
	return new Promise((resolve, reject) => {
		// 同時加載所有線路 只取得最快返回且解析成功的資料,忽略其他返回
		cdnRes.map(async url => {
			const fileName = url + gamePath + "config.json?v=" + Math.floor(1e4 * Math.random());
			try {
				const response = await fetch(fileName);
				if (response && response.status == 200 && !bSuccess) {
					const data = await response.json();
					if (data) {
						// 設置url             
						console.warn("[sw_pwa] set cdn", url, version);
						curCdn = url;
						bSuccess = true;
						resolve(url);
						return;
					}
				}
			} catch (error) {
				// 忽略錯誤文件
				console.warn("[sw_pwa] get cdn fail", url, error.toString(), version);
			}
			if (++failCount == total) {
				reject("all fail");
			}
		});
	});
}

/** 檢查可用線路 */
async function startCheck() {
	try {
		await checkCdn();
		console.warn("[sw_pwa] checkCdn end", bWaitCdn, version);
		if (bWaitCdn) callClients("reload");
	} catch (e) {
		console.error("serviceWorker_pwa sw checkCdn fail", e.toString(), version);
		setTimeout(startCheck, 3000);
	}
}

//===============緩存檔案代碼=========================

/** 檢查是否為當前版本檔案 */
function checkUrl(url) {
	var uri = new URL(url);
	url = uri.pathname.replace(domainPath, "");
	// 只處理當前目錄
	var bIn = cacheList.includes(url);
	return bIn;
}

/** 緩存檔案 */
async function putInCache(requestUrl, response) {
	if (checkUrl(requestUrl)) {
		if (version == htmlVersion) {
			var cloneRes = response.clone();
			var openCache = await caches.open(openName);
			openCache.put(requestUrl, cloneRes);
			console.warn("[sw_pwa] putInCache success", requestUrl, version);
		} else {
			console.warn("[sw_pwa] putInCache version diff", requestUrl, version);
		}
	} else {
		console.warn("[sw_pwa] putInCache not list ", requestUrl, version);
	}
}

/** 抓取新的html並緩存 */
async function cacheHtml(request) {
	var requestUrl = pwaHtml;
	if (request) requestUrl = request;
	var uri = new URL(requestUrl)
	try {
		response = await fetch(requestUrl);
		if (response && response.status == 200) {
			putInCache(requestUrl, response);
			return response;
		}
	} catch (e) { }
	return null;
}

/** 抓取檔案 */
async function fetchFile(uri, request) {
	var response;
	try {
		var requestUrl = uri.origin + uri.pathname;
		var cacheType = requestUrl == pwaHtml ? "reload" : "no-cache";
		if (requestUrl == pwaHtml) {
			//html 每次都抓取新的,抓取不到才使用緩存的
			response = await cacheHtml(request);
			if (response) return response;
		}
		response = await caches.match(requestUrl);
		if (!response) {
			if (curCdn && requestUrl != pwaHtml) {
				//替換url host
				var replaceUrl = requestUrl.replace(uri.origin, curCdn);
				replaceUrl = replaceUrl.replace(domainPath, gamePath);
				response = await fetch(replaceUrl);
				if (response && response.status == 200) {
					putInCache(requestUrl, response)
				}
			} else {
				response = await fetch(requestUrl);
			}
		}
	} catch (e) {
		console.error("serviceWorker_pwa sw fetch fail", requestUrl, e.toString(), version);
	}
	if (!response) {
		response = new Response("Network error happened", {
			status: 404,
			headers: { "Content-Type": "text/plain" },
		});
	}
	return response;
}


/** 檢查是否更新 */
async function checkSW() {
	try {
		let response = await fetch(self.location.href);
		if (response && response.status == 200) {
			const text = await response.text();
			var hasgRegex = /var hash = "(.*?)";/;
			var match = text.match(hasgRegex);
			console.warn("[sw_pwa] checkSW ", match, hash);
			if (match && match[1] != hash)
				callClients("unregister");
		}
	} catch (e) {
		console.error("[sw_pwa]  checkSW fail", e.toString(), version);
	}
}

/** 呼叫頁面reload */
function callClients(sType) {	// 
	self.clients.matchAll().then(clients => {
		console.warn("[sw_pwa] callClients clients", clients, version);
		clients.forEach(client => {
			client.postMessage({ type: sType });
		});
	});
}


self.addEventListener('install', function (event) {
	console.warn("[sw_pwa] install!", version);
	const checkWating = () => {
		if (self.serviceWorker.state == "installing" || self.serviceWorker.state == "installed") {
			console.warn("[sw_pwa] install check state", self.serviceWorker.state, curCdn, version);
			if (curCdn) self.skipWaiting();
			setTimeout(checkWating, 1000);
		}
	}
	checkWating();
});

// 缓存更新
self.addEventListener('activate', function (event) {
	async function deleteCurCache() {
		const openCache = await caches.open(openName);
		const keyNames = await openCache.keys();
		await Promise.all(keyNames.map(function (request) {
			//比對檔名是否存在於清單之中 不存在就清除
			var fileName = request.url;
			if (checkUrl(fileName) == false) {
				console.warn("[sw_pwa] deleteCurCache delete", fileName, version);
				return openCache.delete(request);
			}
		}));
		console.warn("[sw_pwa] deleteCurCache complete", version);
	}
	const doDeleteJob = async () => {
		await Promise.all([deleteCurCache()])
			.then(function () {
				console.warn("[sw_pwa] activate complete", version);
			})
	}
	console.warn("[sw_pwa] activate", version);
	self.clients.claim();
	event.waitUntil(doDeleteJob());
});


self.addEventListener('message', (event) => {
	if (event.data) {
		if (event.data.type === 'VERSION') {
			htmlVersion = event.data.value;
			console.warn("[sw_pwa] message VERSION", event.data, version);
			if (version == htmlVersion) cacheHtml();
		} else if (event.data.type === 'UPDATE') {
			checkSW();
		}
	}
});

self.addEventListener('fetch', function (event) {
	var request = event.request;
	var requestUrl = request.url;
	// console.warn("[sw_pwa] fetch", request, version);	
	// 只对 get 类型的请求进行拦截处理
	if (request.method !== 'GET') return false;
	//去掉網址參數
	if (requestUrl.match(/\?/)) requestUrl = requestUrl.split("?")[0];
	//排除pwa使用資料夾
	if (requestUrl.match("pwa_sw.js|pwa_dir|pwa.html")) return false;
	var uri = new URL(requestUrl)
	//排除排除非當前目錄
	if (!uri.pathname.match(domainPath)) return false;

	event.respondWith(fetchFile(uri, request));
});
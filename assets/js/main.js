/* ===== 三语国际化核心 ===== */
(function () {
  'use strict';

  // 语言字典：key -> {zh, ja, en}
  // 新增文案只需在此添加 key，并在 HTML 中加 data-i18n="key"
  var I18N = {
    // ---- 通用 ----
    nav_home: { zh: '首页', ja: 'ホーム', en: 'Home' },
    nav_terms: { zh: '用户协议', ja: '利用規約', en: 'Terms' },
    nav_privacy: { zh: '隐私政策', ja: 'プライバシーポリシー', en: 'Privacy' },
    nav_github: { zh: 'GitHub', ja: 'GitHub', en: 'GitHub' },
    home_title: { zh: 'iwonderland', ja: 'iwonderland', en: 'iwonderland' },
    home_apps: { zh: '我们的 App', ja: '私たちのアプリ', en: 'Our Apps' },
    home_card_desc: { zh: 'AI 语音跟随提词器，全屏与悬浮双模式。', ja: 'AI音声フォローテレプロンプター。全画面とフローティング。', en: 'AI voice-follow teleprompter with full & floating modes.' },

    // ---- Hero ----
    hero_badge: { zh: 'AI 语音跟随提词器', ja: 'AI音声フォローテレプロンプター', en: 'AI Voice-Follow Teleprompter' },
    hero_title1: { zh: '让文字跟着', ja: '声に合わせて', en: 'Script that follows' },
    hero_title2: { zh: '你的声音走', ja: '文字が流れる', en: 'your voice' },
    hero_sub: { zh: '全屏与悬浮双模式，AI 语音识别让脚本自动滚动。悬浮小窗可覆盖在任意 App 之上，拍摄、直播、演讲都能一遍过。', ja: '全画面とフローティングの2モード。AI音声認識でスクリプトが自動スクロール。どのアプリの上でも浮かぶ小窓で、撮影・配信・スピーチが一発で決まる。', en: 'Full-screen and floating modes with AI voice recognition auto-scroll. A floating window that hovers over any app — nail your shoot, stream, or speech every time.' },
    hero_cta_main: { zh: '下载 App', ja: 'アプリをダウンロード', en: 'Download the App' },
    hero_cta_secondary: { zh: '查看协议', ja: '規約を見る', en: 'View Terms' },

    // ---- 特性 ----
    feat_eyebrow: { zh: '核心功能', ja: '主な機能', en: 'Key Features' },
    feat_title: { zh: '为内容创作而生', ja: 'コンテンツ制作のために', en: 'Built for content creators' },
    feat_sub: { zh: '从拍摄到直播，一个提词器满足所有场景。', ja: '撮影から配信まで、あらゆるシーンに対応。', en: 'From filming to streaming, one teleprompter for every scene.' },
    feat1_title: { zh: 'AI 语音跟随', ja: 'AI音声フォロー', en: 'AI Voice Follow' },
    feat1_desc: { zh: '识别你的语速，脚本自动滚动，不用手动调整速度。', ja: '話す速さを認識して自動スクロール。速度の手動調整は不要。', en: 'Recognizes your pace and auto-scrolls. No manual speed adjustment.' },
    feat2_title: { zh: '悬浮任意 App', ja: 'どのアプリの上でも', en: 'Float over any app' },
    feat2_desc: { zh: '悬浮小窗覆盖在其他 App 之上，直播软件、聊天窗口都不耽误。', ja: '他のアプリの上に浮かぶ小窓。配信アプリもチャットも邪魔しない。', en: 'A floating window over any app — stream, chat, and more without interruption.' },
    feat3_title: { zh: '全屏与浮窗双模式', ja: '全画面・フローティング', en: 'Full & floating modes' },
    feat3_desc: { zh: '正式拍摄用全屏，日常使用用悬浮，一键切换。', ja: '本番撮影は全画面、日常はフローティング。ワンタップで切替。', en: 'Full-screen for pro shoots, floating for daily use. Switch in one tap.' },
    feat4_title: { zh: '多色文字', ja: '多色テキスト', en: 'Multi-color text' },
    feat4_desc: { zh: '暖黄、淡蓝等阅读舒适的颜色，适配不同光线。', ja: '暖かみのある色で、どんな光にも読みやすい。', en: 'Warm, easy-on-the-eyes colors for any lighting.' },
    feat5_title: { zh: '倒计时准备', ja: 'カウントダウン', en: 'Countdown' },
    feat5_desc: { zh: '3 秒倒计时，让你从容起势，开场更自然。', ja: '3秒のカウントダウンで余裕のスタート。', en: 'A 3-second countdown for a confident start.' },
    feat6_title: { zh: '三语支持', ja: '3言語対応', en: 'Trilingual' },
    feat6_desc: { zh: '日文、中文、英文界面，随系统语言自动切换。', ja: '日本語・中国語・英語。システム言語に自動追従。', en: 'Japanese, Chinese, English. Follows your system language.' },

    // ---- 对比 ----
    compare_eyebrow: { zh: '免费 vs Pro', ja: '無料 vs Pro', en: 'Free vs Pro' },
    compare_title: { zh: '解锁全部能力', ja: 'すべての機能を解放', en: 'Unlock everything' },
    compare_free: { zh: '免费版', ja: '無料版', en: 'Free' },
    compare_pro: { zh: 'Pro', ja: 'Pro', en: 'Pro' },
    cmp_scripts: { zh: '脚本数量', ja: 'スクリプト数', en: 'Scripts' },
    cmp_words: { zh: '单篇字数', ja: '文字数', en: 'Words' },
    cmp_ai: { zh: 'AI 语音跟随', ja: 'AI音声フォロー', en: 'AI voice follow' },
    cmp_color: { zh: '多色文字', ja: '多色テキスト', en: 'Multi-color' },
    cmp_pip: { zh: '悬浮任意 App', ja: 'どのアプリにも浮かべる', en: 'Float over any app' },
    cmp_countdown: { zh: '倒计时档位', ja: 'カウントダウン', en: 'Countdown' },
    cmp_free2: { zh: '2 个', ja: '2件', en: '2' },
    cmp_free500: { zh: '500 字', ja: '500字', en: '500' },
    cmp_free3s: { zh: '3 秒', ja: '3秒', en: '3s' },
    cmp_pro_x: { zh: '无限', ja: '無制限', en: 'Unlimited' },
    cmp_pro_all: { zh: '全部', ja: '全機能', en: 'All' },

    // ---- 页脚 ----
    footer_links: { zh: '链接', ja: 'リンク', en: 'Links' },
    footer_terms: { zh: '用户协议', ja: '利用規約', en: 'Terms of Service' },
    footer_privacy: { zh: '隐私政策', ja: 'プライバシーポリシー', en: 'Privacy Policy' },
    footer_rights: { zh: '保留所有权利', ja: 'All rights reserved.', en: 'All rights reserved.' },
    footer_tag: { zh: 'AI 语音跟随提词器', ja: 'AI音声フォローテレプロンプター', en: 'AI Voice-Follow Teleprompter' },
    lang_notice: { zh: '语言', ja: '言語', en: 'Language' },

    // ---- 协议页 ----
    terms_title: { zh: '用户协议', ja: '利用規約', en: 'Terms of Service' },
    terms_updated: { zh: '最后更新', ja: '最終更新', en: 'Last updated' },
    terms_date: { zh: '2026 年 8 月', ja: '2026年8月', en: 'August 2026' },
    terms_intro: { zh: '欢迎使用本应用。使用本应用即表示您同意本协议条款。', ja: '本アプリをご利用いただきありがとうございます。本アプリの利用をもって、本規約に同意したものとみなされます。', en: 'Welcome. By using this app you agree to these terms.' },

    // ---- 隐私页 ----
    privacy_title: { zh: '隐私政策', ja: 'プライバシーポリシー', en: 'Privacy Policy' },
    privacy_date: { zh: '2026 年 8 月', ja: '2026年8月', en: 'August 2026' },
    privacy_intro: { zh: '我们非常重视您的隐私。本政策说明我们如何处理您的数据。', ja: 'お客様のプライバシーを重視しています。本ポリシーではデータの取り扱いについて説明します。', en: 'We take your privacy seriously. This policy explains how we handle your data.' },

    // ---- 协议/隐私 段落（HTML，支持 <h3>/<p>/<ul>）----
    terms_s1_title: { zh: '1. 服务说明', ja: '1. サービスの説明', en: '1. Service Description' },
    terms_s1_body: { zh: '本应用提供提词器功能，包括全屏提词与悬浮浮窗提词。悬浮浮窗可在其他 App 之上显示，用于辅助拍摄、直播与演讲。', ja: '本アプリはテレプロンプター機能を提供します。全画面表示とフローティング表示に対応し、他のアプリの上にも表示できます。撮影・配信・スピーチを支援します。', en: 'This app provides teleprompter features including full-screen and floating modes. The floating window can display over other apps to assist filming, streaming, and speaking.' },
    terms_s2_title: { zh: '2. 订阅与购买', ja: '2. サブスクリプションと購入', en: '2. Subscription & Purchases' },
    terms_s2_body: { zh: '本应用提供自动续订订阅（月/年）与一次性买断。订阅将于当前周期结束时自动续订，除非在当前周期结束至少 24 小时前取消。购买通过 App Store 处理，我们不会获取您的支付信息。', ja: '自動更新サブスクリプション（月額・年額）と買い切りを提供します。サブスクリプションは現在の期間終了の24時間前までにキャンセルしない限り自動更新されます。購入はApp Storeを通じて処理され、当方はお客様の支払い情報を取得しません。', en: 'We offer auto-renewing subscriptions (monthly/yearly) and a one-time lifetime purchase. Subscriptions renew automatically unless canceled at least 24 hours before the current period ends. Purchases are processed by the App Store; we do not collect your payment information.' },
    terms_s3_title: { zh: '3. 取消订阅', ja: '3. サブスクリプションの解約', en: '3. Cancellation' },
    terms_s3_body: { zh: '您可随时在设备的系统设置或 App Store 账户设置中管理或取消订阅。取消后，您仍可在当前付费周期内继续使用 Pro 功能，直至周期结束。', ja: 'サブスクリプションはいつでもデバイスの設定またはApp Storeのアカウント設定から管理・解約できます。解約後も現在の期間が終了するまでPro機能を利用できます。', en: 'You can manage or cancel your subscription anytime in your device settings or App Store account settings. After canceling, you keep Pro features until the current period ends.' },
    terms_s4_title: { zh: '4. 退款', ja: '4. 返金', en: '4. Refunds' },
    terms_s4_body: { zh: '退款由 App Store 处理，请通过 Apple 支持提交退款请求。', ja: '返金はApp Storeが処理します。Appleサポートを通じて返金リクエストを送信してください。', en: 'Refunds are handled by the App Store. Please submit a refund request through Apple Support.' },
    terms_s5_title: { zh: '5. 知识产权', ja: '5. 知的財産権', en: '5. Intellectual Property' },
    terms_s5_body: { zh: '本应用的软件、界面、Logo 与内容均受版权保护。您不得复制、修改或分发本应用的任何部分。', ja: '本アプリのソフトウェア、UI、ロゴ、コンテンツは著作権で保護されています。本アプリのいかなる部分も複製・改変・配布することはできません。', en: 'The app software, interface, logo, and content are protected by copyright. You may not copy, modify, or distribute any part of this app.' },
    terms_s6_title: { zh: '6. 免责声明', ja: '6. 免責事項', en: '6. Disclaimer' },
    terms_s6_body: { zh: '本应用按"现状"提供，不附带任何明示或默示的保证。我们对因使用本应用产生的任何直接或间接损失不承担责任。', ja: '本アプリは「現状有姿」で提供され、明示的または黙示的な保証はありません。本アプリの利用により生じたいかなる直接的・間接的損害についても責任を負いません。', en: 'This app is provided "as is" without warranties of any kind. We are not liable for any direct or indirect damages arising from use of this app.' },
    terms_s7_title: { zh: '7. 协议变更', ja: '7. 規約の変更', en: '7. Changes to Terms' },
    terms_s7_body: { zh: '我们可能不时更新本协议。重大变更将在应用内或通过通知告知。', ja: '本規約は随時更新されることがあります。重要な変更はアプリ内または通知でお知らせします。', en: 'We may update these terms from time to time. Material changes will be announced in-app or via notification.' },

    privacy_s1_title: { zh: '1. 我们收集的数据', ja: '1. 収集するデータ', en: '1. Data We Collect' },
    privacy_s1_body: { zh: '脚本内容仅存储在您设备的本地。我们不会收集、上传或出售您的脚本数据。', ja: 'スクリプトの内容はお客様のデバイスにローカル保存されます。スクリプトデータを収集・アップロード・販売することはありません。', en: 'Script content is stored locally on your device only. We do not collect, upload, or sell your script data.' },
    privacy_s2_title: { zh: '2. 麦克风使用', ja: '2. マイクの使用', en: '2. Microphone Use' },
    privacy_s2_body: { zh: 'AI 语音跟随功能需使用麦克风进行语音识别。语音数据仅用于实时识别，不会上传或存储。', ja: 'AI音声フォロー機能は音声認識のためマイクを使用します。音声データはリアルタイム認識にのみ使用され、アップロード・保存はされません。', en: 'The AI voice-follow feature uses the microphone for speech recognition. Voice data is used only for real-time recognition and is not uploaded or stored.' },
    privacy_s3_title: { zh: '3. 支付信息', ja: '3. 支払い情報', en: '3. Payment Information' },
    privacy_s3_body: { zh: '购买通过 App Store 处理。我们不会收集、存储或访问您的支付信息。', ja: '購入はApp Storeを通じて処理されます。当方はお客様の支払い情報を収集・保存・アクセスしません。', en: 'Purchases are processed by the App Store. We do not collect, store, or access your payment information.' },
    privacy_s4_title: { zh: '4. 广告与分析', ja: '4. 広告と分析', en: '4. Ads & Analytics' },
    privacy_s4_body: { zh: '本应用不含第三方广告，不包含分析跟踪器。', ja: '本アプリは第三者広告を含まず、分析トラッカーも含みません。', en: 'This app contains no third-party ads and no analytics trackers.' },
    privacy_s5_title: { zh: '5. 数据删除', ja: '5. データの削除', en: '5. Data Deletion' },
    privacy_s5_body: { zh: '删除应用即可移除设备上存储的所有脚本数据。', ja: 'アプリを削除することで、デバイスに保存されたすべてのスクリプトデータを削除できます。', en: 'Deleting the app removes all script data stored on your device.' },
    privacy_s6_title: { zh: '6. 联系我们', ja: '6. お問い合わせ', en: '6. Contact' },
    privacy_s6_body: { zh: '如对本隐私政策有任何疑问，请通过 GitHub 与我们联系。', ja: '本プライバシーポリシーについてご質問がある場合は、GitHubからお問い合わせください。', en: 'If you have questions about this policy, please contact us via GitHub.' },
  };

  // 支持的语言
  var SUPPORTED = ['zh', 'ja', 'en'];

  // 当前语言（全局暴露给页面调用）
  window.i18n = {
    currentLang: 'en',
    t: function (key) {
      var dict = I18N[key];
      if (!dict) return key;
      return dict[this.currentLang] || dict['en'];
    },
    setLang: function (lang) {
      this.currentLang = lang;
      localStorage.setItem('qs_lang', lang);
      document.documentElement.lang = lang;
      this.render();
    },
    render: function () {
      // 更新所有 data-i18n 元素
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        el.textContent = window.i18n.t(key);
      });
      // 更新 data-i18n-placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', window.i18n.t(key));
      });
      // 更新语言切换按钮 active 状态
      document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === window.i18n.currentLang);
      });
      // 更新 title（data-i18n-title）
      var titleKey = document.querySelector('meta[name="i18n-title"]');
      if (titleKey) document.title = window.i18n.t(titleKey.getAttribute('content'));
    },
    detect: function () {
      // 1. localStorage 优先
      var saved = localStorage.getItem('qs_lang');
      if (saved && SUPPORTED.indexOf(saved) >= 0) return saved;
      // 2. 浏览器语言
      var nav = (navigator.language || 'en').toLowerCase();
      for (var i = 0; i < SUPPORTED.length; i++) {
        if (nav.indexOf(SUPPORTED[i]) === 0) return SUPPORTED[i];
      }
      return 'en';
    }
  };

  // 初始化
  function init() {
    // 语言按钮
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        window.i18n.setLang(btn.getAttribute('data-lang-btn'));
      });
    });
    // 设置初始语言
    window.i18n.setLang(window.i18n.detect());
  }

  // 确保 DOM 就绪
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

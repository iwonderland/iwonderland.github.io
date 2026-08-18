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

    // ---- 用户协议（完善版，参考 iubenda / 竞品结构）----
    terms_s1_title: { zh: '1. 协议适用范围', ja: '1. 規約の適用範囲', en: '1. Agreement Scope' },
    terms_s1_body: { zh: '本协议（"协议"）适用于您（"您"）对 FloatPrompt 应用（"本应用"）的下载、安装与使用。下载、安装或使用本应用，即表示您确认已阅读、理解并同意受本协议约束。若您不同意本协议，请勿下载或使用本应用。', ja: '本規約（「本規約」）は、FloatPrompt アプリ（「本アプリ」）のダウンロード・インストール・利用に適用されます。本アプリをダウンロード・インストール・利用した時点で、本規約を読了し、理解し、同意したものとみなされます。本規約に同意できない場合は、本アプリをダウンロード・利用しないでください。', en: 'These Terms of Service ("Terms") apply to your ("you") download, installation, and use of the FloatPrompt application ("the App"). By downloading, installing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not download or use the App.' },
    terms_s2_title: { zh: '2. 服务说明', ja: '2. サービスの説明', en: '2. Service Description' },
    terms_s2_body: { zh: '本应用是一款提词器工具，提供全屏提词与悬浮浮窗（画中画）两种模式，并通过 Apple 语音识别框架实现 AI 语音跟随。悬浮浮窗可在其他 App 之上显示，用于辅助拍摄、直播与演讲。', ja: '本アプリはテレプロンプター工具です。全画面表示とフローティング（ピクチャー・イン・ピクチャー）の2モードを提供し、Appleの音声認識フレームワークによりAI音声フォローを実現します。フローティングは他のアプリの上にも表示され、撮影・配信・スピーチを支援します。', en: 'The App is a teleprompter tool offering two modes: full-screen and floating (picture-in-picture). It provides AI voice-following via Apple speech recognition frameworks. The floating window can display over other apps to assist filming, streaming, and speaking.' },
    terms_s3_title: { zh: '3. 账户', ja: '3. アカウント', en: '3. Accounts' },
    terms_s3_body: { zh: '本应用无需注册账户。所有脚本内容仅存储在您的设备本地。我们不会创建、维护或访问与您相关的任何账户数据。', ja: '本アプリはアカウント登録を必要としません。すべてのスクリプトはお客様のデバイスにローカル保存されます。当方はアカウントデータを作成・管理・アクセスしません。', en: 'The App requires no account registration. All script content is stored locally on your device. We do not create, maintain, or access any account data associated with you.' },
    terms_s4_title: { zh: '4. 订阅与购买', ja: '4. サブスクリプションと購入', en: '4. Subscriptions & Purchases' },
    terms_s4_body: { zh: '本应用提供 Pro 自动续订订阅（月/年）与一次性买断。订阅将在当前周期结束时自动续订，除非您在周期结束至少 24 小时前取消。购买通过 App Store 处理，我们不会获取、存储或访问您的支付信息。', ja: '本アプリはPro自動更新サブスクリプション（月額・年額）と買い切りを提供します。サブスクリプションは、現在の期間終了の24時間前までにキャンセルしない限り自動更新されます。購入はApp Storeを通じて処理され、当方はお客様の支払い情報を取得・保存・アクセスしません。', en: 'The App offers Pro auto-renewing subscriptions (monthly/yearly) and a one-time lifetime purchase. Subscriptions renew automatically at the end of each period unless you cancel at least 24 hours before the period ends. Purchases are processed by the App Store; we do not collect, store, or access your payment information.' },
    terms_s5_title: { zh: '5. 免费试用', ja: '5. 無料トライアル', en: '5. Free Trial' },
    terms_s5_body: { zh: '本应用可能提供免费试用期。试用期结束时，若您未在试用期结束至少 24 小时前取消，将从您的 App Store 账户自动扣费并转为付费订阅。', ja: '本アプリは無料トライアル期間を提供することがあります。トライアル終了の24時間前までにキャンセルしない場合、トライアル終了時にApp Storeアカウントから自動的に課金され、有料サブスクリプションに移行します。', en: 'The App may offer a free trial period. At the end of the trial, if you have not canceled at least 24 hours before it ends, you will be charged automatically through your App Store account and converted to a paid subscription.' },
    terms_s6_title: { zh: '6. 取消订阅与退款', ja: '6. 解約と返金', en: '6. Cancellation & Refunds' },
    terms_s6_body: { zh: '您可随时在设备的系统设置或 App Store 账户设置中取消订阅。取消后，您仍可在当前付费周期内继续使用 Pro 功能直至周期结束。所有购买和退款均由 App Store 处理，退款请求请通过 Apple 支持提交。我们无法直接处理退款。', ja: 'サブスクリプションはいつでもデバイス設定またはApp Storeアカウント設定から解約できます。解約後も現在の期間が終了するまでPro機能を利用できます。購入・返金はすべてApp Storeが処理します。返金リクエストはAppleサポートを通じて提出してください。当方では直接処理できません。', en: 'You can cancel your subscription anytime in your device settings or App Store account settings. After canceling, you retain Pro features until the current period ends. All purchases and refunds are handled by the App Store. For refunds, please submit a request through Apple Support; we cannot process refunds directly.' },
    terms_s7_title: { zh: '7. 知识产权', ja: '7. 知的財産権', en: '7. Intellectual Property' },
    terms_s7_body: { zh: '本应用的软件、界面、Logo、图标与内容均受著作权及相关法律保护。您不得复制、修改、逆向工程、分发或创建衍生作品。您输入到本应用的脚本内容归您所有。', ja: '本アプリのソフトウェア、UI、ロゴ、アイコン、コンテンツは著作権および関連法により保護されています。複製・改変・リバースエンジニアリング・配布・二次的著作物の作成はできません。本アプリに入力したスクリプトの内容はお客様に帰属します。', en: 'The App software, interface, logo, icons, and content are protected by copyright and related laws. You may not copy, modify, reverse-engineer, distribute, or create derivative works. Script content you input into the App belongs to you.' },
    terms_s8_title: { zh: '8. 可接受使用', ja: '8. 許容される利用', en: '8. Acceptable Use' },
    terms_s8_body: { zh: '您同意仅以合法目的使用本应用，不得利用本应用从事任何违法、侵权、骚扰或侵犯他人权益的活动。', ja: 'お客様は、本アプリを合法的な目的でのみ使用することに同意します。違法行為、権利侵害、ハラスメント、その他他人の権利を侵害する目的で本アプリを利用してはなりません。', en: 'You agree to use the App only for lawful purposes and not to use it for any illegal, infringing, harassing, or rights-violating activity.' },
    terms_s9_title: { zh: '9. 免责声明', ja: '9. 免責事項', en: '9. Disclaimer of Warranties' },
    terms_s9_body: { zh: '本应用按"现状"和"可用"基础提供，不作任何明示或默示的保证，包括但不限于适销性、特定用途适用性及不侵权的保证。我们不保证本应用不会中断或无误。', ja: '本アプリは「現状有姿」および「利用可能な状態」で提供され、商品性、特定目的への適合性、非侵害性を含む明示的または黙示的な保証はありません。本アプリが中断やエラーなく動作することを保証しません。', en: 'The App is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the App will be uninterrupted or error-free.' },
    terms_s10_title: { zh: '10. 责任限制', ja: '10. 責任の制限', en: '10. Limitation of Liability' },
    terms_s10_body: { zh: '在法律允许的最大范围内，我们不对因使用或无法使用本应用而产生的任何间接、附带、特殊或后果性损害承担责任，包括但不限于利润损失、数据丢失或业务中断。', ja: '法令が許す最大限の範囲で、当方は本アプリの利用または利用不能によって生じたいかなる間接的・付随的・特別・結果的損害（利益損失、データ損失、事業中断を含みます）についても責任を負いません。', en: 'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from use or inability to use the App, including but not limited to loss of profits, data, or business interruption.' },
    terms_s11_title: { zh: '11. 终止', ja: '11. 終了', en: '11. Termination' },
    terms_s11_body: { zh: '您可随时停止使用本应用。若您违反本协议，我们有权在通知或不通知的情况下终止您对本应用的访问。', ja: 'お客様はいつでも本アプリの利用を停止できます。お客様が本規約に違反した場合、当方は通知の有無にかかわらず本アプリへのアクセスを終了する権利を有します。', en: 'You may stop using the App at any time. If you breach these Terms, we reserve the right to terminate your access to the App, with or without notice.' },
    terms_s12_title: { zh: '12. 适用法律与变更', ja: '12. 準拠法と変更', en: '12. Governing Law & Changes' },
    terms_s12_body: { zh: '本协议受适用法律管辖。我们可能不时更新本协议，重大变更将在应用内通知。您在本协议更新后继续使用本应用，即表示接受更新后的条款。', ja: '本規約は適用法令に準拠します。当方は本規約を随時更新することがあります。重要な変更はアプリ内でお知らせします。更新後に本アプリを継続利用した場合、更新後の条項に同意したものとみなされます。', en: 'These Terms are governed by applicable law. We may update these Terms from time to time, with material changes notified in-app. Your continued use of the App after such updates constitutes acceptance of the revised terms.' },

    // ---- 隐私政策（完善版，GDPR/日本/中国合规）----
    privacy_s1_title: { zh: '1. 引言与数据控制者', ja: '1. はじめにと管理者', en: '1. Introduction & Controller' },
    privacy_s1_body: { zh: '本隐私政策说明 FloatPrompt（"我们"）如何处理您的数据。我们是本应用的数据控制者。我们遵循"数据最小化"原则，仅处理提供服务所必需的数据。', ja: '本プライバシーポリシーは、FloatPrompt（「当方」）がお客様のデータをどのように取り扱うかを説明します。当方は本アプリのデータ管理者です。「データ最小化」の原則に従い、サービス提供に必要なデータのみを処理します。', en: 'This Privacy Policy explains how FloatPrompt ("we") handles your data. We are the data controller for the App. We follow the principle of data minimization, processing only what is necessary to provide the service.' },
    privacy_s2_title: { zh: '2. 我们收集的数据', ja: '2. 収集するデータ', en: '2. Data We Collect' },
    privacy_s2_body: { zh: '脚本内容仅存储在您设备的本地，我们不会收集、上传、出售或共享您的脚本数据。本应用不含第三方广告，不含分析跟踪器。', ja: 'スクリプトの内容はお客様のデバイスにローカル保存されます。当方はスクリプトデータを収集・アップロード・販売・共有しません。本アプリは第三者広告を含まず、分析トラッカーも含みません。', en: 'Script content is stored locally on your device only. We do not collect, upload, sell, or share your script data. The App contains no third-party ads and no analytics trackers.' },
    privacy_s3_title: { zh: '3. 麦克风与语音识别', ja: '3. マイクと音声認識', en: '3. Microphone & Speech Recognition' },
    privacy_s3_body: { zh: 'AI 语音跟随功能需要使用麦克风并通过 Apple 语音识别框架（SFSpeechRecognizer）进行实时识别。语音数据仅用于实时识别文字匹配，用于驱动脚本滚动，不会上传到我们的服务器或存储。语音识别服务由 Apple 提供，受 Apple 隐私政策约束。', ja: 'AI音声フォロー機能は、マイクとApple音声認識フレームワーク（SFSpeechRecognizer）を使用してリアルタイム認識を行います。音声データはスクリプトのスクロールを駆動するためのリアルタイム文字マッチングにのみ使用され、当方のサーバーにアップロード・保存されることはありません。音声認識サービスはAppleが提供し、Appleのプライバシーポリシーに従います。', en: 'The AI voice-follow feature uses the microphone and Apple speech recognition framework (SFSpeechRecognizer) for real-time recognition. Voice data is used only for real-time text matching to drive script scrolling; it is not uploaded to our servers or stored. Speech recognition is provided by Apple and subject to Apple\'s privacy policy.' },
    privacy_s4_title: { zh: '4. 支付信息', ja: '4. 支払い情報', en: '4. Payment Information' },
    privacy_s4_body: { zh: '所有购买和订阅通过 App Store 处理。我们不会收集、存储或访问您的支付信息（如信用卡号、账单地址）。支付相关数据处理受 Apple 隐私政策约束。', ja: 'すべての購入・サブスクリプションはApp Storeを通じて処理されます。当方は支払い情報（クレジットカード番号、請求先住所など）を収集・保存・アクセスしません。支払い関連データの処理はAppleのプライバシーポリシーに従います。', en: 'All purchases and subscriptions are processed through the App Store. We do not collect, store, or access your payment information (such as card numbers or billing addresses). Payment-related data processing is subject to Apple\'s privacy policy.' },
    privacy_s5_title: { zh: '5. 第三方服务', ja: '5. 第三者サービス', en: '5. Third-Party Services' },
    privacy_s5_body: { zh: '本应用使用的第三方服务包括：Apple（语音识别、App Store 购买、iCloud 可选备份）。我们使用的 Apple 官方服务仅在您主动使用相应功能时处理数据。本应用不集成任何广告网络、社交媒体跟踪或第三方分析 SDK。', ja: '本アプリが使用する第三者サービスには、Apple（音声認識、App Store購入、iCloudバックアップ）が含まれます。Apple公式サービスは、お客様が対応機能を能動的に使用した場合にのみデータを処理します。本アプリは広告ネットワーク、SNS追跡、第三者分析SDKを統合していません。', en: 'Third-party services used by the App include Apple (speech recognition, App Store purchases, optional iCloud backup). Apple\'s official services process data only when you actively use the corresponding feature. The App integrates no ad networks, social-media tracking, or third-party analytics SDKs.' },
    privacy_s6_title: { zh: '6. 数据保留', ja: '6. データの保持', en: '6. Data Retention' },
    privacy_s6_body: { zh: '脚本内容保存在您的设备上，直到您删除它们或卸载应用。语音识别数据为实时处理，不会保留。我们不在服务器上存储任何个人数据。', ja: 'スクリプトはお客様が削除するかアプリをアンインストールするまで、デバイスに保持されます。音声認識データはリアルタイム処理され、保持されません。当方はサーバー上に個人データを保存しません。', en: 'Script content is kept on your device until you delete it or uninstall the App. Speech recognition data is processed in real time and not retained. We store no personal data on servers.' },
    privacy_s7_title: { zh: '7. 您的权利', ja: '7. お客様の権利', en: '7. Your Rights' },
    privacy_s7_body: { zh: '根据适用的隐私法律（包括 GDPR、日本《个人信息保护法》和中国《个人信息保护法》），您有权访问、更正、删除您的个人数据。由于我们不在服务器上存储您的数据，您可以直接在设备上管理、删除所有数据。', ja: '適用されるプライバシー法（GDPR、日本の個人情報保護法、中国の個人情報保護法を含む）に基づき、お客様は個人データへのアクセス、訂正、削除の権利を有します。当方はサーバー上にデータを保存しないため、すべてのデータをデバイス上で直接管理・削除できます。', en: 'Under applicable privacy laws (including GDPR, Japan\'s Act on the Protection of Personal Information, and China\'s PIPL), you have the right to access, correct, and delete your personal data. As we store no data on servers, you can manage and delete all data directly on your device.' },
    privacy_s8_title: { zh: '8. 儿童隐私', ja: '8. 子どものプライバシー', en: '8. Children\'s Privacy' },
    privacy_s8_body: { zh: '本应用不面向 13 岁以下儿童，也不有意收集儿童的个人数据。', ja: '本アプリは13歳未満の子どもを対象としておらず、子どもの個人データを意図的に収集しません。', en: 'The App is not intended for children under 13 and does not knowingly collect personal data from children.' },
    privacy_s9_title: { zh: '9. 国际数据传输', ja: '9. 国際データ転送', en: '9. International Data Transfers' },
    privacy_s9_body: { zh: '由于我们不在自己的服务器上存储您的数据，国际数据传输仅可能发生在您使用 Apple 官方服务（如语音识别）时，Apple 的数据处理受其跨境传输保障措施（如标准合同条款）约束。', ja: '当方はサーバー上にデータを保存しないため、国際データ転送はApple公式サービス（音声認識など）利用時にのみ発生し得ます。Appleのデータ処理は、標準契約条項などの国境を越えた転送の保障措置に従います。', en: 'As we store no data on our own servers, international data transfers can only occur when you use Apple\'s official services (e.g., speech recognition). Apple\'s data processing is governed by its cross-border transfer safeguards (e.g., Standard Contractual Clauses).' },
    privacy_s10_title: { zh: '10. 安全', ja: '10. セキュリティ', en: '10. Security' },
    privacy_s10_body: { zh: '由于您的数据仅存储在本地设备上，安全性主要由您的设备与 iOS 系统保障。我们建议您启用设备锁和定期备份。', ja: 'お客様のデータはローカルデバイスにのみ保存されるため、セキュリティは主にデバイスとiOSによって保護されます。デバイスロックの有効化と定期的なバックアップをお勧めします。', en: 'As your data is stored only on your local device, security is primarily protected by your device and iOS. We recommend enabling device lock and regular backups.' },
    privacy_s11_title: { zh: '11. 政策变更', ja: '11. ポリシーの変更', en: '11. Changes to This Policy' },
    privacy_s11_body: { zh: '我们可能不时更新本隐私政策。如有重大变更，我们将在应用内通知您。更新后的政策将在本页发布，并注明更新日期。', ja: '当方は本プライバシーポリシーを随時更新することがあります。重要な変更がある場合はアプリ内でお知らせします。更新後のポリシーは本ページに掲載され、更新日が記載されます。', en: 'We may update this Privacy Policy from time to time. If there are material changes, we will notify you in-app. The updated policy will be posted on this page with its revision date.' },
    privacy_s12_title: { zh: '12. 联系我们', ja: '12. お問い合わせ', en: '12. Contact Us' },
    privacy_s12_body: { zh: '如对本隐私政策有任何疑问，请通过 GitHub 与我们联系：https://github.com/iwonderland', ja: '本プライバシーポリシーについてご質問がある場合は、GitHubからお問い合わせください：https://github.com/iwonderland', en: 'If you have any questions about this policy, please contact us via GitHub: https://github.com/iwonderland' },
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

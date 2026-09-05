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
    terms_s1_body: { zh: '本协议（"协议"）适用于您（"您"）对随声悬浮提词应用（"本应用"）的下载、安装与使用。下载、安装或使用本应用，即表示您确认已阅读、理解并同意受本协议约束。若您不同意本协议，请勿下载或使用本应用。', ja: '本規約（「本規約」）は、音声テレプロンプター アプリ（「本アプリ」）のダウンロード・インストール・利用に適用されます。本アプリをダウンロード・インストール・利用した時点で、本規約を読了し、理解し、同意したものとみなされます。本規約に同意できない場合は、本アプリをダウンロード・利用しないでください。', en: 'These Terms of Service ("Terms") apply to your ("you") download, installation, and use of the FloatPrompt application ("the App"). By downloading, installing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not download or use the App.' },
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
    privacy_s1_body: { zh: '本隐私政策说明随声悬浮提词（"我们"）如何处理您的数据。我们是本应用的数据控制者。我们遵循"数据最小化"原则，仅处理提供服务所必需的数据。', ja: '本プライバシーポリシーは、音声テレプロンプター（「当方」）がお客様のデータをどのように取り扱うかを説明します。当方は本アプリのデータ管理者です。「データ最小化」の原則に従い、サービス提供に必要なデータのみを処理します。', en: 'This Privacy Policy explains how FloatPrompt ("we") handles your data. We are the data controller for the App. We follow the principle of data minimization, processing only what is necessary to provide the service.' },
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
    privacy_s8_body: { zh: '本应用不含儿童不宜内容，也未专门针对儿童设计。我们不会故意收集 13 岁以下儿童的个人数据。如您认为我们无意中收集了儿童数据，请通过联系我们处理。', ja: '本アプリには子どもに不適切なコンテンツは含まれておらず、子ども向けに特別に設計されたものではありません。13歳未満の子どもの個人データを意図的に収集することはありません。万一、子どものデータを収集したと思われる場合は、お問い合わせください。', en: 'The App contains no content inappropriate for children and is not specifically designed for children. We do not knowingly collect personal data from children under 13. If you believe we have inadvertently collected children\'s data, please contact us.' },
    privacy_s9_title: { zh: '9. 国际数据传输', ja: '9. 国際データ転送', en: '9. International Data Transfers' },
    privacy_s9_body: { zh: '由于我们不在自己的服务器上存储您的数据，国际数据传输仅可能发生在您使用 Apple 官方服务（如语音识别）时，Apple 的数据处理受其跨境传输保障措施（如标准合同条款）约束。', ja: '当方はサーバー上にデータを保存しないため、国際データ転送はApple公式サービス（音声認識など）利用時にのみ発生し得ます。Appleのデータ処理は、標準契約条項などの国境を越えた転送の保障措置に従います。', en: 'As we store no data on our own servers, international data transfers can only occur when you use Apple\'s official services (e.g., speech recognition). Apple\'s data processing is governed by its cross-border transfer safeguards (e.g., Standard Contractual Clauses).' },
    privacy_s10_title: { zh: '10. 安全', ja: '10. セキュリティ', en: '10. Security' },
    privacy_s10_body: { zh: '由于您的数据仅存储在本地设备上，安全性主要由您的设备与 iOS 系统保障。我们建议您启用设备锁和定期备份。', ja: 'お客様のデータはローカルデバイスにのみ保存されるため、セキュリティは主にデバイスとiOSによって保護されます。デバイスロックの有効化と定期的なバックアップをお勧めします。', en: 'As your data is stored only on your local device, security is primarily protected by your device and iOS. We recommend enabling device lock and regular backups.' },
    privacy_s11_title: { zh: '11. 政策变更', ja: '11. ポリシーの変更', en: '11. Changes to This Policy' },
    privacy_s11_body: { zh: '我们可能不时更新本隐私政策。如有重大变更，我们将在应用内通知您。更新后的政策将在本页发布，并注明更新日期。', ja: '当方は本プライバシーポリシーを随時更新することがあります。重要な変更がある場合はアプリ内でお知らせします。更新後のポリシーは本ページに掲載され、更新日が記載されます。', en: 'We may update this Privacy Policy from time to time. If there are material changes, we will notify you in-app. The updated policy will be posted on this page with its revision date.' },
    privacy_s12_title: { zh: '12. 联系我们', ja: '12. お問い合わせ', en: '12. Contact Us' },

    // ===================== Subfolks（订阅管家） =====================
    sub_card_desc: { zh: '全家订阅账单，一处管好。扣费前提醒，不再多花钱。', ja: '家族のサブスク料金を、ひとつに。引き落とし前に通知。', en: 'All your family subscriptions, one place. Reminders before every charge.' },
    sub_footer_tag: { zh: '家庭订阅管理', ja: '家族のサブスク管理', en: 'Family Subscription Tracker' },

    // ---- Hero ----
    sub_hero_badge: { zh: '管理全家的订阅', ja: '家族のサブスク管理', en: 'Manage every subscription' },
    sub_hero_title1: { zh: '订阅再多，', ja: 'サブスクが増えても、', en: 'No matter how many' },
    sub_hero_title2: { zh: '心里有数', ja: '見落としなし', en: 'subscriptions you have' },
    sub_hero_sub: { zh: '和家人一起管理订阅账单：到期前自动提醒、按真实货币记账、小组件一眼看清，避免忘了取消而白扣钱。', ja: '家族でサブスク料金を管理。更新日前に通知、本来の通貨で記録、ウィジェットで一目瞭然。解約し忘れによるムダな課金を防ぎます。', en: 'Track subscriptions together with your family — automatic charge reminders, real-currency records, widgets at a glance, so you never pay for what you forgot to cancel.' },

    // ---- 特性 ----
    sub_feat_eyebrow: { zh: '核心功能', ja: '主な機能', en: 'Key Features' },
    sub_feat_title: { zh: '把账单变成安心', ja: '料金管理を、安心に', en: 'Subscriptions, without the worry' },
    sub_feat_sub: { zh: '一家人的订阅都能记录、都能提醒、都不白扣钱。', ja: '家族みんなのサブスクを記録・通知・ムダ払い防止。', en: 'Record them all, get reminded, never overpay.' },
    sub_feat1_title: { zh: '家人共管', ja: '家族で共有', en: 'Shared with family' },
    sub_feat1_desc: { zh: '成员的订阅都记录在一起，谁开谁关一目了然。', ja: '家族それぞれのサブスクをまとめて把握。', en: 'Everyone\'s subscriptions in one shared view.' },
    sub_feat2_title: { zh: '扣费前提醒', ja: '更新日前に通知', en: 'Charge reminders' },
    sub_feat2_desc: { zh: '到期前提前通知，忘了取消也能及时止损。', ja: '期限前に通知し、解約し忘れを防止。', en: 'Know before every renewal — cancel in time.' },
    sub_feat3_title: { zh: '真实货币记账', ja: '本来の通貨で記録', en: 'Real-currency records' },
    sub_feat3_desc: { zh: '每个订阅按所属货币记录，汇率每日更新，不折算混淆。', ja: 'サブスク本来の通貨で記録。為替は毎日更新。', en: 'Each charge in its own currency, with daily-updated rates.' },
    sub_feat4_title: { zh: '主屏小组件', ja: 'ホーム画面ウィジェット', en: 'Home widgets' },
    sub_feat4_desc: { zh: '下次扣款、本月账单，不开 App 也能一眼看到。', ja: '次の引き落としを、アプリを開かず一目で。', en: 'Next charges at a glance, without opening the app.' },
    sub_feat5_title: { zh: 'iCloud 同步', ja: 'iCloud 同期', en: 'iCloud sync' },
    sub_feat5_desc: { zh: '换机、家人设备间数据自动同步，不怕丢失。', ja: '端末が変わっても家族のデバイスと自動同期。', en: 'Always in sync across your family\'s devices.' },
    sub_feat6_title: { zh: '统计洞察', ja: '統計インサイト', en: 'Insights' },
    sub_feat6_desc: { zh: '每月订阅开支、省钱情况一目了然。', ja: '月々のサブスク支出や節約をひと目で。', en: 'See monthly spend and savings clearly.' },

    // ---- 对比 ----
    sub_cmp_eyebrow: { zh: '免费 vs Ultra', ja: '無料 vs Ultra', en: 'Free vs Ultra' },
    sub_cmp_title: { zh: '按需选择', ja: 'ニーズに合わせて', en: 'Pick what fits' },
    sub_cmp_free: { zh: '免费版', ja: '無料版', en: 'Free' },
    sub_cmp_ultra: { zh: 'Ultra', ja: 'Ultra', en: 'Ultra' },
    sub_cmp_count: { zh: '可记录订阅条数', ja: '記録できるサブスク数', en: 'Subscriptions tracked' },
    sub_cmp_family: { zh: '家人共管', ja: '家族での共有', en: 'Shared with family' },
    sub_cmp_remind: { zh: '扣费前提醒', ja: '更新日前の通知', en: 'Charge reminders' },
    sub_cmp_widgets: { zh: '小组件 / 统计', ja: 'ウィジェット/統計', en: 'Widgets & stats' },
    sub_cmp_icloud: { zh: 'iCloud 同步', ja: 'iCloud 同期', en: 'iCloud sync' },
    sub_cmp_updates: { zh: '以后所有更新', ja: '今後の全アップデート', en: 'All future updates' },
    sub_cmp_5: { zh: '5 条', ja: '5件', en: '5' },
    sub_cmp_inf: { zh: '无限', ja: '無制限', en: 'Unlimited' },

    // ---- 用户协议（Subfolks）----
    sub_terms_date: { zh: '2026 年 9 月', ja: '2026年9月', en: 'September 2026' },
    sub_terms_intro: { zh: '欢迎使用 Subfolks（"本应用"）。本协议说明您使用 Subfolks 的权利与义务。下载、安装或使用本应用，即表示您确认已阅读、理解并同意本协议；若不同意，请勿使用本应用。', ja: 'Subfolks（「本アプリ」）をご利用いただきありがとうございます。本規約は Subfolks の利用に関する権利と義務を定めます。ダウンロード・インストール・利用をもって本規約に同意したものとみなされます。同意できない場合はご利用をお控えください。', en: 'Welcome to Subfolks ("the App"). These Terms set out your rights and obligations when using Subfolks. By downloading, installing, or using the App, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, please do not use the App.' },
    sub_terms_s1_title: { zh: '1. 协议适用范围与同意', ja: '1. 規約の適用範囲と同意', en: '1. Scope & Agreement' },
    sub_terms_s1_body: { zh: '本协议适用于您（"您"）对 Subfolks（"本应用"）的下载、安装与使用。本应用由 iwonderland（"我们"）提供，是一款帮助个人及家庭记录和管理订阅服务的 iOS 应用。下载、安装或使用本应用即表示您同意受本协议约束。', ja: '本規約は、お客様（「お客様」）による Subfolks（「本アプリ」）のダウンロード・インストール・利用に適用されます。本アプリは iwonderland（「当方」）が提供する、個人および家族向けのサブスクリプション管理アプリです。ダウンロード・インストール・利用をもって本規約に同意したものとみなされます。', en: 'These Terms apply to your download, installation, and use of Subfolks. The App is an iOS subscription manager provided by iwonderland ("we") for individuals and families. By downloading, installing, or using the App, you agree to be bound by these Terms.' },
    sub_terms_s2_title: { zh: '2. 服务说明', ja: '2. サービスの説明', en: '2. Service Description' },
    sub_terms_s2_body: { zh: '本应用帮助您和家人集中管理订阅服务，主要包括：记录订阅与成员信息、到期/扣费前提醒、按订阅所属真实货币记账并使用每日更新的汇率换算、主屏小组件展示、消费统计，以及可选的 iCloud 同步。提醒功能为辅助性质，实际扣费时间与金额以各服务方为准。', ja: '本アプリは、サブスクを家族とまとめて管理するためのものです。主な機能：サブスクとメンバーの記録、更新・引き落とし前の通知、サブスク本来の通貨での記録と毎日更新の為替換算、ホーム画面ウィジェット、支出統計、任意の iCloud 同期。通知は補助機能であり、実際の引き落とし日時・金額は各サービスの規定に従います。', en: 'The App helps you and your family manage subscriptions in one place, including: recording subscriptions and members, renewal reminders, recording in each subscription\'s real currency with daily-updated exchange rates, home-screen widgets, spending insights, and optional iCloud sync. Reminders are assistance only; actual charges follow each provider\'s terms.' },
    sub_terms_s3_title: { zh: '3. 账号与数据', ja: '3. アカウントとデータ', en: '3. Accounts & Data' },
    sub_terms_s3_body: { zh: '本应用无需注册账号，我们不为您创建或维护任何账户。您录入的订阅与成员信息默认仅保存在您的设备本地。若您开启 iCloud 同步，数据将经 Apple iCloud 在其加密基础上于同一 iCloud 账号下的设备间同步；同步内容仅限订阅与成员记录，语言、货币等本地偏好不同步。', ja: '本アプリはアカウント登録を必要とせず、当方はお客様のアカウントを作成・管理しません。入力されたサブスク・メンバー情報はデフォルトで端末内にのみ保存されます。iCloud 同期を有効にした場合、Apple iCloud の暗号化のもと、同一 iCloud アカウントの端末間で同期されます。同期対象はサブスクとメンバーの記録のみで、言語・通貨などのローカル設定は同期されません。', en: 'The App requires no account; we do not create or maintain accounts for you. Data you enter is stored on your device by default. If you enable iCloud sync, it is synced under Apple iCloud\'s encryption across devices on the same iCloud account; only subscription and member records sync — local preferences such as language or currency do not.' },
    sub_terms_s4_title: { zh: '4. 免费版与 Ultra 一次性买断', ja: '4. 無料版と Ultra 買い切り', en: '4. Free Version & Ultra Purchase' },
    sub_terms_s4_body: { zh: '本应用可免费使用：免费版限制可记录的订阅条数为 5 条，其余功能均可用。Ultra 是一次性买断（Non-Consumable），用于解除条数上限并支持后续更新，不包含任何自动续订、试用期或定期费用。购买与恢复购买均由 Apple App Store 处理，我们不会获取、存储或访问您的支付信息。', ja: '本アプリは無料で利用でき、無料版では記録できるサブスクが5件までに制限されます（その他の機能はすべて利用可能）。Ultra は自動更新・試用期間・定期料金のない買い切り（Non-Consumable）であり、上限の解除と今後のアップデートを含みます。購入・購入の復元は App Store が処理し、当方は支払い情報を取得・保存・アクセスしません。', en: 'The App is free to use: the free version limits recorded subscriptions to 5, while all other features remain available. Ultra is a one-time (Non-Consumable) purchase that removes the cap and covers future updates; it has no auto-renewal, trial, or recurring fees. Purchases and restore are handled by the App Store; we do not collect, store, or access your payment information.' },
    sub_terms_s5_title: { zh: '5. 恢复购买与退款', ja: '5. 購入の復元と返金', en: '5. Restore & Refunds' },
    sub_terms_s5_body: { zh: '更换设备或重装后，您可通过应用内的"恢复购买"从 App Store 恢复已购的 Ultra 状态。恢复结果由 App Store 验证。所有购买与退款均由 Apple 处理；如您需要退款，请通过 Apple 支持或"报告问题"提交，我们无法直接办理退款。', ja: '端末変更や再インストール後は、アプリ内の「購入を復元」から App Store の Ultra 購入状態を復元できます。復元の結果は App Store が検証します。購入・返金はすべて Apple が処理します。返金を希望される場合は Apple サポートまたは「問題を報告」から申請してください。当方は直接返金できません。', en: 'After changing devices or reinstalling, you can restore your Ultra purchase from the App Store using "Restore Purchases" in the App. Restorations are verified by the App Store. All purchases and refunds are handled by Apple; for refunds, please contact Apple Support or use "Report a Problem". We cannot process refunds directly.' },
    sub_terms_s6_title: { zh: '6. 提醒与本地通知', ja: '6. 通知について', en: '6. Reminders & Notifications' },
    sub_terms_s6_body: { zh: '到期提醒由 iOS 在您的设备本地排定，仅在获得您授权的设备上出现。您可以随时在系统设置中管理或关闭通知权限。提醒不构成对扣费时间或金额的保证，请以各服务方账单为准。', ja: '更新リマインダーは iOS により端末上でローカルにスケジュールされ、許可した端末にのみ表示されます。通知権限はいつでもシステム設定で管理・無効化できます。通知は引き落とし日時・金額を保証するものではなく、各サービスの請求が優先されます。', en: 'Renewal reminders are scheduled locally by iOS and appear only on devices you authorize. You can manage or disable notification permissions anytime in system settings. Reminders do not guarantee charge timing or amounts; each provider\'s invoice governs.' },
    sub_terms_s7_title: { zh: '7. iCloud 同步', ja: '7. iCloud 同期', en: '7. iCloud Sync' },
    sub_terms_s7_body: { zh: 'iCloud 同步为可选项，需您主动开启且登录 iCloud 并启用 iCloud 云盘。首次开启时若云端与本机均有数据，本应用会请您选择合并、以云端覆盖或以本机覆盖；选择后不可由我们代为撤销，请谨慎操作。同步由 Apple CloudKit 提供，不经过我们任何服务器。', ja: 'iCloud 同期は任意機能で、お客様が有効にし、iCloud へのサインインと iCloud ドライブの有効化が必要です。初回有効化時にクラウドと端末の両方にデータがある場合、統合・クラウドで上書き・端末で上書きのいずれかを選択していただきます。選択後は当方が取り消すことはできませんので、ご注意ください。同期は Apple CloudKit が提供し、当方のサーバーは一切経由しません。', en: 'iCloud sync is optional and requires you to enable it while signed in to iCloud with iCloud Drive on. If both iCloud and this device already have data at first enablement, the App asks you to choose merge, overwrite with cloud, or overwrite with local; we cannot undo that choice, so please proceed carefully. Syncing is provided by Apple CloudKit and never passes through our servers.' },
    sub_terms_s8_title: { zh: '8. 知识产权', ja: '8. 知的財産権', en: '8. Intellectual Property' },
    sub_terms_s8_body: { zh: '本应用的软件、界面、图标、名称与内容均受著作权及相关法律保护。您不得复制、修改、逆向工程、反编译或分发本应用。您录入的订阅与成员数据归您所有，本应用仅在您要求时（如同步）处理这些数据。', ja: '本アプリのソフトウェア・UI・アイコン・名称・コンテンツは著作権および関連法により保護されています。複製・改変・リバースエンジニアリング・逆コンパイル・配布はできません。お客様が入力したデータはお客様に帰属し、本アプリは同期などお客様の指示がある場合にのみこれを処理します。', en: 'The App\'s software, interface, icons, name, and content are protected by copyright and related laws. You may not copy, modify, reverse-engineer, decompile, or distribute them. Data you enter belongs to you; the App processes it only at your direction (for example, sync).' },
    sub_terms_s9_title: { zh: '9. 可接受使用', ja: '9. 許容される利用', en: '9. Acceptable Use' },
    sub_terms_s9_body: { zh: '您同意仅以合法、正当目的使用本应用，不得利用本应用从事任何违法、侵权、欺诈、骚扰或损害他人权益的活动，也不得试图规避或破坏本应用的任何技术限制。', ja: 'お客様は本アプリを合法的かつ正当な目的でのみ使用することに同意します。違法行為・権利侵害・詐欺・ハラスメント・他人の権利を害する行為、および技術的制限の回避・破壊を試みてはなりません。', en: 'You agree to use the App only for lawful and legitimate purposes and not to use it for any illegal, infringing, fraudulent, harassing, or harmful activity, nor attempt to circumvent or disrupt any technical limitation of the App.' },
    sub_terms_s10_title: { zh: '10. 免责声明与责任限制', ja: '10. 免責事項と責任の制限', en: '10. Disclaimers & Limitation of Liability' },
    sub_terms_s10_body: { zh: '本应用按"现状"与"可用"基础提供，不作任何明示或默示保证。提醒、统计等均为辅助，我们不保证其绝对准确或不会中断。在法律允许的最大范围内，我们不对因使用或无法使用本应用而产生的间接、附带、特殊或后果性损害承担责任。', ja: '本アプリは「現状有姿」および「利用可能な状態」で提供され、明示・黙示を問わずいかなる保証もありません。通知・統計などは補助であり、正確性や中断がないことを保証しません。法令が許す最大限の範囲で、当方は本アプリの利用または利用不能により生じた間接的・付随的・特別・結果的損害について責任を負いません。', en: 'The App is provided "as is" and "as available", without warranties of any kind, express or implied. Reminders and insights are assistance only and are not guaranteed to be accurate or uninterrupted. To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, the App.' },
    sub_terms_s11_title: { zh: '11. 终止与数据删除', ja: '11. 終了とデータ削除', en: '11. Termination & Deletion' },
    sub_terms_s11_body: { zh: '您可以随时停止使用并删除本应用。删除应用将移除本机数据；若开启了 iCloud 同步，您可在删除前在应用内关闭同步或删除相关记录以清理云端副本。若您严重违反本协议，我们保留终止您使用本应用的权利。', ja: 'お客様はいつでも本アプリの利用を停止し、削除できます。アプリの削除により端末内のデータは削除されます。iCloud 同期を有効にしている場合は、削除前にアプリ内で同期をオフにするか関連記録を削除して、クラウド上のコピーを整理できます。本規約に重大な違反があった場合、当方は本アプリの利用を終了させる権利を留保します。', en: 'You may stop using and delete the App at any time. Deleting the App removes local data; if iCloud sync is enabled, you can disable sync or delete records in the App beforehand to clean up cloud copies. If you materially breach these Terms, we reserve the right to terminate your access.' },
    sub_terms_s12_title: { zh: '12. 适用法律与变更', ja: '12. 準拠法と変更', en: '12. Governing Law & Changes' },
    sub_terms_s12_body: { zh: '本协议受适用法律管辖。我们可能不时更新本协议，重要变更会在应用内提示；您在本协议更新后继续使用本应用，即表示接受更新后的条款。如对本协议有疑问，请联系：support@subfolks.app', ja: '本規約は適用法令に準拠します。当方は本規約を随時更新することがあり、重要な変更はアプリ内でお知らせします。更新後も本アプリを継続利用した場合、更新後の条項に同意したものとみなされます。ご質問は support@subfolks.app まで。', en: 'These Terms are governed by applicable law. We may update these Terms from time to time, notifying material changes in the App; continued use after an update constitutes acceptance. Questions: support@subfolks.app' },

    // ---- 隐私政策（Subfolks）----
    sub_privacy_title: { zh: '隐私政策', ja: 'プライバシーポリシー', en: 'Privacy Policy' },
    sub_privacy_date: { zh: '2026 年 9 月', ja: '2026年9月', en: 'September 2026' },
    sub_privacy_intro: { zh: '我们非常重视您的隐私。本政策说明 Subfolks（"本应用"）如何处理您的数据，包括本地优先存储、可选的 iCloud 同步以及涉及的其他服务。', ja: 'お客様のプライバシーを重視しています。本ポリシーは Subfolks（「本アプリ」）によるデータの取り扱い、ローカル優先の保存、任意の iCloud 同期、および関連するその他のサービスについて説明します。', en: 'We take your privacy seriously. This policy explains how Subfolks handles your data, including local-first storage, optional iCloud sync, and other services involved.' },
    sub_privacy_s1_title: { zh: '1. 数据控制者与本地优先', ja: '1. 管理者とローカル優先', en: '1. Controller & Local-First' },
    sub_privacy_s1_body: { zh: '本应用的数据控制者为 iwonderland。Subfolks 不运行自有服务器：您录入的订阅与成员数据默认仅存储于您的设备本地，我们无法访问、读取或传输这些数据。我们遵循"数据最小化"原则，仅在与您直接交互的功能（如你主动开启的同步）中处理数据。', ja: '本アプリのデータ管理者は iwonderland です。Subfolks は独自のサーバーを運用しません。入力されたサブスク・メンバーデータはデフォルトで端末内にのみ保存され、当方はこれらにアクセス・読取・転送できません。「データ最小化」の原則に従い、お客様が能動的に有効化した同期など、直接の操作がある場合にのみデータを処理します。', en: 'The data controller is iwonderland. Subfolks operates no servers of its own: subscription and member data you enter is stored on your device by default, and we cannot access, read, or transmit it. We follow the principle of data minimization, processing data only through features you actively use (such as sync you enable).' },
    sub_privacy_s2_title: { zh: '2. 我们收集的数据', ja: '2. 収集するデータ', en: '2. Data We Collect' },
    sub_privacy_s2_body: { zh: '我们不收集、不上传、不出售您的任何订阅或成员数据，也不要求您提供姓名、邮箱等身份信息。本应用不包含第三方广告，不集成任何分析追踪 SDK，也不进行跨应用跟踪。', ja: '当方はサブスク・メンバーのデータを収集・送信・販売せず、氏名・メールなどの本人情報も要求しません。本アプリは第三者広告を含まず、分析追跡 SDK も統合しておらず、クロスアプリトラッキングも行いません。', en: 'We do not collect, upload, or sell your subscription or member data, nor do we require identity information such as your name or email. The App contains no third-party ads, integrates no analytics or tracking SDKs, and performs no cross-app tracking.' },
    sub_privacy_s3_title: { zh: '3. iCloud 同步（可选）', ja: '3. iCloud 同期（任意）', en: '3. iCloud Sync (Optional)' },
    sub_privacy_s3_body: { zh: '仅当您主动开启 iCloud 同步时，订阅与成员记录才会通过 Apple CloudKit 私有数据库在您的 iCloud 账号下同步，Apple 负责其加密与传输。首次同步时若云端与本机都有数据，我们会请您选择合并、以云端覆盖或以本机覆盖；请谨慎选择，选择后无法由我们撤销。关闭同步或在应用内删除记录可清理云端副本。', ja: 'お客様が iCloud 同期を有効にした場合のみ、サブスク・メンバーの記録が Apple CloudKit プライベートデータベースを通じて同一 iCloud アカウント内で同期されます。暗号化と転送は Apple が担います。初回同期で両方にデータがある場合は、統合・クラウドで上書き・端末で上書きのいずれかを選択していただきます。同期をオフにするか、アプリ内で記録を削除することでクラウド上のコピーを整理できます。', en: 'Only when you enable iCloud sync are subscription and member records synced through Apple\'s CloudKit private database within your iCloud account; Apple provides their encryption and transfer. If both cloud and this device have data at first sync, we ask you to choose merge, overwrite with cloud, or overwrite with local. Disabling sync or deleting records in the App cleans up cloud copies.' },
    sub_privacy_s4_title: { zh: '4. 通知与提醒', ja: '4. 通知とリマインダー', en: '4. Notifications & Reminders' },
    sub_privacy_s4_body: { zh: '到期与扣费前提醒使用 iOS 本地通知，完全在您的设备上排定与呈现，不会上传到任何服务器。我们仅会请求发送本地通知所必需的权限；您可随时在系统设置中关闭。', ja: '更新・引き落とし前の通知は iOS ローカル通知を使用し、完全に端末上でスケジュール・表示され、サーバーへ送信されません。当方はローカル通知に必要な権限のみを要求します。いつでもシステム設定で無効化できます。', en: 'Renewal and pre-charge reminders use iOS local notifications, scheduled and shown entirely on your device, never uploaded. We request only the permissions needed for local notifications; you can disable them anytime in system settings.' },
    sub_privacy_s5_title: { zh: '5. 第三方服务', ja: '5. 第三者サービス', en: '5. Third-Party Services' },
    sub_privacy_s5_body: { zh: '本应用涉及以下第三方服务，均仅在您主动使用对应功能时发生：Apple（App Store 购买/恢复购买、iCloud/CloudKit 同步）与 Frankfurter（公开汇率接口，用于按需换算时查询目标货币对，仅发送货币代码，不发送任何个人或业务数据）。本应用不接入任何广告网络或第三方分析 SDK。', ja: '本アプリは以下の第三者サービスを、お客様が対応機能を能動的に使う場合にのみ利用します：Apple（App Store の購入・復元、iCloud/CloudKit 同期）および Frankfurter（公開為替 API。換算時に通貨ペアのみを照会し、個人・取引データは送信しません）。広告ネットワークや第三者分析 SDK は一切使用していません。', en: 'The App involves the following third-party services, only when you actively use the corresponding feature: Apple (App Store purchases/restore, iCloud/CloudKit sync) and Frankfurter (a public exchange-rate API queried on demand for currency pairs; no personal or business data is sent). No ad networks or third-party analytics SDKs are used.' },
    sub_privacy_s6_title: { zh: '6. 数据保留与删除', ja: '6. データの保持と削除', en: '6. Data Retention & Deletion' },
    sub_privacy_s6_body: { zh: '本机数据保留在您的设备上，直到您删除相应记录或删除本应用。开启 iCloud 同步后，云端副本由您控制：关闭同步、删除相关记录或从 iCloud 移除备份均可清理。我们不在任何服务器上保留您的个人数据。', ja: '端末内のデータは、記録を削除するか本アプリを削除するまで端末に保持されます。iCloud 同期を有効にした場合のクラウド上のコピーはお客様が管理します。同期をオフにする・関連記録を削除する・iCloud のバックアップから外すことで整理できます。当方はサーバー上にお客様の個人データを保持しません。', en: 'On-device data remains on your device until you delete the records or delete the App. When iCloud sync is enabled, cloud copies are under your control — disable sync, delete the relevant records, or remove them from iCloud backups to clean up. We retain no personal data on our servers.' },
    sub_privacy_s7_title: { zh: '7. 安全', ja: '7. セキュリティ', en: '7. Security' },
    sub_privacy_s7_body: { zh: '您的数据主要保存在设备本地，安全性由 iOS 系统与您的设备保障；iCloud 同步通道由 Apple 提供加密传输与存储。我们建议您为设备开启锁屏密码，并定期通过 iCloud 备份设备。', ja: 'お客様のデータは主に端末内に保存され、セキュリティは iOS とお客様のデバイスによって保護されます。iCloud 同期の経路は Apple が暗号化・転送を提供します。デバイスのロックを有効にし、定期的にバックアップすることをお勧めします。', en: 'Your data is primarily stored on your device, protected by iOS and your device; iCloud sync is encrypted and provided by Apple. We recommend enabling a device passcode and backing up regularly through iCloud.' },
    sub_privacy_s8_title: { zh: '8. 您的权利', ja: '8. お客様の権利', en: '8. Your Rights' },
    sub_privacy_s8_body: { zh: '根据适用的隐私法律（包括 GDPR、日本《个人信息保护法》与中国《个人信息保护法》），您有权访问、更正、导出和删除您的数据。由于数据保存在您的设备（以及您自行开启的 iCloud）中，您可直接在应用内完成上述操作；如需协助，可联系我们。', ja: '適用されるプライバシー法（GDPR、日本の個人情報保護法、中国のPIPLを含む）に基づき、お客様はデータへのアクセス・訂正・書き出し・削除の権利を有します。データは端末（およびお客様が有効にした iCloud）にあるため、アプリ内で直接行えます。必要な場合は当方にお問い合わせください。', en: 'Under applicable privacy laws (including GDPR, Japan\'s APPI, and China\'s PIPL), you have the right to access, correct, export, and delete your data. As data resides on your device (and iCloud if you enabled it), you can do so directly in the App; contact us if you need assistance.' },
    sub_privacy_s9_title: { zh: '9. 国际数据传输', ja: '9. 国際データ転送', en: '9. International Data Transfers' },
    sub_privacy_s9_body: { zh: '当您开启 iCloud 同步或使用汇率换算时，相关数据会与 Apple 或汇率服务方交互，其数据中心可能位于不同国家或地区。Apple 及该公开服务的数据处理受其自身的跨境传输保障措施约束；我们自身不进行任何数据传输。', ja: 'iCloud 同期や為替換算を利用する場合、関連データは Apple または為替サービスのデータセンター（海外を含む）とやり取りされます。Apple および当該公開サービスのデータ処理は、それぞれの越境移転の保障措置に従います。当方自身はデータ転送を行いません。', en: 'When you use iCloud sync or currency conversion, related data interacts with Apple or the exchange-rate service, whose data centers may be in different countries or regions. Their processing is subject to their own cross-border safeguards; we ourselves perform no data transfer.' },
    sub_privacy_s10_title: { zh: '10. 儿童隐私', ja: '10. 子どものプライバシー', en: '10. Children\'s Privacy' },
    sub_privacy_s10_body: { zh: '本应用面向订阅管理使用场景（App Store 评级 4+），并非针对儿童设计。我们不会故意收集 13 岁以下儿童的个人数据。如您认为我们无意中处理了儿童数据，请通过下方联系方式告知，我们将协助处理。', ja: '本アプリはサブスク管理を目的としたアプリ（App Store レーティング 4+）であり、子ども向けに設計されたものではありません。13歳未満の子どもの個人データを意図的に収集することはありません。万一処理が疑われる場合は、下記までご連絡ください。', en: 'The App is intended for subscription management (App Store rating 4+) and is not designed for children. We do not knowingly collect personal data from children under 13. If you believe we have inadvertently processed children\'s data, please contact us below.' },
    sub_privacy_s11_title: { zh: '11. 政策变更', ja: '11. ポリシーの変更', en: '11. Changes to This Policy' },
    sub_privacy_s11_body: { zh: '我们可能不时更新本隐私政策。如有重大变更，我们将在应用内提示并在此页面注明更新日期。更新后的政策自发布之时生效。', ja: '当方は本プライバシーポリシーを随時更新することがあります。重要な変更がある場合はアプリ内でお知らせし、このページに更新日を記載します。更新後のポリシーは公開時点で有効となります。', en: 'We may update this Privacy Policy from time to time. If there are material changes, we will notify you in the App and note the revision date on this page. The updated policy takes effect upon publication.' },
    sub_privacy_s12_title: { zh: '12. 联系我们', ja: '12. お問い合わせ', en: '12. Contact Us' },
    sub_privacy_s12_body: { zh: '如对本政策或您的数据有任何疑问，请联系：support@subfolks.app，或通过 GitHub：https://github.com/iwonderland', ja: '本ポリシーまたはお客様のデータについてご質問がある場合は、support@subfolks.app または GitHub（https://github.com/iwonderland）までお問い合わせください。', en: 'If you have any questions about this policy or your data, contact us at support@subfolks.app or via GitHub: https://github.com/iwonderland' },
    privacy_s12_body: { zh: '如对本隐私政策有任何疑问，请联系我们：app-feedback-2026@outlook.com，或通过 GitHub：https://github.com/iwonderland', ja: '本プライバシーポリシーについてご質問がある場合は、app-feedback-2026@outlook.com または GitHub（https://github.com/iwonderland）までお問い合わせください。', en: 'If you have any questions about this policy, please contact us at app-feedback-2026@outlook.com or via GitHub: https://github.com/iwonderland' },
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

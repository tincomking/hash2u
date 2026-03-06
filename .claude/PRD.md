# Hash2U.ai 产品需求文档 (PRD)

> **域名**: hash2u.ai
> **本地路径**: `/Users/leogrossman/hash2u/`
> **最后更新**: 2026-03-06
> **状态**: 规划阶段

---

## 1. Executive Summary

Hash2U.ai 是一个统一算力交易平台，将两种看似不同但本质相同的产品——**AI 大模型推理算力**和**BTC 挖矿算力**——整合到一个品牌下。

核心洞察：**AI 推理和 BTC 挖矿本质上都是"卖算力"**。GPU 算力用于 LLM 推理生成 Token，ASIC 算力用于 SHA-256 哈希计算挖 BTC。Hash2U 的品牌含义就是 **"All Hash Power, Delivered to You"**。

**双产品线**：
- **AI Compute** — 大模型 API 代理，类似 OpenRouter，支持 Claude/GPT/Llama/DeepSeek/Gemini 等主流模型
- **BTC Hashrate** — 云算力合约，类似 BitFuFu，用户无需矿机即可参与挖矿

**核心差异化**：市面上没有人同时做这两件事。AI 用户和 BTC 矿工有高度重叠的人群画像（技术敏感、算力认知高、加密友好），交叉转化率极高。

---

## 2. 品牌定义

### 品牌名
**Hash2U** — Hash to You（算力给你）

### Slogan
`All Hash Power. One Platform.`
副标语：`AI Tokens. BTC Blocks. Powered by Hash.`

### 品牌色彩双轨系统

平台采用"双色世界"设计语言——AI 侧用冷色调（Cyan/蓝），BTC 侧用暖色调（Orange/金），两个世界在首页交汇融合：

| 语义 | 色值 | 用途 |
|------|------|------|
| AI Primary | `#00f0ff` (Cyan) | AI 产品线主色，按钮、图标、数据高亮 |
| AI Secondary | `#7b61ff` (Purple) | AI 渐变辅助色 |
| BTC Primary | `#f7931a` (Bitcoin Orange) | BTC 产品线主色 |
| BTC Secondary | `#ffd700` (Gold) | BTC 渐变辅助色 |
| Success | `#00d672` | 盈利、在线、成功状态 |
| Danger | `#ff4757` | 亏损、错误、离线 |
| Background | `#06070a` | 主背景（太空黑） |
| Surface | `#0d1117` | 卡片背景 |
| Border | `#1b2332` | 边框、分割线 |
| Text Primary | `#e6edf3` | 主文字 |
| Text Secondary | `#7d8590` | 次要文字 |

### 字体系统

| 用途 | 字体 | 说明 |
|------|------|------|
| 品牌/标题 | **Space Grotesk** | 几何感无衬线，科技感极强 |
| 正文 | **Inter** | 清晰易读 |
| 数据/代码/API | **JetBrains Mono** | 等宽字体，终端感 |

### 视觉元素

- **粒子网格背景**：首页 Hero 区域使用 Canvas/WebGL 粒子动画，节点连线形成神经网络/区块链拓扑
- **Glassmorphism 卡片**：半透明毛玻璃效果，`backdrop-filter: blur(20px)`
- **Glow 效果**：关键数据、按钮 hover 时的 box-shadow 发光
- **Circuit Pattern**：背景装饰使用电路板/芯片纹理 SVG
- **渐变分割线**：AI (Cyan→Purple) 和 BTC (Orange→Gold) 渐变色横线分隔区域
- **Terminal 风格**：API 文档和代码示例使用终端样式（绿色文字、`$` 前缀、光标闪烁）
- **数据 Matrix**：实时滚动的数据流装饰（如 token 消耗速度、出块速度）

---

## 3. 目标用户

| 用户类型 | 画像 | 核心需求 | 入口 |
|---------|------|---------|------|
| AI 开发者 | 做 AI 应用的程序员 | 便宜稳定的多模型 API | AI Compute |
| AI 创业团队 | 早期 AI startup | 一个 API Key 访问所有模型 | AI Compute |
| 内容创作者 | 用 AI 写作/设计的自由职业者 | 简单的 Chat Playground | AI Compute |
| BTC 长期投资者 | 看好 BTC 但不想自建矿场 | 低门槛挖矿、稳定产出 | BTC Hashrate |
| 矿工 | 有矿机想出售算力 | 稳定溢价收入 | BTC Hashrate |
| 交叉用户 | 既做 AI 开发又关注加密 | 统一账户、加密支付 | 两者都用 |

---

## 4. 产品架构

### 4.1 站点结构

```
hash2u.ai                       — 首页（品牌 Landing Page，双产品入口）
hash2u.ai/ai                    — AI Compute 产品首页
hash2u.ai/ai/models             — 模型列表与定价
hash2u.ai/ai/playground         — 在线 Chat Playground
hash2u.ai/ai/docs               — API 文档
hash2u.ai/btc                   — BTC Hashrate 产品首页
hash2u.ai/btc/contracts         — 云算力合约购买
hash2u.ai/btc/calculator        — 收益计算器
hash2u.ai/btc/miner-sell        — 矿工出售入口
hash2u.ai/dashboard             — 统一用户仪表盘
hash2u.ai/pricing               — 统一定价页
hash2u.ai/about                 — 关于我们
```

### 4.2 技术选型

| 层级 | 技术 | 理由 |
|------|------|------|
| 框架 | **Next.js 15 (App Router)** | SSR/SSG 混合、SEO 友好、API Routes |
| UI | **Tailwind CSS v4** + **Framer Motion** | 极速开发 + 丝滑动画 |
| 图表 | **Recharts** 或 **Chart.js** | 数据可视化 |
| 3D/粒子 | **Three.js** (首页 Hero 背景) | 科技感视觉震撼 |
| 状态管理 | **Zustand** | 轻量、简洁 |
| API 文档 | **Fumadocs** 或自建 | 开发者文档 |
| 认证 | **NextAuth.js** + 邮箱/GitHub/Google | 用户系统 |
| 支付 | **Stripe** (法币) + **加密支付** (BTC/USDT) | 双轨支付 |
| 部署 | **Vercel** | Next.js 原生、边缘网络、自动 CI/CD |
| 数据库 | **Supabase** (PostgreSQL) | 用户、订单、API Key、用量 |
| 缓存 | **Upstash Redis** | API 限流、Token 用量实时计数 |
| AI 代理 | **LiteLLM** 或自建网关 | 统一转发到各 LLM Provider |

### 4.3 架构图

```
                          hash2u.ai (Vercel)
                               |
                    +-----------+-----------+
                    |                       |
              AI Compute                BTC Hashrate
                    |                       |
          +--------+--------+        +------+------+
          |        |        |        |      |      |
       LiteLLM  Stripe  Supabase  DC API  Stripe  Supabase
       Gateway   Pay      DB      (挖矿)   Pay     DB
          |
    +-----+-----+-----+-----+
    |     |     |     |     |
  Claude  GPT  Llama  DS   Gemini
```

---

## 5. 页面详细设计

### 5.1 首页 Landing Page (`/`)

**视觉核心**：全屏暗色背景 + Three.js 粒子网络动画。粒子在左半屏是 Cyan (AI)，右半屏是 Orange (BTC)，中间交汇融合成白色/紫色。

**布局**：

#### Hero Section
```
┌─────────────────────────────────────────────────────┐
│  [Three.js 粒子网络动画背景]                          │
│                                                     │
│              H A S H 2 U . a i                      │
│     All Hash Power. One Platform.                   │
│                                                     │
│  ┌──────────────────┐  ┌──────────────────┐         │
│  │  AI Compute  →   │  │  BTC Hashrate →  │         │
│  │  (Cyan 发光按钮)  │  │  (Orange 发光按钮) │         │
│  └──────────────────┘  └──────────────────┘         │
│                                                     │
│         $2.3M tokens served  |  14.7 PH/s mining    │
└─────────────────────────────────────────────────────┘
```

#### 实时数据 Ticker Strip
横向滚动条，终端风格，显示：
- GPT-4o: $2.50/1M tokens
- Claude Opus: $15/1M tokens
- BTC: $97,432
- Hashprice: $52.3/PH/day
- 全网算力: 987 EH/s

#### 双产品展示区

左右分栏，左侧 AI（Cyan 色调），右侧 BTC（Orange 色调）：

**AI Compute 卡片**：
- "一个 API Key，所有模型"
- 支持的模型 Logo 网格（Claude / GPT / Llama / DeepSeek / Gemini / Mistral）
- 代码片段预览（终端风格）
- "比官方便宜 20-40%"
- CTA: "Get API Key"

**BTC Hashrate 卡片**：
- "10 TH/s 起，无需矿机"
- 矿机型号展示
- 实时收益预览（日产 BTC、预估月收入）
- "30-360 天灵活合约"
- CTA: "Start Mining"

#### 为什么选 Hash2U
3 列特性卡片（Glassmorphism）：
1. **统一算力平台** — 一个账户管理 AI 和 BTC 两种算力
2. **透明定价** — 无隐藏费用，实时成本追踪
3. **加密原生** — 支持 BTC/USDT 支付，Web3 友好

#### 实时数据面板
两个并列的实时统计卡片：
- AI 侧：今日 Token 服务量 / 活跃模型数 / 平均响应延迟 / 可用率
- BTC 侧：平台总算力 / 今日 BTC 产出 / 活跃合约数 / BTC 价格

#### Footer
极简暗色 Footer：产品链接 / 文档 / 社交媒体 / 法律条款

---

### 5.2 AI Compute 首页 (`/ai`)

**色调**：整体 Cyan/Blue 冷色调

#### Hero
- 标题："Route to the Best AI Models"
- 副标题："One API. Every Model. Best Price."
- 背景：神经网络节点动画（Cyan 色）
- CTA: "Get Started Free" + "View Pricing"

#### 模型 Showcase
水平滚动卡片，每张卡片一个模型：

```
┌─────────────────┐
│  [模型 Logo]     │
│  Claude Opus 4   │
│  Anthropic       │
│                  │
│  Input:  $15/1M  │
│  Output: $75/1M  │
│  Context: 200K   │
│                  │
│  Speed: ████░ 4/5│
│  Quality:█████ 5 │
│                  │
│  [Try Now]       │
└─────────────────┘
```

#### 核心特性

| 特性 | 说明 | 视觉 |
|------|------|------|
| 统一 API | OpenAI 兼容格式，换个 base_url 就能用 | 代码 diff 对比 |
| 智能路由 | 自动选择最快/最便宜的 Provider | 路由动画图 |
| 自动 Fallback | Provider 宕机自动切换 | 可用率 99.9% 徽章 |
| 用量仪表盘 | 实时 Token 消耗、费用追踪 | 仪表盘截图 |
| 成本优化 | 比直接调用便宜 20-40% | 价格对比表 |
| 流式响应 | 原生 SSE 支持 | 打字机效果演示 |

#### 集成代码示例（Terminal 风格）

```python
# 只需改一行 base_url
from openai import OpenAI

client = OpenAI(
    base_url="https://api.hash2u.ai/v1",
    api_key="h2u_sk_..."
)

response = client.chat.completions.create(
    model="claude-opus-4",
    messages=[{"role": "user", "content": "Hello!"}]
)
```

#### 价格对比表

| 模型 | 官方价 Input | Hash2U Input | 节省 |
|------|-------------|-------------|------|
| Claude Opus 4 | $15/1M | $12/1M | 20% |
| GPT-4o | $2.50/1M | $2.00/1M | 20% |
| DeepSeek V3 | $0.27/1M | $0.20/1M | 26% |
| Llama 3.3 70B | $0.60/1M | $0.40/1M | 33% |

---

### 5.3 AI 模型列表 (`/ai/models`)

全屏模型目录，支持筛选和搜索：

**筛选栏**：
- Provider: All / Anthropic / OpenAI / Meta / DeepSeek / Google / Mistral
- 能力: Chat / Code / Vision / Function Calling / Long Context
- 排序: 价格低→高 / 质量高→低 / 速度快→慢 / 最新

**模型卡片网格**：每个模型一张卡片，含：
- Provider Logo + 模型名
- Input/Output 价格
- Context 窗口大小
- 支持能力标签（Vision / Tool Use / JSON Mode）
- 速度评分条
- "Use This Model" 按钮

**支持的模型（初期）**：

| Provider | 模型 | 类型 |
|----------|------|------|
| Anthropic | Claude Opus 4 / Sonnet 4 / Haiku 3.5 | Chat, Code, Vision |
| OpenAI | GPT-4o / GPT-4o-mini / o3 / o4-mini | Chat, Code, Vision |
| Meta | Llama 3.3 70B / 3.2 90B Vision | Chat, Code, Vision |
| DeepSeek | DeepSeek V3 / R1 | Chat, Code, Reasoning |
| Google | Gemini 2.5 Pro / Flash | Chat, Code, Vision |
| Mistral | Mistral Large / Codestral | Chat, Code |

---

### 5.4 Playground (`/ai/playground`)

在线对话界面，无需写代码即可体验所有模型：

```
┌──────────────────────────────────────────────────┐
│ Model: [Claude Opus 4 ▼]  Temp: [0.7]  Max: [4K]│
├──────────────────────────────────────────────────┤
│                                                  │
│  User: 解释量子计算和传统计算的区别               │
│                                                  │
│  Assistant: 量子计算与传统计算的核心区别在于...    │
│  [实时流式输出，打字机效果]                       │
│                                                  │
│  Token: 1,234 in / 567 out  Cost: $0.023         │
│  Latency: 1.2s TTFT / 45 tok/s                   │
├──────────────────────────────────────────────────┤
│ [输入框]                              [Send ▶]   │
└──────────────────────────────────────────────────┘
```

特性：
- 模型下拉切换，保留对话上下文
- 实时显示 Token 消耗和费用
- System Prompt 自定义
- 对话历史保存
- 导出对话 (JSON / Markdown)
- 模型对比模式（左右分栏同时发送给两个模型）

---

### 5.5 API 文档 (`/ai/docs`)

开发者文档中心，风格参考 Stripe Docs / Anthropic Docs：

**文档结构**：
- Quick Start（5 分钟上手）
- Authentication（API Key 管理）
- Chat Completions（核心 API）
- Models（支持的模型列表）
- Streaming（流式响应）
- Function Calling（工具调用）
- Rate Limits（限流策略）
- Error Handling（错误码）
- SDKs（Python / Node.js / Go）
- Changelog（版本日志）

**视觉**：
- 左侧导航 + 右侧代码示例（双栏布局）
- 代码示例支持 Python / Node.js / cURL 切换
- 暗色代码块，语法高亮
- "Try it" 按钮直接在页面内发请求

---

### 5.6 BTC Hashrate 首页 (`/btc`)

**色调**：整体 Orange/Gold 暖色调

#### Hero
- 标题："Mine Bitcoin Without Hardware"
- 副标题："10 TH/s 起购，30-360 天灵活合约"
- 背景：区块链节点动画（Orange 色）+ 矿机 3D 渲染
- 实时数据条：BTC 价格 / 全网算力 / Hashprice / 日产 BTC per 10TH
- CTA: "Start Mining" + "Calculator"

#### 合约选择器（核心交互组件）

```
┌──────────────────────────────────────────────────────┐
│  合约期: [30] [90] [180*] [270] [360] 天              │
│  矿机:   [Antminer S21 XP ▼]                         │
│  算力:   ═══════●═════════ 100 TH/s                   │
│  电费:   [$0.05] [$0.06*] [$0.07] [$0.08] [$0.10]    │
│                                                       │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐        │
│  │ 算力费      │ │ 电费总计    │ │ 总成本      │        │
│  │ $1,842     │ │ $1,166     │ │ $3,008     │        │
│  │ (一次性)    │ │ (180天)    │ │            │        │
│  └────────────┘ └────────────┘ └────────────┘        │
│                                                       │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐        │
│  │ 预计产出    │ │ 产出价值    │ │ ROI        │        │
│  │ 0.0342 BTC │ │ $3,334     │ │ +10.8%     │        │
│  │ (180天)    │ │ @$97,432   │ │            │        │
│  └────────────┘ └────────────┘ └────────────┘        │
│                                                       │
│  盈亏平衡 BTC 价格: $87,953                           │
│                                                       │
│  [立即购买 ▶]                                         │
└──────────────────────────────────────────────────────┘
```

#### 价格情景分析

三列卡片：
- 熊市 (-30%): BTC $68,202 → 产出 $2,334 → ROI -22.4%
- 当前: BTC $97,432 → 产出 $3,334 → ROI +10.8%
- 牛市 (+50%): BTC $146,148 → 产出 $5,001 → ROI +66.2%

#### 矿机展示

4 款矿机的横向对比卡片，含算力/功耗/能效比/参考价格

#### BTC 减半倒计时

大字展示距 2028-04-15 的倒计时，附减半对收益的影响说明

---

### 5.7 收益计算器 (`/btc/calculator`)

从 btcmine-cloud 的计算器升级，增强交互和可视化：

- 完整矿机配置面板
- 实时收益/成本/ROI 计算
- 电费敏感性 Chart
- BTC 价格敏感性 Chart
- 云挖矿 vs 直接买 BTC 对比
- 全合约期横向对比表
- 减半影响分析

---

### 5.8 矿工出售 (`/btc/miner-sell`)

矿工端入口，从 btcmine-cloud 的 minersell 升级：

- 矿工收购报价实时展示
- 出售 vs 自挖对比
- 四大出售优势
- 出售确认流程

---

### 5.9 统一仪表盘 (`/dashboard`)

用户登录后的统一管理中心：

```
┌─────────────────────────────────────────────────────┐
│  Hash2U Dashboard                    [Leo ▼] [设置]  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─ 账户余额 ──────────────────────────────────┐    │
│  │  $1,234.56           +$50.00 本月充值        │    │
│  │  ₿ 0.0127 BTC       AI 消耗 $89.32          │    │
│  │                      BTC 收益 +0.0034 BTC    │    │
│  │  [充值] [提现]                               │    │
│  └──────────────────────────────────────────────┘    │
│                                                     │
│  ┌─ AI Compute ──────────┐ ┌─ BTC Hashrate ──────┐  │
│  │                       │ │                      │  │
│  │  API Keys: 3          │ │  活跃合约: 2         │  │
│  │  本月 Token: 12.3M    │ │  总算力: 200 TH/s    │  │
│  │  本月费用: $89.32     │ │  累计产出: 0.012 BTC  │  │
│  │  [7天用量图]          │ │  [收益趋势图]         │  │
│  │                       │ │                      │  │
│  │  [管理 API Keys]      │ │  [查看合约详情]       │  │
│  └───────────────────────┘ └──────────────────────┘  │
│                                                     │
│  ┌─ 最近活动 ──────────────────────────────────┐    │
│  │  03-06 14:23  API 调用 Claude Opus  -$0.12  │    │
│  │  03-06 12:00  BTC 产出 +0.00012 BTC         │    │
│  │  03-05 09:15  充值 $50.00 (Stripe)          │    │
│  └──────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

**仪表盘功能**：

| 模块 | 功能 |
|------|------|
| 余额管理 | USD 余额 + BTC 余额、充值（Stripe/加密）、提现 |
| AI API Keys | 创建/删除/限额设置、per-key 用量追踪 |
| AI 用量分析 | 按模型/日期/API Key 的 Token 消耗图表 |
| BTC 合约管理 | 活跃合约列表、已到期合约、收益明细 |
| BTC 产出追踪 | 每日 BTC 产出曲线、累计产出、提现记录 |
| 账单历史 | 所有充值/消费/产出的流水记录 |
| 设置 | 个人信息、安全（2FA）、通知偏好、API 限额 |

---

### 5.10 统一定价页 (`/pricing`)

双栏展示两条产品线的定价：

**AI Compute 定价**（左侧 Cyan 色调）：
- Free Tier: $5 免费额度，限速
- Pro: $20/月，不限速，优先队列
- Team: $100/月，多成员、用量 Dashboard
- Enterprise: 联系销售

**BTC Hashrate 定价**（右侧 Orange 色调）：
- 按 TH/s/天 实时报价
- 5 档合约期对比表
- 矿机型号对收益的影响

**统一支付方式**：
- Stripe（信用卡、Apple Pay、Google Pay）
- 加密支付（BTC、USDT、ETH）
- 线下充值（大额客户）

---

## 6. 技术架构详细

### 6.1 目录结构（Next.js App Router）

```
hash2u/
├── .claude/
│   └── PRD.md                      # 本文档
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 全局 Layout（导航 + Footer）
│   │   ├── page.tsx                # 首页 Landing
│   │   ├── ai/
│   │   │   ├── page.tsx            # AI Compute 首页
│   │   │   ├── models/page.tsx     # 模型列表
│   │   │   ├── playground/page.tsx # Chat Playground
│   │   │   └── docs/              # API 文档（MDX）
│   │   ├── btc/
│   │   │   ├── page.tsx            # BTC Hashrate 首页
│   │   │   ├── contracts/page.tsx  # 合约购买
│   │   │   ├── calculator/page.tsx # 收益计算器
│   │   │   └── miner-sell/page.tsx # 矿工出售
│   │   ├── dashboard/
│   │   │   ├── page.tsx            # 仪表盘首页
│   │   │   ├── ai/page.tsx         # AI 用量管理
│   │   │   ├── btc/page.tsx        # BTC 合约管理
│   │   │   └── settings/page.tsx   # 设置
│   │   ├── pricing/page.tsx        # 定价页
│   │   ├── about/page.tsx          # 关于页
│   │   └── api/                    # API Routes
│   │       ├── v1/
│   │       │   └── chat/
│   │       │       └── completions/route.ts  # OpenAI 兼容 API
│   │       ├── auth/               # NextAuth
│   │       ├── billing/            # 支付 webhook
│   │       └── btc/                # BTC 算力 API
│   ├── components/
│   │   ├── ui/                     # 基础 UI 组件
│   │   ├── landing/                # 首页组件
│   │   ├── ai/                     # AI 产品组件
│   │   ├── btc/                    # BTC 产品组件
│   │   └── dashboard/              # 仪表盘组件
│   ├── lib/
│   │   ├── ai-gateway.ts           # LLM 代理网关逻辑
│   │   ├── pricing-engine.ts       # BTC 定价引擎（从 btcmine-cloud 迁移）
│   │   ├── auth.ts                 # NextAuth 配置
│   │   ├── db.ts                   # Supabase 客户端
│   │   └── stripe.ts               # Stripe 配置
│   └── styles/
│       └── globals.css             # Tailwind + 自定义 CSS 变量
├── public/
│   ├── models/                     # 模型 Logo SVG
│   └── miners/                     # 矿机图片
├── next.config.ts
├── tailwind.config.ts
├── package.json
└── .env.local                      # 环境变量（不入库）
```

### 6.2 AI 网关架构

AI API 代理的核心流程：

```
客户端 → hash2u.ai/api/v1/chat/completions
  → 认证（验证 API Key）
  → 限流（Redis 计数）
  → 路由（根据 model 参数选择 Provider）
  → 转发（向上游 Provider 发请求）
  → 流式回传（SSE proxy）
  → 计量（记录 Token 用量到 DB）
  → 扣费（从余额扣除）
```

**路由策略**：
- 默认路由到官方 Provider
- 支持 Fallback：Claude API 不可用 → 自动切换到 AWS Bedrock
- 支持负载均衡：多个 API Key 轮转

### 6.3 BTC 定价引擎

复用 btcmine-cloud 的 `PricingEngine`，用 TypeScript 重写：
- 三方博弈模型（Miner / Platform / User）
- 实时 BTC 价格（mempool.space API）
- 合约定价计算
- 收益/ROI 计算
- 情景分析

### 6.4 数据库 Schema（Supabase）

```sql
-- 用户
users (id, email, name, avatar, created_at)

-- API Keys
api_keys (id, user_id, key_hash, name, rate_limit, created_at, last_used)

-- AI 用量记录
ai_usage (id, user_id, api_key_id, model, input_tokens, output_tokens, cost_usd, created_at)

-- BTC 合约
btc_contracts (id, user_id, hashrate_th, duration_days, miner_model, electricity_rate,
               total_cost_usd, start_date, end_date, status, created_at)

-- BTC 产出
btc_payouts (id, contract_id, date, btc_amount, btc_price_usd, created_at)

-- 充值/支付
transactions (id, user_id, type, amount_usd, amount_btc, method, stripe_id, status, created_at)

-- 余额
balances (user_id, usd_balance, btc_balance, updated_at)
```

---

## 7. 开发路线图

### Phase 1: Landing + AI Compute (MVP)
**目标**：上线品牌首页 + AI API 代理核心功能

- [ ] 项目初始化（Next.js + Tailwind + Supabase）
- [ ] 品牌首页（Hero + 双产品展示 + 特性 + Footer）
- [ ] Three.js 粒子背景动画
- [ ] AI 模型列表页
- [ ] AI API 网关（OpenAI 兼容，支持 Claude/GPT/DeepSeek）
- [ ] API Key 管理
- [ ] Playground 在线对话
- [ ] 用户注册/登录（NextAuth）
- [ ] Stripe 充值
- [ ] 用量仪表盘
- [ ] API 文档

### Phase 2: BTC Hashrate
**目标**：上线 BTC 云算力交易

- [ ] BTC 产品首页
- [ ] 定价引擎（TypeScript 重写）
- [ ] 合约购买流程
- [ ] 收益计算器
- [ ] 矿工出售入口
- [ ] BTC 产出追踪
- [ ] 加密支付（BTC/USDT）

### Phase 3: 深度整合 + 增长
**目标**：两条产品线深度融合

- [ ] 统一仪表盘（AI + BTC 一站式管理）
- [ ] BTC 挖矿收益自动转为 AI 额度（"挖矿换 AI"）
- [ ] AI 额度用 BTC 支付
- [ ] 推荐返佣系统
- [ ] 企业版
- [ ] 移动端优化

---

## 8. 竞品分析

### AI API 代理赛道

| 竞品 | 优势 | 劣势 | Hash2U 差异点 |
|------|------|------|-------------|
| OpenRouter | 模型最全、社区大 | 只做 AI、无加密属性 | 双产品线 + 加密支付 |
| Together AI | 开源模型快、便宜 | 不支持 Claude/GPT | 支持所有主流模型 |
| Fireworks AI | 推理速度极快 | 模型种类少 | 更广模型覆盖 |

### BTC 云算力赛道

| 竞品 | 优势 | 劣势 | Hash2U 差异点 |
|------|------|------|-------------|
| BitFuFu | NASDAQ 上市、信誉 | 只做矿业 | AI + BTC 双轨 |
| NiceHash | 即时算力市场 | UX 复杂 | 更简洁的用户体验 |
| ECOS | 低门槛 | 透明度低 | 三方博弈透明定价 |

### 无直接竞品
**目前没有任何平台同时提供 AI API 代理 + BTC 云算力**。Hash2U 是这个交叉领域的第一个玩家。

---

## 9. 商业模式

### 收入来源

| 来源 | 模式 | 预期利润率 |
|------|------|----------|
| AI API 差价 | 转发收取 10-30% 加价 | 15-25% |
| BTC 算力差价 | 矿工收购价 vs 用户售价 8% 佣金 | 8% |
| BTC 电费服务费 | 实际电费 +12% | 12% |
| 订阅费 | Pro/Team/Enterprise 月费 | 80%+ |
| 充值溢价 | 加密支付手续费 | 1-2% |

### 成本结构

| 成本 | 说明 |
|------|------|
| AI Provider 费用 | 按 Token 付给 Anthropic/OpenAI/等 |
| 矿工收购成本 | 按 Hashprice + 溢价支付矿工 |
| 基础设施 | Vercel + Supabase + Redis + 域名 |
| 支付手续费 | Stripe 2.9% + 加密支付 1% |

---

## 10. 安全规范

- API Key 哈希存储（bcrypt），仅创建时显示一次明文
- 所有 API 请求走 HTTPS
- Rate Limiting（Upstash Redis）防滥用
- Stripe Webhook 签名验证
- 环境变量管理（`.env.local`，不入 Git）
- CORS 严格限制
- CSP 内容安全策略
- 用户 2FA 支持
- 定期安全审计

---

## 11. 关键设计原则

1. **双色世界统一** — AI (Cyan) 和 BTC (Orange) 在视觉上各有辨识度，但在 Layout/交互/品牌上是统一的
2. **终端美学** — 代码示例、API 文档、实时数据都用 monospace + 暗色终端风格
3. **数据驱动** — 首页和产品页都有实时滚动数据，营造"活"的算力平台感
4. **渐进式体验** — 首页了解品牌 → 产品页深入功能 → Playground/Calculator 动手体验 → 注册使用
5. **极简科技** — 大量留白 + 精密数据 + 发光效果，避免花哨，追求精密工具感

---

*本文档由 Claude Code 生成，作为 Hash2U.ai 项目的整体规划基线。*

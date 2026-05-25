# 🗺️ LoreLens (formerly Beijing Culture AI City Tour)

临场感、非线性的 AI 驱动城市文化导览与智能漫游助手。

[![GitHub license](https://img.shields.io/github/license/victoriag5tyjw7ehciuouc-droid/LoreLens?style=flat-square)](https://github.com/victoriag5tyjw7ehciuouc-droid/LoreLens/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Android](https://img.shields.io/badge/Platform-Android%20%7C%20Python-blue?style=flat-square&logo=android)](https://developer.android.com)
[![LLM Powered](https://img.shields.io/badge/LLM-Gemini%20%7C%20GPT-orange?style=flat-square&logo=google-gemini)](https://ai.google.dev/)

> **让每一次城市漫游（City Walk），都变成一场量身定制的非线性文化探索。**
> 传统导览死板、千篇一律且缺乏深度。**LoreLens** 结合大语言模型（LLMs）与动态上下文检索，根据用户的步伐、兴趣与即时提问，实时生成兼具文学色彩与历史厚度的深度文旅故事线。

---

## 📱 核心特性 (Key Features)

* **🎙️ 动态非线性故事生成 (Non-linear Dynamic Narrative)**
    不再是死板的点对点打卡。AI 导游会根据你的路线选择、停留时间以及即时反馈，动态交织出一条独特的历史文化故事线。
* **🤖 多模态文化智能体 (Multimodal Culture Agent)**
    支持文字、语音甚至拍照识别历史建筑。拍下眼前的红墙砖瓦，AI 智能体即可深度剖析其背后的营造法式与历史变迁。
* **📍 空间感知与上下文检索 (Location-Aware RAG)**
    精准感知用户所处的空间几何位置，无缝融合本地文史数据库（Local Lore Base），拒绝大模型幻觉，提供真正准确的野史趣闻与正史考证。
* **✨ 沉浸式 UI/UX 设计 (Immersive Interface)**
    专为极客与摄影爱好者打造的简洁视觉，支持非线性探索进度图谱，让每一次出行都像在解密城市。

---

## 🏗️ 系统架构 (Architecture)

```text
[用户移动端 (Android/App)] 🌟 空间感知 & 多模态输入
          │
          ▼ (REST API / WebSocket)
[LoreLens 后端服务 (Python)]
          │
          ├──► [位置路由与上下文生成器] ──► 匹配 Local Lore DB (向量数据库)
          │
          └──► [大模型编排层 (Gemini/GPT API)] ──► Prompt 注入与流式故事生成

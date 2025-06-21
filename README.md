<div align="center">

<img src="https://img.icons8.com/fluency/96/privacy.png" width="90" alt="Privacy Icon"/>

# 🛡️ Screenshot Privacy Protection Web

![Status](https://img.shields.io/badge/status-active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/built%20with-JavaScript-yellow?style=for-the-badge)

</div>

---

## 🧠 Introduction

**Screenshot-PrivacyProtectionWeb** is a powerful JavaScript tool that helps developers protect sensitive content from being captured via screenshots or screen recordings. It adds a client-side layer of privacy with zero dependencies, perfect for modern web apps, dashboards, and secure portals.

---

## ✨ Key Features

- 🔒 Prevent screenshots using CSS tricks & JavaScript
- 🎥 Deter screen recording with visual overlays
- 🖼️ Customizable watermark on protected content
- 🧠 Display alerts when protection is triggered
- 🚫 Disable print and screen capture shortcuts
- ⚡ Lightweight and dependency-free

---

## 📸 Demo Preview

> [🌐 Live Demo - Coming Soon](#)

Or try out the basic functionality in your own project:

```html
<script src="https://unpkg.com/screenshot-privacy-protect/dist/privacy-protect.min.js"></script>
<script>
  PrivacyProtect.enable({
    feedback: true,
    watermarkText: "🔒 Confidential Area"
  });
</script>
```

---

## 📦 Installation

### 🔗 Via CDN

```html
<script src="https://unpkg.com/screenshot-privacy-protect/dist/privacy-protect.min.js"></script>
```

### 📦 Via NPM

```bash
npm install screenshot-privacy-protect
```

---

## ⚙️ Usage Guide

### Basic Activation

```html
<script>
  PrivacyProtect.enable();
</script>
```

### With Options

```js
PrivacyProtect.enable({
  feedback: true,
  blockPrint: true,
  watermarkText: '🛡️ Protected Content'
});
```

### Turn Off Protection

```js
PrivacyProtect.disable();
```

---

## ⚙️ Configuration Table

| Option           | Type     | Default | Description                                 |
|------------------|----------|---------|---------------------------------------------|
| `feedback`       | Boolean  | `true`  | Display user feedback when blocking         |
| `blockPrint`     | Boolean  | `true`  | Block keyboard print/capture shortcuts      |
| `watermarkText`  | String   | `''`    | Overlay custom text on sensitive sections   |

---

## 📁 File Structure

```
📦 Screenshot-PrivacyProtectionWeb
├── privacy-protect.js        # Core script
├── index.html                # Sample usage
└── README.md                 # This file
```

---

## 🤝 Contribution

Love this idea? Help us improve!

- Fork the repo
- Make your improvements
- Submit a pull request 🙌

---

## 📜 License

Released under the [MIT License](LICENSE).

---

## 🧡 Credits

Developed by [@dxvzz](https://github.com/dxvzz)  
Inspired by mobile privacy standards like `FLAG_SECURE` on Android & secure overlays on iOS

---

> "Privacy is not a feature. It's a right. Protect it."


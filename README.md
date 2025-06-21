# 🛡️ Screenshot Privacy Protection Webpage

![Status](https://img.shields.io/badge/status-active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Made with Love](https://img.shields.io/badge/built%20with-%E2%9D%A4%EF%B8%8F%20JavaScript-red?style=for-the-badge)

---

## 🚀 Overview

**Screenshot-PrivacyProtectionWeb** is a privacy-first, lightweight JavaScript tool that blocks users from taking screenshots or recording sensitive content on your website.

---

## ✨ Features

- 🔒 Prevents screenshots using CSS & JS techniques
- 🚫 Blocks screen recording on supported devices
- 🖼️ Custom watermark overlay support
- 🧠 Warns users when protection is active
- ⚡ Pure JavaScript, no dependencies

---

## 📦 Installation

### 🔗 CDN

```html
<script src="https://unpkg.com/screenshot-privacy-protect/dist/privacy-protect.min.js"></script>
```

### 🧰 NPM

```bash
npm install screenshot-privacy-protect
```

---

## 🛠️ Usage

### Basic Setup

```html
<script>
  PrivacyProtect.enable();
</script>
```

### With Custom Options

```js
PrivacyProtect.enable({
  feedback: true,
  blockPrint: true,
  watermarkText: '🛡️ Protected Content'
});
```

### Disable Protection

```js
PrivacyProtect.disable();
```

---

## ⚙️ Configuration Options

| Option           | Type     | Default | Description                                 |
|------------------|----------|---------|---------------------------------------------|
| `feedback`       | Boolean  | `true`  | Show overlay warning to user                |
| `blockPrint`     | Boolean  | `true`  | Disable print screen & Ctrl/⌘+P             |
| `watermarkText`  | String   | `''`    | Add watermark overlay on protected content  |

---

## 🧪 Demo

Test at: [Live Demo](https://privacy-prototype.vercel.app)

---

## 📁 Project Structure

```
📦 Screenshot-PrivacyProtectionWeb
├── privacy-protect.js
├── index.html
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome!  
Please fork the repo, create a branch, and submit a PR.

---

## 📄 License

Released under the [MIT License](LICENSE).

---

## 🙌 Credits

Built with ❤️ by [@dxvzz](https://github.com/dxvzz)  
Inspired by mobile privacy techniques like `FLAG_SECURE`


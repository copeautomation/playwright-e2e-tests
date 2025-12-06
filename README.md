# 1. Instructions and Notes

## 1.1. In this session... 

### Safely Updating Playwright Without Breaking Your Project

**Why?**
1. To get latest features of playwright
2. Compatibility with other toolsets like browsers, node.js and performance and security updates

**Approach1: Update Playwright only**
1. Step1: update the package
```sh
# Check current version
npx playwright --version

# Get the latest version
npm show playwright version

# Update to latest pw version
npm install -D @playwright/test@latest
npx playwright install --with-deps
```
2. Run test and confirm it works

**Approach2: Update Entire node packages**

```sh
# Check latest version of all the node packages
npm outdated

# Install all the latest packages and save the changes in package.json
npm update --save

# Check again and confirm 
npm outdated
```
Reference: https://playwright.dev/docs/intro#updating-playwright

Done! 🎉
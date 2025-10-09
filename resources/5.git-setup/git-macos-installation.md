# Git Installation Guide for macOS

Follow these steps to install Git on macOS:

## Steps

1. **Install Git via Xcode Command Line Tools (Recommended & Easiest):**

Open your terminal and run:

```sh
git --version
```
If Git is not installed, this command will prompt you to install the Xcode Command Line Tools. Follow the on-screen instructions.

Once installed, run the command again to confirm:

```sh
git --version
```
You should see the installed Git version.

2. **(Alternative) Install Git using Homebrew:**

First, check if you have Homebrew installed:

```sh
brew --version
```
If you see a version number, Homebrew is installed. If not, install it with:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Git:

```sh
brew install git
```

Verify the installation:

```sh
git --version
```
You should see the installed Git version.

---






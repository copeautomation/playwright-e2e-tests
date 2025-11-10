# Allure Reporter Setup for Playwright

## Pre-check
**1. Java Installation**
1. Java should be Installed - version `17 or 21`
2. `java -versoin` -> Returns the valid java version 
3. If not install it from: [Adoptium Java Installation] (https://adoptium.net/marketplace?version=21)
4. Unzip the downloaded file to `/Library/Java/JavaVirtualMachines/`
5. Add this to your `~/.zshrc` or `~/.bash_profile`

```sh
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-21*/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
```
6. Reload the file

```sh
source ~/.zshrc # OR
source ~/.bash_profile
```
7. Check the Java Version again - Should see the valid version! 🎉

**2. macOS Default Installer**
1. homebrew should available
   1. `brew -v` -> Returns a valid version 
--- 

## Jenkins Installation & Basic Setup
1. Install the lts version of jenkins
   - `brew install jenkins-lts`
2. Once installed, start the service
   - ✅ `brew services start jenkins-lts` OR 
   - `brew services restart jenkins-lts`
3. Launch the browser and confirm if Jenkins server is working
   - `localhost:8080`
4. Done!🎉

**📌 Sample commands:**
- Install the latest LTS version: `brew install jenkins-lts`
- Start the Jenkins service: `brew services start jenkins-lts`
- Restart the Jenkins service: `brew services restart jenkins-lts`
- Update the Jenkins version: `brew upgrade jenkins-lts`
---

### Reference 
- [Allure Advance Config] (https://allurereport.org/docs/playwright/)

--- 


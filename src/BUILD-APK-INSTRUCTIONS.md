# 📱 Building Poshan Android APK - Complete Guide

This guide will help you convert the Poshan React web app into an Android APK file.

---

## 📋 Prerequisites

Before starting, make sure you have:

1. **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
2. **Android Studio** - [Download here](https://developer.android.com/studio)
3. **Java JDK** (v11 or higher) - [Download here](https://www.oracle.com/java/technologies/downloads/)
4. **Git** - [Download here](https://git-scm.com/)

---

## 🚀 Step-by-Step Instructions

### Step 1: Set Up Your Development Environment

#### Install Android Studio
1. Download and install Android Studio
2. Open Android Studio and go to **SDK Manager**
3. Install the following:
   - ✅ Android SDK Platform 33 (or latest)
   - ✅ Android SDK Build-Tools
   - ✅ Android SDK Command-line Tools
   - ✅ Android Emulator

#### Set Environment Variables (Windows)
```cmd
setx ANDROID_HOME "%LOCALAPPDATA%\Android\Sdk"
setx PATH "%PATH%;%LOCALAPPDATA%\Android\Sdk\platform-tools"
setx PATH "%PATH%;%LOCALAPPDATA%\Android\Sdk\tools"
setx JAVA_HOME "C:\Program Files\Java\jdk-11"
```

#### Set Environment Variables (Mac/Linux)
Add to your `~/.bashrc` or `~/.zshrc`:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
```

---

### Step 2: Download Your Project

If you're using this from Figma Make, download all files to a folder on your computer.

```bash
# Navigate to your project folder
cd path/to/poshan-app
```

---

### Step 3: Install Dependencies

```bash
# Install project dependencies
npm install

# Install Capacitor
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android

# Initialize Capacitor
npx cap init
```

When prompted:
- **App name**: `Poshan`
- **App ID**: `com.poshan.app` (use your organization's domain)
- **Web directory**: `dist` (or `build` depending on your setup)

---

### Step 4: Build Your React App

```bash
# Build the production version of your React app
npm run build
```

This creates optimized files in the `dist` folder.

---

### Step 5: Add Android Platform

```bash
# Add Android platform to your project
npx cap add android
```

This creates an `android` folder with your Android project.

---

### Step 6: Configure Android App

#### Edit `capacitor.config.json`:
```json
{
  "appId": "com.poshan.app",
  "appName": "Poshan",
  "webDir": "dist",
  "server": {
    "androidScheme": "https"
  },
  "android": {
    "buildOptions": {
      "keystorePath": "path/to/your/keystore.jks",
      "keystoreAlias": "poshan-key"
    }
  }
}
```

#### Update App Icons
Replace icons in `android/app/src/main/res/` with your Poshan logo:
- `mipmap-hdpi/ic_launcher.png` (72x72)
- `mipmap-mdpi/ic_launcher.png` (48x48)
- `mipmap-xhdpi/ic_launcher.png` (96x96)
- `mipmap-xxhdpi/ic_launcher.png` (144x144)
- `mipmap-xxxhdpi/ic_launcher.png` (192x192)

#### Update App Name
Edit `android/app/src/main/res/values/strings.xml`:
```xml
<resources>
    <string name="app_name">Poshan</string>
    <string name="title_activity_main">Poshan</string>
    <string name="package_name">com.poshan.app</string>
    <string name="custom_url_scheme">com.poshan.app</string>
</resources>
```

---

### Step 7: Sync Capacitor

```bash
# Copy web assets to Android project
npx cap sync android
```

---

### Step 8: Open in Android Studio

```bash
# Open the Android project in Android Studio
npx cap open android
```

Android Studio will open. Wait for Gradle to finish syncing.

---

### Step 9: Build APK in Android Studio

#### Option A: Debug APK (for testing)
1. In Android Studio, click **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
2. Wait for build to complete
3. Click **locate** to find your APK
4. APK location: `android/app/build/outputs/apk/debug/app-debug.apk`

#### Option B: Release APK (for distribution)

##### Create a Keystore (one-time only):
```bash
keytool -genkey -v -keystore poshan-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias poshan-key
```

Answer the prompts and **SAVE YOUR PASSWORD** - you'll need it!

##### Configure Signing in Android Studio:
1. Go to **Build** → **Generate Signed Bundle / APK**
2. Select **APK**
3. Choose your keystore file
4. Enter your keystore password and key alias
5. Select **release** build variant
6. Click **Finish**

Your signed APK will be at: `android/app/build/outputs/apk/release/app-release.apk`

---

### Step 10: Test Your APK

#### Test on Emulator:
1. In Android Studio, click **Run** → **Run 'app'**
2. Select an emulator or create one
3. App will install and launch

#### Test on Physical Device:
1. Enable **Developer Options** on your Android phone:
   - Go to **Settings** → **About Phone**
   - Tap **Build Number** 7 times
2. Enable **USB Debugging** in **Developer Options**
3. Connect phone to computer via USB
4. Install APK:
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 🔄 Making Updates

When you update your React app:

```bash
# 1. Build your React app
npm run build

# 2. Sync with Android
npx cap sync android

# 3. Rebuild APK in Android Studio
# Follow Step 9 again
```

---

## 📦 Alternative: Command Line Build

You can build APK from command line without opening Android Studio:

```bash
# Navigate to Android folder
cd android

# Build debug APK
./gradlew assembleDebug

# Build release APK (after configuring signing)
./gradlew assembleRelease

# APK location:
# Debug: android/app/build/outputs/apk/debug/app-debug.apk
# Release: android/app/build/outputs/apk/release/app-release.apk
```

---

## 📤 Distribute Your APK

### Option 1: Direct Distribution
- Share the APK file directly
- Users need to enable "Install from Unknown Sources" in their Android settings

### Option 2: Google Play Store
1. Create a Google Play Developer account ($25 one-time fee)
2. Create a new app listing
3. Upload your **app-release.apk** (signed)
4. Fill in app details, screenshots, description
5. Submit for review

### Option 3: Other App Stores
- Amazon Appstore
- Samsung Galaxy Store
- APKPure, APKMirror (for beta testing)

---

## 🛠️ Troubleshooting

### Build Failed?
```bash
# Clean and rebuild
cd android
./gradlew clean
./gradlew assembleDebug
```

### Dependencies Issues?
```bash
# Update Capacitor
npm install @capacitor/core@latest @capacitor/android@latest
npx cap sync
```

### Icon Not Showing?
Use online tools to generate all icon sizes:
- [Icon Kitchen](https://icon.kitchen/)
- [App Icon Generator](https://www.appicon.co/)

### Can't Find Android SDK?
Make sure `ANDROID_HOME` environment variable is set correctly:
```bash
# Check on Mac/Linux
echo $ANDROID_HOME

# Check on Windows
echo %ANDROID_HOME%
```

---

## 📱 APK Size Optimization

Reduce APK size:

1. **Enable ProGuard** (code minification)
   Edit `android/app/build.gradle`:
   ```gradle
   android {
       buildTypes {
           release {
               minifyEnabled true
               shrinkResources true
               proguardFiles getDefaultProguardFile('proguard-android-optimize.txt')
           }
       }
   }
   ```

2. **Use App Bundle instead of APK**
   ```bash
   # Build AAB for Google Play
   ./gradlew bundleRelease
   ```

3. **Compress images** in your React app before building

---

## 🎯 Quick Reference Commands

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# Initialize
npx cap init

# Build React app
npm run build

# Add Android
npx cap add android

# Sync changes
npx cap sync android

# Open in Android Studio
npx cap open android

# Build from command line
cd android && ./gradlew assembleDebug
```

---

## 📞 Need Help?

Common issues and solutions:

1. **"ANDROID_HOME not set"**: Set environment variables (Step 1)
2. **"SDK not found"**: Install Android SDK via Android Studio
3. **"Build failed"**: Run `./gradlew clean` in android folder
4. **"App crashes on launch"**: Check `adb logcat` for errors

---

## ✅ Success Checklist

- [ ] Node.js installed
- [ ] Android Studio installed
- [ ] Environment variables set
- [ ] React app builds successfully (`npm run build`)
- [ ] Capacitor initialized
- [ ] Android platform added
- [ ] APK builds successfully
- [ ] APK installs on device/emulator
- [ ] App launches and works correctly
- [ ] Keystore created (for release builds)
- [ ] Release APK signed

---

**🎉 Congratulations!** You now have a working Android APK for Poshan!

For iOS builds, you would follow similar steps with `@capacitor/ios`, but you'll need:
- macOS computer
- Xcode
- Apple Developer account ($99/year)

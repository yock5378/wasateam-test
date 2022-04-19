# 安裝

```
yarn
```

# 運行

手邊沒有IOS設備，因此尚未測試，可能會需要另外做調整

```
// 運行 android
yarn android


// 運行 IOS
yarn ios
```

# 設置app金鑰

1. 將金鑰檔(.keystore)放置於 android/app
2. 修改 android/gradle.properties，將以下4行改為自己的金鑰設定

```
MYAPP_UPLOAD_STORE_FILE=<keystore file>
MYAPP_UPLOAD_KEY_ALIAS=<key alias>
MYAPP_UPLOAD_STORE_PASSWORD=<store password>
MYAPP_UPLOAD_KEY_PASSWORD=<key password>
```

# 打包

```
// 打包 android 測試用 .apk，產出在 android/app/build/outputs/apk/release
cd android
./gradlew assembleRelease

// 打包 android 發布用 .aab，產出在 android/app/build/outputs/bundle/release
cd android
./gradlew bundleRelease
```

# 程式架構

1. 進入點為 index.js, 主要程式放置於 src
2. tab, side menu 使用 react navigation
3. 串接 API 使用 axios
4. src資料夾結構
    - assets - 放置圖檔
    - components - 放置通用元件
    - helper - 放置通用 function
    - navigation - 放置 navigation 元件
    - screens - 放置頁面

# 項目進行時間

1. 用 Reactnative 建立基礎 APP 完成以下功能 (ReactNative-Cli) (10 min)
2. 下方 APP tab 切換頁面 (4 hr)
3. app 選單點擊打開、收起 (10 hr)
4. 串接一組列表資料 api，並可瀏覽 (4 hr)

# 上架流程

目前只有做到產出 .apk .aab，上架的部分沒有實作過，因此只有先找資料

- [Android上架流程](https://thumbb13555.pixnet.net/blog/post/332539819-googleplay)
- [IOS上架流程](https://www.appcoda.com.tw/ios-app-submission/)

# スクリプトのテスト環境

ニフティクラウド mobile backendのスクリプトをローカルでテストするための環境です。

## セットアップ

```
npm install
```

nodemonがあると開発が捗ります。

```
npm install nodemon -g
```

## 起動

```
node app.js
```

または

```
nodemon app.js
```

後は http://localhost:3000/ を開くだけです。

クエリー、ボディーを指定してスクリプトが実行できます。

## 開発

script.jsを自由に修正してください。

## デプロイ

できあがったscript.jsをニフティクラウド mobile backendの管理画面でアップロードします。

## ライセンス

MIT License

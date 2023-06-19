# Webcam Recorder with Backend

このプロジェクトは、ブラウザ上でWebカメラを使用して録画を行い、録画されたWebM動画をMP4形式に変換してダウンロードするアプリケーションです。バックエンドサーバーとしてExpressを使用し、フロントエンドにはHTML、Bootstrap、TypeScriptを使用しています。

## ライブラリのインストール

プロジェクトを実行するために、以下のライブラリをインストールする必要があります。

- Express
- Multer
- Fluent-ffmpeg
- CORS

インストールするには、以下のコマンドを使用します。

```
npm install express multer fluent-ffmpeg cors
```
コードの実行方法
プロジェクトのルートディレクトリに移動します。

サーバーを起動するには、以下のコマンドを実行します。

```
npm start
```
ブラウザでhttp://localhost:3000にアクセスします。

ウェブページ上で「Start Recording」ボタンをクリックして録画を開始します。

録画を停止するには、「Stop Recording」ボタンをクリックします。

録画が完了したら、「Download」ボタンをクリックして、録画された動画をMP4形式でダウンロードします。
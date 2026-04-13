# Files
ファイル集。

---

## Scripts
スクリプト集。

### 使い方:
1. 使いたいスクリプトをコピー
2. Terminal に貼り付けて Enter 

### `gh443`
github.com への SSH を大学のネットワークから使えるようにする。
一回だけ実行すれば OK 。

```sh
bash <(curl -s https://raw.githubusercontent.com/somastash/files/refs/heads/main/gh443)
```

### `clone`
[github.com/somastash](https://github.com/orgs/somastash/repositories) 内のリポジトリを、自分の Mac にクローンする。

```sh
bash <(curl -s https://raw.githubusercontent.com/somastash/files/refs/heads/main/clone) repo_name
```

### `env`

```sh
bash <(curl -s https://raw.githubusercontent.com/somastash/files/refs/heads/main/env)
```

---

## その他

### `encode.js`

```sh
cd プロジェクトルート
curl -LO https://raw.githubusercontent.com/somastash/files/refs/heads/main/encode.js
```

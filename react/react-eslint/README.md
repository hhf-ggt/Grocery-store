## 安装eslint

### 主要使用eslint-config-airbnb 插件

- npm install eslint  
- eslint-config-airbnb
    - 使用airbnb 包含react的插件
- eslint-plugin-import
    - 检测import export
- eslint-plugin-jsx-a11y
    - 检测 jsx
- eslint-plugin-react
    - 检测 react
- eslint-plugin-react-hooks
    - 检测hooks

- 初始化eslint文件
    - ./node_modules/ ./bin/eslint --init

- 安装格式化工具Prettier
    - prettier eslint-config-prettier eslint-plugin-prettier
    - 修改eslint 配置
    ```javascrip
        "extends": [
            "airbnb",
            "plugin:prettier/recommended"
        ]
    ```
    - 增加prettier的配置文件
    ```javascript
        module.exports = {
            "printWidth": 120, //一行的字符数，如果超过会进行换行，默认为80
            "tabWidth": 2, //一个tab代表几个空格数，默认为2
        }
    ```
    - 提交的时候校验
    - npm install --save-dev prettier husky lint-staged eslint


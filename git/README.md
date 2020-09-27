## [git官网](https://git-scm.com/)
    1.安装下载git
    
    2.选择windows版本64位的一路傻瓜式下载
    
    3.这里需要记住你的安装路劲后续会配置环境变量使用到
    
    4.生成ssh-key
    
    # ssh-keygen -t rsa -C "your_email@example.com"
    
    5.找到id_rsa 和id_rsa.pub
    
    6.注册github账户
    
    7.将id_rsa.pub的内容复制粘贴到github的新建公钥的地方
    
    8.在github上创建一个仓库
    
    9.本地初始化一个项目 git init
    
    10.接下来是暂存操作 git add .
    
    11.git commit -m"注释" 将暂存的代码添加到本地的仓库中
    
    12.第一次需要与远程仓库建立连接 git remote add origin "这里是你远程仓库的地址"
    
    13.git push -u origin master
    
    14.最后可能需要输入你的github的账户和密码才能成功的推送到远程的仓库
#### [git文档](https://git-scm.com/book/en/v2)
#### [github官网](https://github.com/)

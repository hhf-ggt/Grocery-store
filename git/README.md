## [git官网](https://git-scm.com/)
    1.下载安装git
    
    2.选择windows版本64位的一路傻瓜式下载+安装
    
    3.这里需要记住你的安装路径后续会配置环境变量使用到
    
    4.生成ssh-key(命令如下)
    
    # ssh-keygen -t rsa -C "your_email@example.com"
    
    5.找到id_rsa 和id_rsa.pub(默认会是在我们c盘下面的ssh文件目录下)
    
    6.注册github账户
    
    7.将id_rsa.pub的内容复制粘贴到github的新建公钥的地方
    
    8.在github上创建一个仓库
    
    9.本地初始化一个项目 git init
    
    10.接下来是暂存操作 git add .
    
    11.git commit -m"注释" 将暂存的代码添加到本地的仓库中
    
    12.第一次需要与远程仓库建立连接 git remote add origin "这里是你远程仓库的地址"
    
    13.git push -u origin master
    
    14.最后可能需要输入你的github的账户和密码才能成功的推送到远程的仓库
    
    15.git clone "远程仓库地址" --克隆项目
    
    16.git checkout branchName --切换分支
    
    17.git checkout -b branchName --新建并且切换分支
    # -b 相当于 git branch newbranchName && git checkout newBranchName
    
    18.git log -p --查看提交信息
    
    19.git log --oneline --查看提交信息
    
    20.git log --preity
    
    21.git status --查看修改状态
    
    22.git diff
    
    23.git pull
    
    24.git fetch
    
    25.git branch -D branchName
    
    26.git push origin --delete branchName
    
    27.git stash && git apply
    # 当我们在master分支或者一些非本次开发分支上进行开发时 需要重新切换到新分支并且将开发内容也迁移过去使用此方法
    
    28.git rest --HARD hash(版本回退)
    
    29.git init 
    
    30.git add .
    
    31.git commit -m""
    
    32git commit -a -m"覆盖掉上一次的commit信息"
    
    33.git branch -a
    
    34.git branch -r
    
    35.git merge 合并分支
    
    36.git tag
    
    37.git tag [tag]
    
    38.git show [tag] 查看tag信息
    
    39.git tag -d [tag] 删除本地tag
    
    40.git push [remote] [tag] 提交到远程tag
    
    41.
#### [git文档](https://git-scm.com/book/en/v2)
#### [github官网](https://github.com/)

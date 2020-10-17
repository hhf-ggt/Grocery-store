## 我们每天使用git进行工作上的协作，比如常见的git init git add git commit -m"" 等等，那我们是否真的了解git 在执行这些文件的时候做了什么事情呢，下面我们就来看看；

#### git init 初始化一个本地仓库
    这是我们非常熟悉的一个命令就是来初始化一个仓库的命令，那么当我们执行完这个命令后 到底发生了什么呢

    首先我们来创建一个文件夹名称为git_demo
    mkdir git_demo

    之后我们进行初始化仓库
    git init

    监听文件的变化 一秒打印一次的命令
    watch -n 1 -d find .

    *** 此时我们使用命令可以看到git_demo文件中生成了一些文件以及文件夹
    .git 文件 .git 文件下面又有config description HEAD hooks infos objects refs
    ├─hooks
    ├─info
    ├─objects
    │  ├─info
    │  └─pack
    └─refs
        ├─heads
        └─tags

    这里我们主要先看下这个config文件
    cd .config && cat .config

    我们会发现这是我们本地仓库的一些信息和配置文件的存储 比如你的用户名 密码 以及 邮箱 这些未来出现在你commit信息 中，但这只是你的本地仓库 你还可以 使用git config --global user.name “”来设置你的全局的名称 

    还可以使用git config -l来查看全局的配置


#### git add . 将工作区的代码---->添加到暂存区
    接下来我们就可以创建文件以及开始构建我们的项目了，那么我们每当创建完成一些东西的时候 我们需要一个命令将我们的文件从我们的工作区 添加到暂存区 那么这时候就需要用到我们的这个命令

    执行完成这个命令我们的.git文件会发生什么变化呢 我们来看看
    首先我们创建一个文件 内容是 hello git
    echo "hello git"> hello.txt
    此时我们的文件夹中必然多出来一个名为hell的文件 并且内容是hello git

    执行前的文件树
     ├─hooks
    ├─info
    ├─objects
    │  ├─info
    │  └─pack
    └─refs
        ├─heads
        └─tags
    
    当我们执行完git add .那我们来看看.git文件中发生了什么变化
    ├─hooks
    ├─info
    ├─objects
    │  ├─8d
    │  ├─info
    │  └─pack
    └─refs
        ├─heads
        └─tags
    那么我们可以明显的看到objects文件中多了一个8d的东西ls后发现他是一个hash串的值
    0e41234f24b6da002d962a26c2495ea16a425f
    长度是四十位 16进制 ASH1
    我们现在看到的都是十六进制的 其实还有二进制的表示法 160位

    我们可以通过 git cat-file -p 8d0e4123 来查看我们这个文件的内容 打开后发现是我们创建的hello.txt中的内容“hello git”
    -t 是查看类型 -s 查看大小 之后我们通过命令来生成hash值
    HHASH算法是通过输的任意长度的内容经过散列算法变换固定长度的输出 
    MD5 128bit
    SHA1 160bit
    SHA256 256
    SHA512 512bit

    那么我们就可以看到每当我们进行git add .的时候我们增加的文件git将会暂存起来 

    这个hash 是由三部分组成  文件的类型 文件的内容 文件的内容长度 三部分来进行hash算法得出来的

    echo "hello git" | shasum
    我们的hash 是 bolb 10/0hello git | shasum
    blob 是类型 10是内容长度 /0 后面是内容

   


#### git commit -m"注释信息"

 working directory ---> staging area ----> git repository
                  git add .         git commit -m""
我们可以通过 git ls-files 来查看当前在索引区的文件内容

git ls-files -s

我们可以使用git status 来看我们工作区和暂存区的区别

当我们去修改一个文件后在进行commit的时候将会生成一个新的hash


#### git 文件的状态
    untraked
    当我们新创建的文件
    如果我们想我的文件的状态变为staged的时候可以使用git add 命令

    modified

    staged

    unmodified


#### branch HEAD
branch are named pointers to commit
branch commit tree blob

git branch -D branch_name

git branch  查看分支

git checkout -b branch_name

git branch -d "" 非强制性删除 会有提示信息

#### git diff

